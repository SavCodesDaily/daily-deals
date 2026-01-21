// 1) EDIT ONLY THIS LIST DAILY:
const deals = [
  {
    date: "2026-01-20",
    title: "Air Fryer",
    price: 29,
    was: 89,
    code: "DEAL29",
    link: "https://example.com/airfryer",
    image: "https://via.placeholder.com/200?text=Air+Fryer"
  },
  {
    date: "2026-01-20",
    title: "Headphones",
    price: 19,
    was: 49,
    code: "SAVE19",
    link: "https://example.com/headphones",
    image: "https://via.placeholder.com/200?text=Headphones"
  },
  {
    date: "2026-01-19",
    title: "Hoodie",
    price: 22,
    was: 60,
    code: "HOOD22",
    link: "https://example.com/hoodie",
    image: "https://via.placeholder.com/200?text=Hoodie"
  }
];

// 2) HELPERS
function formatDay(dateStr) {
  // dateStr is YYYY-MM-DD
  const d = new Date(dateStr + "T00:00:00");
  return d.toLocaleDateString(undefined, { weekday: "long", year: "numeric", month: "long", day: "numeric" });
}

async function copyToClipboard(text, buttonEl) {
  try {
    await navigator.clipboard.writeText(text);
    const old = buttonEl.textContent;
    buttonEl.textContent = "Copied!";
    setTimeout(() => (buttonEl.textContent = old), 1200);
  } catch {
    alert("Couldn’t copy automatically. Code: " + text);
  }
}

// 3) GROUP DEALS BY DATE (newest first)
const grouped = deals.reduce((acc, deal) => {
  (acc[deal.date] ||= []).push(deal);
  return acc;
}, {});

const datesNewestFirst = Object.keys(grouped).sort((a, b) => b.localeCompare(a));

// 4) RENDER
const app = document.getElementById("app");

for (const date of datesNewestFirst) {
  const sectionTitle = document.createElement("h2");
  sectionTitle.className = "day";
  sectionTitle.textContent = formatDay(date);
  app.appendChild(sectionTitle);

  const grid = document.createElement("div");
  grid.className = "grid";
  app.appendChild(grid);

  for (const deal of grouped[date]) {
    const card = document.createElement("div");
    card.className = "card";

    const img = document.createElement("img");
    img.className = "thumb";
    img.src = deal.image;
    img.alt = deal.title;

    const meta = document.createElement("div");
    meta.className = "meta";

    const title = document.createElement("p");
    title.className = "title";
    title.textContent = deal.title;

    const price = document.createElement("p");
    price.className = "price";
    price.innerHTML = `$${deal.price}` + (deal.was ? ` <s>$${deal.was}</s>` : "");

    const actions = document.createElement("div");
    actions.className = "actions";

    const copyBtn = document.createElement("button");
    copyBtn.textContent = `📋 Copy code (${deal.code})`;
    copyBtn.addEventListener("click", () => copyToClipboard(deal.code, copyBtn));

    const link = document.createElement("a");
    link.className = "btn";
    link.href = deal.link;
    link.target = "_blank";
    link.rel = "noopener noreferrer";
    link.textContent = "Open deal ↗";

    actions.appendChild(copyBtn);
    actions.appendChild(link);

    meta.appendChild(title);
    meta.appendChild(price);
    meta.appendChild(actions);

    card.appendChild(img);
    card.appendChild(meta);

    grid.appendChild(card);
  }
}
