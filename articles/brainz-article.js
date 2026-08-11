const reader = document.querySelector("#brainzReader");
const params = new URLSearchParams(window.location.search);
const requestedTitle = params.get("article");
const article = window.ARTICLES.find((item) => item.title === requestedTitle && item.type === "brainz");

function renderMissingArticle() {
  reader.innerHTML = `
    <a class="back-link" href="../index.html#articles">Back to articles</a>
    <h1>Article Not Found</h1>
    <p class="article-lead">Please return to the article archive and choose a publication.</p>
  `;
}

if (!article) {
  renderMissingArticle();
} else {
  document.title = `${article.title} | Sandro Endler`;
  const image = window.ARTICLE_IMAGES[article.title];

  reader.innerHTML = `
    <a class="back-link" href="../index.html#articles">Back to articles</a>
    <section class="reader-author">
      <img src="../assets/sandro-endler-author-picture.jpg" alt="Sandro Endler" />
      <div>
        <h2>Sandro Endler</h2>
        <p>Senior Level Executive Contributor, Brainz Magazine</p>
      </div>
    </section>
    <p class="article-kicker">${article.source} | ${article.date}</p>
    <h1>${article.title}</h1>
    <p class="article-lead">${article.summary}</p>
    ${
      image
        ? `<img class="reader-hero-image" src="${image}" alt="${article.title}" />`
        : ""
    }
    <section class="reader-note">
      <h2>About This Article</h2>
      <p>
        This article is part of Sandro Endler's selected Brainz Magazine archive.
        The full original publication remains available at Brainz Magazine.
      </p>
      <a class="button primary" href="${article.url}" target="_blank" rel="noreferrer">Continue to Brainz Magazine</a>
    </section>
  `;
}
