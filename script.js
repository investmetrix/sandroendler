const articleGrid = document.querySelector("#articleGrid");
const filters = document.querySelectorAll(".filter");

window.ARTICLE_IMAGES = {
  "Do You Know What Your Business Is Worth? Why Business Valuation Matters More Than You Think":
    "assets/business-valuation-buildings.jpg",
  "Why Most Businesses Are Never Truly Ready for Growth":
    "https://img1.wsimg.com/isteam/ip/8fbbcf74-b5f7-44ec-bb6f-221cc5fe2a6e/image%20site%20august%202026.jpg/:/cr=t:5.52%25,l:0%25,w:100%25,h:88.97%25/rs=w:600,h:300,cg:true",
  "Are You Building a Business That Can Transition?":
    "https://img1.wsimg.com/isteam/ip/8fbbcf74-b5f7-44ec-bb6f-221cc5fe2a6e/Screenshot%202026-07-01%20135437.png/:/rs=w:600,h:300,cg:true,m/cr=w:600,h:300",
  "How Businesses Go Broke Gradually, Then Suddenly":
    "https://img1.wsimg.com/isteam/ip/8fbbcf74-b5f7-44ec-bb6f-221cc5fe2a6e/Image%20june%20brainz.jpg/:/cr=t:16.74%25,l:0%25,w:100%25,h:66.53%25/rs=w:388,h:194,cg:true",
  "Financial Clarity to Capital Access - A Structured Framework for Better Business Decisions":
    "https://img1.wsimg.com/isteam/ip/8fbbcf74-b5f7-44ec-bb6f-221cc5fe2a6e/IMG_0750.jpeg/:/rs=w:388,h:194,cg:true,m/cr=w:388,h:194",
  "Capital Discipline - Why Ambition Isn't Enough for Funding Success":
    "https://img1.wsimg.com/isteam/ip/8fbbcf74-b5f7-44ec-bb6f-221cc5fe2a6e/article%20capital.jpg/:/rs=w:388,h:194,cg:true,m/cr=w:388,h:194",
  "The Buyer Is Interested - Is Your Business Truly Prepared?":
    "https://static.wixstatic.com/media/194202_f5e5c92c862344048a860e85090790c1~mv2.jpg/v1/fill/w_1500,h_1000,al_c/194202_f5e5c92c862344048a860e85090790c1~mv2.jpg",
  "The Importance of Creating an Annual Budget for Your Business":
    "https://img1.wsimg.com/isteam/ip/8fbbcf74-b5f7-44ec-bb6f-221cc5fe2a6e/image%209.jpg/:/cr=t:12.53%25,l:0%25,w:100%25,h:74.94%25/rs=w:388,h:194,cg:true",
  "What Are the First Steps to Starting a Business?":
    "https://static.wixstatic.com/media/2736db_3c7d85f9a5ca42fc87e73d642810ebcc~mv2.png/v1/fill/w_870,h_534,al_c,q_90/2736db_3c7d85f9a5ca42fc87e73d642810ebcc~mv2.png",
  "A Strong Start - Face the Changes You Need to Make to Thrive in 2026":
    "https://img1.wsimg.com/isteam/ip/8fbbcf74-b5f7-44ec-bb6f-221cc5fe2a6e/brainz%202026%20jan.jpg/:/cr=t:10%25,l:0%25,w:100%25,h:80%25/rs=w:388,h:194,cg:true",
  "Reflect, Reset, Rebuild - A Strategic Guide to Ending the Year with Purpose":
    "https://img1.wsimg.com/isteam/ip/8fbbcf74-b5f7-44ec-bb6f-221cc5fe2a6e/194202_1815428e6c374783bc1c83a6940f99cd~mv2%20(1.jpg/:/cr=t:12.28%25,l:0%25,w:100%25,h:75.44%25/rs=w:388,h:194,cg:true",
  "Cash Flow - The Lifeblood of Every Business":
    "https://img1.wsimg.com/isteam/ip/8fbbcf74-b5f7-44ec-bb6f-221cc5fe2a6e/cash%20flow%20.jpg/:/cr=t:12.53%25,l:0%25,w:100%25,h:74.94%25/rs=w:388,h:194,cg:true",
  "Liquidity - The Guardian of Business Resilience":
    "https://img1.wsimg.com/isteam/ip/8fbbcf74-b5f7-44ec-bb6f-221cc5fe2a6e/brains%20article%20liquidity.jpg/:/cr=t:12.53%25,l:0%25,w:100%25,h:74.94%25/rs=w:388,h:194,cg:true",
  "Know What You Don't Know Is the Key to Strengthening Your Business Finances":
    "https://img1.wsimg.com/isteam/ip/8fbbcf74-b5f7-44ec-bb6f-221cc5fe2a6e/194202_27dfd2abd49748ca8092342aec9ac90e~mv2.jpg/:/cr=t:9.02%25,l:0%25,w:100%25,h:81.97%25/rs=w:388,h:194,cg:true",
  "Why Now Is the Perfect Time to Re-Evaluate Your Business Plan":
    "https://static.wixstatic.com/media/194202_2bff06f3b3144d0aa404e975c7a56c53~mv2.jpg/v1/fill/w_640,h_419,al_c/194202_2bff06f3b3144d0aa404e975c7a56c53~mv2.jpg",
  "Develop a Financial Brain to Fuel Long-Term Success and Growth":
    "https://static.wixstatic.com/media/194202_f606f790dd4844bfb8ec621189d49444~mv2.jpg/v1/fill/w_612,h_365,al_c/194202_f606f790dd4844bfb8ec621189d49444~mv2.jpg",
  "The Cash vs. Profit Trap":
    "https://img1.wsimg.com/isteam/ip/8fbbcf74-b5f7-44ec-bb6f-221cc5fe2a6e/5cc0c2e5-f2df-4649-b3d5-44381fe08cfa.png/:/cr=t:12.52%25,l:0%25,w:100%25,h:74.96%25/rs=w:388,h:194,cg:true",
  "Stop Guessing and Start Forecasting":
    "https://img1.wsimg.com/isteam/ip/8fbbcf74-b5f7-44ec-bb6f-221cc5fe2a6e/a3a6dd09-347a-4cb4-aab1-162069248319.png/:/cr=t:5.53%25,l:0%25,w:100%25,h:88.94%25/rs=w:388,h:194,cg:true",
  "Accounting Is Your Friend, Not Your Enemy":
    "https://img1.wsimg.com/isteam/ip/8fbbcf74-b5f7-44ec-bb6f-221cc5fe2a6e/5fd63c1e-6b1c-47f7-918b-e22acb82a5b7.png/:/cr=t:12.55%25,l:0%25,w:100%25,h:74.9%25/rs=w:388,h:194,cg:true",
  "How a Fractional CFO Can Transform a Business From Chaos to Clarity":
    "https://img1.wsimg.com/isteam/ip/8fbbcf74-b5f7-44ec-bb6f-221cc5fe2a6e/471eb843-3f1b-4950-be11-f5d11320e103.png/:/cr=t:12.5%25,l:0%25,w:100%25,h:75%25/rs=w:388,h:194,cg:true",
  "Start 2025 Strong With A Business Financial Health Checklist":
    "https://static.wixstatic.com/media/194202_4bbf3ad996f241a8a55e9b66584c29ea~mv2.jpg/v1/fill/w_612,h_391,al_c/194202_4bbf3ad996f241a8a55e9b66584c29ea~mv2.jpg",
  "Why 2025's Success Starts With A Budget":
    "https://img1.wsimg.com/isteam/ip/8fbbcf74-b5f7-44ec-bb6f-221cc5fe2a6e/Brainz%203.jpg/:/cr=t:13.13%25,l:0%25,w:100%25,h:73.73%25/rs=w:388,h:194,cg:true",
  "The Underrated Power of Discipline":
    "https://img1.wsimg.com/isteam/ip/8fbbcf74-b5f7-44ec-bb6f-221cc5fe2a6e/2e42a321-6f1e-4b13-bfe0-2c1c49eadd77.png/:/cr=t:12.5%25,l:0%25,w:100%25,h:75%25/rs=w:600,h:300,cg:true",
  "Why Next Year's Plan Starts Today - Planning Is Key":
    "https://img1.wsimg.com/isteam/ip/8fbbcf74-b5f7-44ec-bb6f-221cc5fe2a6e/Brainz%202.webp/:/cr=t:12.47%25,l:0%25,w:100%25,h:75.05%25/rs=w:600,h:300,cg:true",
  "The Power Of A Financial Mindset":
    "https://static.wixstatic.com/media/194202_5a4ed4038e3d41d0990b4302e5e21bd0~mv2.jpg/v1/fill/w_734,h_490,al_c,lg_1,q_80/194202_5a4ed4038e3d41d0990b4302e5e21bd0~mv2.jpg"
};

