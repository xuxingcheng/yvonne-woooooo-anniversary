# For Yvonne Woooooo

A romantic single-page anniversary website.

## Files

- `index.html` — main page
- `styles.css` — visual design and responsive layout
- `script.js` — heart animation and surprise button
- `.github/workflows/pages.yml` — GitHub Pages deployment workflow

## How to publish on GitHub Pages

```bash
git init
git add .
git commit -m "Create anniversary website for Yvonne"
gh repo create yvonne-woooooo-anniversary --public --source=. --remote=origin --push
```

Then go to:

**GitHub repo → Settings → Pages → Build and deployment → GitHub Actions**

The workflow will deploy the site automatically.

## Customize

Replace the gallery placeholder boxes in `index.html` with real photos, or update the letter text.
