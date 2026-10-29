// cart badge + mini cart for the listing page

// N from the assignment sheet. Each product can be added (N mod 4) + 2 times.
const N = 14;
const MAX_PER_PRODUCT = (N % 4) + 2;

// every item in the cart is one object: { id, name, price }
let cart = [];

const cartLink = document.getElementById('cartLink');
const cartBadge = document.getElementById('cartBadge');
const miniCart = document.getElementById('miniCart');
const miniCartList = document.getElementById('miniCartList');
const miniCartEmpty = document.getElementById('miniCartEmpty');
const miniCartTotal = document.getElementById('miniCartTotal');
const cards = document.querySelectorAll('.product-card');


function formatPrice(amount) {
    return 'PKR ' + amount.toLocaleString('en-US');
}

// how many of this product are in the cart right now
function countOf(id) {
    return cart.filter(function (item) {
        return item.id === id;
    }).length;
}


// redraws everything that depends on the cart array
function renderCart() {

    // list in the mini cart
    miniCartList.innerHTML = '';

    cart.forEach(function (item, index) {
        const li = document.createElement('li');

        const name = document.createElement('span');
        name.textContent = item.name;

        const price = document.createElement('span');
        price.className = 'price';
        price.textContent = formatPrice(item.price);

        const removeBtn = document.createElement('button');
        removeBtn.type = 'button';
        removeBtn.className = 'remove';
        removeBtn.textContent = 'Remove';
        removeBtn.dataset.index = index;
        removeBtn.setAttribute('aria-label', 'Remove ' + item.name);

        li.append(name, price, removeBtn);
        miniCartList.appendChild(li);
    });

    miniCartEmpty.hidden = cart.length > 0;

    // total
    const total = cart.reduce(function (sum, item) {
        return sum + item.price;
    }, 0);
    miniCartTotal.textContent = formatPrice(total);

    // badge
    cartBadge.textContent = cart.length;
    cartLink.setAttribute('aria-label', 'Shopping bag, ' + cart.length + ' items');

    // add to cart buttons: lock a product once it hits the limit
    cards.forEach(function (card) {
        const button = card.querySelector('.btn');

        if (countOf(card.dataset.id) >= MAX_PER_PRODUCT) {
            button.textContent = 'Limit reached';
            button.disabled = true;
        } else {
            button.textContent = 'Add to Cart';
            button.disabled = false;
        }
    });
}


// add to cart
cards.forEach(function (card) {
    const button = card.querySelector('.btn');

    button.addEventListener('click', function () {
        const id = card.dataset.id;

        if (countOf(id) >= MAX_PER_PRODUCT) {
            return;
        }

        const name = card.querySelector('h3').textContent.trim();
        // "PKR 5,990" -> 5990
        const price = parseInt(card.querySelector('.price').textContent.replace(/[^0-9]/g, ''), 10);

        cart.push({ id: id, name: name, price: price });
        renderCart();
    });
});


// remove (the buttons are created by renderCart, so listen on the list)
miniCartList.addEventListener('click', function (e) {
    const removeBtn = e.target.closest('.remove');

    if (!removeBtn) {
        return;
    }

    cart.splice(Number(removeBtn.dataset.index), 1);
    renderCart();
});


// open / close the mini cart
function togglePanel() {
    const willOpen = miniCart.hidden;
    miniCart.hidden = !willOpen;
    cartLink.setAttribute('aria-expanded', String(willOpen));
}

cartLink.addEventListener('click', function (e) {
    e.preventDefault();   // stay on this page, the panel has its own checkout link
    togglePanel();
});

document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && !miniCart.hidden) {
        togglePanel();
        cartLink.focus();
    }
});


renderCart();