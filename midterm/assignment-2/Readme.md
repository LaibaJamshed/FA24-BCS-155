
# Lab Mid Term - Outfitters: Navigation, Checkout and Cart

- **Name:** LAIBA JAMSHED
- **Roll number:** FA24-BCS-155
- **N:** 55
- **BP:** 600 + 55 = **655px**
- **H:** (55 x 7) mod 360 = **25** (accent colour `hsl(25, 70%, 45%)`)
- **K:** (55 mod 3) + 3 = **4** mega-menu columns
- **Cart limit per product:** (55 mod 4) + 2 = **5**
- **Delivery date window:** from the exam date up to 55 days after it

**Reference site:** Outfitters - https://outfitters.com.pk/

## Files changed

- `index.html` - added the "Shop by Category" item (mega-panel and mobile accordion), linked the cart icon to `checkout.html`, added the cart badge, the mini-cart markup and the `script.js` link
- `style.css` - mega-panel layout and stacking, accordion styles, checkout grid layout and validation styles, mini-cart and badge styles
- `checkout.html` - new checkout page (two fieldsets, HTML5 validation only)
- `script.js` - new file, cart logic (plain JavaScript)
- `README.md` - this file

`product.html` and the `images/` folder are unchanged from the baseline copy.

## What I used

Bootstrap 5 (CDN) is still the base of the page: the navbar, the product grid (`row-cols-2 row-cols-md-3 row-cols-lg-5`) and the buttons. The header, product cards and footer are the same ones from Assignment 2. Tasks 1 and 2 use no JavaScript at all. The only JavaScript is `script.js` for Task 3, plus Bootstrap's own bundle for the hero carousel and hamburger.

## Task 1 - Mega-menu

**What I changed:** I added a "Shop by Category" item to the navbar. From 655px and wider it opens a full-width panel under the navbar with 4 columns (Tops, Bottoms, Outerwear, Footwear), each with a heading and 4 links in a list. It opens on hover and when the item gets keyboard focus, using `:hover` and `:focus-within`, so Tab alone opens it. Below 655px the same 4 groups sit inside the hamburger menu as `<details>` / `<summary>` blocks that start closed and open independently.

**Why:** `:focus-within` keeps the panel open while focus is anywhere inside it, and it closes when focus leaves. The panel is positioned absolutely with a high `z-index`, so it sits above the product grid, card hover effects and the sticky navbar without pushing the content down. All links stay inside the `<nav>`, and each column is a `<ul>`.

## Task 2 - Checkout form

**What I changed:** I created `checkout.html`, linked from the cart icon. It has two fieldsets with legends: "Contact" (full name, email, phone) and "Delivery" (address, city as a `<select>`, delivery date). Every input has a `<label for="...">` matched to its `id`. The phone field uses `pattern="03[0-9]{2}-[0-9]{7}"`, and the date uses `min` and `max` (exam date to 55 days after it). Invalid fields get a red border and a short message only after interaction, using `:user-invalid`.

**Why:** Native HTML5 attributes (`required`, `type="email"`, `pattern`, `min`, `max`) handle the validation, and `:user-invalid` makes sure nothing shows red on page load. From 655px the two fieldsets sit side by side with CSS Grid and labels in a left column; below 655px it is one column with labels above the inputs. The submit button is full width at every size.

## Task 3 - Cart badge and mini cart

**What I changed:** I added `script.js`, linked from the listing page. Clicking "Add to Cart" reads the product name and price from the card and pushes it into an array, and the badge on the cart icon shows the item count. Clicking the cart icon opens a mini-cart under it listing every product with its price and a "Remove" button; the total is calculated with `reduce()`. Removing an item updates the list, total and badge at once, and clicking the icon again closes the panel. Each product can be added at most 5 times; after that its button reads "Limit reached" and is disabled until one of that product is removed.

**Why:** The cart array is the single source of truth, and one `render()` function redraws the list, total, badge and button states from it, so everything stays in sync after every add or remove. The cart icon links to `checkout.html` through the "Go to checkout" button in the mini-cart.

## Responsive behaviour

Tested at 375px, 655px (BP) and 1280px.

- **375px:** 2 cards per row, links and category accordion inside the hamburger menu, single-column checkout
- **655px and wider:** mega-menu panel and side-by-side checkout fieldsets
- **1280px:** 5 cards per row, full navbar with the "Shop by Category" mega-panel

## AI tools used

Claude (Anthropic).

## Running it

Open `index.html` in a browser (it needs internet for the Bootstrap files). Click the cart icon to open the mini-cart and go to the checkout page.
