# Sandro Endler Articles Page

Static website for Sandro Endler's independent articles hub, Brainz Magazine archive, books, credentials, and contact links.

## Files

- `index.html` is the page structure.
- `styles.css` controls the visual design.
- `articles.js` contains the article list.
- `script.js` renders the article cards and filters.
- `articles/brainz-article.html` displays Brainz archive previews before linking to the original publication.
- `articles/do-you-know-what-your-business-is-worth.html` is the first original article page.
- `articles/article.css` adds article page styling.
- `assets/` stores local images.

## Render Deployment

This site is ready for Render as a static site. The included `render.yaml` sets:

- Runtime: Static
- Publish directory: `.`
- Build command: none

When connected through GitHub, Render can deploy this repository directly from the root folder.

## Publishing New Articles

Add a new article object to the top of `articles.js`, create the article HTML file under `articles/`, add the image under `assets/`, and connect the image title in `script.js`.