const articleImages = window.ARTICLE_IMAGES;

function renderArticles(filter = "all") {
  const articles = window.ARTICLES.filter((article) => filter === "all" || article.type === filter);

  if (!articles.length) {
    articleGrid.innerHTML = `
      <article class="empty-state">
        <h3>Independent articles coming soon</h3>
        <p>New articles published directly by Sandro Endler will appear here.</p>
      </article>
    `;
    return;
  }

  articleGrid.innerHTML = articles
    .map(
      (article, index) => `
        <article class="article-card ${article.featured ? "featured" : ""}">
          ${
            articleImages[article.title]
              ? `<img class="article-image" src="${articleImages[article.title]}" alt="${article.title}" loading="lazy">`
              : `<div class="article-image article-placeholder" aria-hidden="true">
                  <svg><use href="#icon-chart"></use></svg>
                  <span>Finance Insight</span>
                </div>`
          }
          <div class="article-meta">
            <span>${article.source}</span>
            <span>${article.date}</span>
          </div>
          <h3>${article.title}</h3>
          <p>${article.summary}</p>
          <a href="${
            article.type === "brainz"
              ? `articles/brainz-article.html?article=${encodeURIComponent(article.title)}`
              : article.url
          }">
            Read article
          </a>
        </article>
      `
    )
    .join("");
}

if (articleGrid) {
  filters.forEach((button) => {
    button.addEventListener("click", () => {
      filters.forEach((item) => item.classList.remove("active"));
      button.classList.add("active");
      renderArticles(button.dataset.filter);
    });
  });

  renderArticles();
}

const yearElement = document.querySelector("#year");
if (yearElement) {
  yearElement.textContent = new Date().getFullYear();
}
