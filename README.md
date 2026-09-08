# E-Shop

A responsive, multi-page e-commerce demo site built with plain HTML, CSS, Bootstrap 5, and vanilla JavaScript — no frameworks, no build step.

🔗 **Live demo:** [faraaz-dev.github.io/E-Shop](https://faraaz-dev.github.io/E-Shop/)

## Features

- Fully responsive layout (mobile, tablet, desktop)
- Product catalog with category-based search filtering
- Customer review carousel (Bootstrap Carousel component)
- Custom 404 error page
- Clean, accessible navbar with proper contrast and centered nav links
- Contact page with a styled form and business info

## Pages

| Page | Description |
|---|---|
| `index.html` | Homepage — hero section, featured products, customer reviews |
| `Products.html` | Full product listing with search/filter by category |
| `About.html` | About the store |
| `Contact.html` | Contact form and business details |
| `404.html` | Custom "page not found" screen |

## Tech Stack

- HTML5
- CSS3 (custom styles + [Bootstrap 5.0.2](https://getbootstrap.com/))
- Vanilla JavaScript (no frameworks)

## Project Structure
E-Shop/
├── index.html
├── About.html
├── Products.html
├── Contact.html
├── 404.html
├── css/
│ └── style.css
├── js/
│ └── script.js
└── assets/
├── img/
├── svg/
└── favicon.svg

## Testing the 404 Page

The custom 404 page is served automatically by GitHub Pages whenever a broken or non-existent URL is visited on the live site — no manual navigation needed.

To test it, visit any made-up path on the live demo, for example:

https://faraaz-dev.github.io/E-Shop/asdf123


You should see the custom error page (matching navbar/footer, a "404 — Page Not Found" message, and buttons to go back home or browse products) instead of GitHub's default error screen.

> Note: this only works on the deployed GitHub Pages site. Opening `404.html` directly from a local folder just opens that file — it won't trigger automatically, since there's no server to catch broken links locally.

## Running Locally

No build tools or dependencies required — it's static HTML/CSS/JS.

```bash
git clone https://github.com/FARAAZ-DEV/E-Shop.git
cd E-Shop
```

Then just open `index.html` in your browser, or serve it with any static server (e.g. the VS Code "Live Server" extension) for the best experience.

## Deployment

This project is deployed via **GitHub Pages** directly from the `main` branch.

## Author

Built by [Mohammad Faraz](https://github.com/FARAAZ-DEV)
