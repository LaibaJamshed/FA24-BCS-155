# Assignment 2 - Outfitters clone

**Reference site:** Outfitters - https://outfitters.com.pk/

![Reference site screenshot](screenshots/reference-outfitters.png)

## Files

- `index.html` - homepage with the navbar, hero slider, category strip and the product grids
- `product.html` - product detail page (image, name, price, description, size, quantity, add to cart)
- `style.css` - my styles, on top of Bootstrap
- `images/` - all the images and hero videos

## What I used

I used Bootstrap 5 (from the CDN) for the navbar and the grid. The product cards sit in `row-cols-2 row-cols-md-3 row-cols-lg-5`, so they go 2 per row on a phone, 3 on a tablet and 5 on desktop. The page sections use Bootstrap's `row` and `col-*` classes too, and the buttons and the quantity dropdown are Bootstrap components. Flexbox and grid handle the rest (category strip, footer links, card contents). No tables.

There is no JavaScript of my own. The only script is Bootstrap's bundle, and that is just there for the hero carousel. The rest is plain HTML and CSS:

- the navbar is `position: sticky`. On the home page it starts transparent on top of the hero and turns white when you scroll, which is done with a CSS scroll animation. If a browser doesn't support that, the navbar is just white all the time.
- the hamburger menu is a `<details>` element
- the size buttons on the product page are radio buttons styled with Bootstrap's `btn-check`
- "Add to Cart" and the cart icon don't do anything yet

## Responsive

- **phone (375px):** 2 cards per row, nav links go inside the hamburger menu, smaller logo and hero
- **tablet (768px):** 3 cards per row, nav links show up in the middle of the navbar
- **desktop:** 5 cards per row, and "Categories in Focus" shows the image next to the products

## Running it

Just open `index.html` in a browser. It needs internet for the Bootstrap files. Click any product to get to `product.html`.