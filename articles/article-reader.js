const reader = document.querySelector("#articleReader");
const params = new URLSearchParams(window.location.search);
const requestedTitle = params.get("article");
const article = window.ARTICLES.find((item) => item.title === requestedTitle && item.type === "original");

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function resolveImagePath(path) {
  if (!path) {
    return "";
  }

  if (/^(https?:|data:)\/?\/?/.test(path)) {
    return path;
  }

  return path.startsWith("../") ? path : `../${path}`;
}

function renderBlocks(blocks = []) {
  return blocks
    .map((block) => {
      if (block.type === "h2") {
        return `<h2>${escapeHtml(block.text)}</h2>`;
      }

      if (block.type === "ul") {
        const items = (block.items || [])
          .map((item) => `<li>${escapeHtml(item)}</li>`)
          .join("");
        return `<ul>${items}</ul>`;
      }

      return `<p>${escapeHtml(block.text)}</p>`;
    })
    .join("");
}

function renderMissingArticle() {
  reader.innerHTML = `
    <a class="back-link" href="../index.html#articles">Back to articles -></a>
    <p class="article-label">Beyond The Numbers</p>
    <h1>Article Not Found</h1>
    <p>Please return to the article archive and choose an article.</p>
  `;
}

if (!article || !article.content) {
  renderMissingArticle();
} else {
  const image = resolveImagePath(article.image || window.ARTICLE_IMAGES[article.title]);
  const portuguesePdf = resolveImagePath(article.portuguesePdf);
  document.title = `${article.title} | Beyond The Numbers`;

  reader.innerHTML = `
    <a class="back-link" href="../index.html#articles">Back to articles -></a>
    <p class="article-label">Beyond The Numbers</p>
    <h1>${escapeHtml(article.title)}</h1>
    <p class="article-byline">By Sandro Endler | ${escapeHtml(article.date)}</p>
    ${image ? `<img class="article-hero-image ${article.imageFit === "contain" ? "contain-image" : ""}" src="${image}" alt="${escapeHtml(article.title)}" />` : ""}
    <div class="article-body">
      ${renderBlocks(article.content)}
    </div>
    ${portuguesePdf ? `
      <aside class="translation-download" id="portuguese-edition" aria-label="Portuguese translation">
        <div>
          <p class="translation-eyebrow">Portuguese Edition</p>
          <h2>Prefere ler em português?</h2>
          <p>Leia a tradução completa deste artigo em PDF.</p>
        </div>
        <a class="translation-button" href="${portuguesePdf}" target="_blank" rel="noopener">
          Ler em português (PDF)
        </a>
      </aside>
    ` : ""}
  `;
}
