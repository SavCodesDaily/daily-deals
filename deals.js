// 1) EDIT ONLY THIS LIST DAILY:
const deals = [
  {
    date: "2026-01-23",
    title: "Adhesive Shower Caddy 5 Pcs",
    price: 10,
    was: 30,
    code: "H5A72SQK",
    link: "https://amzn.to/3NZVPWv",
    image: "https://m.media-amazon.com/images/I/81S6FPdEHWL._AC_SL1500_.jpg"
  },
  {
    date: "2026-01-23",
    title: "Bluetooth Car Adapter",
    price: 10,
    was: 23,
    code: "YY4RUUXX",
    link: "https://amzn.to/3NHjTNO",
    image: "https://m.media-amazon.com/images/I/71O9OskkgyL._AC_SL1500_.jpg"
  },
  {
    date: "2026-01-23",
    title: "Stone Drying Mat",
    price: 14,
    was: 40,
    code: "4K8W326E",
    link: "https://amzn.to/4jSH9oh",
    image: "https://m.media-amazon.com/images/I/51lnZuRIBnL._AC_SL1500_.jpg"
  },
  {
    date: "2026-01-23",
    title: "Lunch Box 16L",
    price: 14.39,
    was: 24,
    code: "3RRA74TA",
    link: "https://amzn.to/49yKntu",
    image: "https://m.media-amazon.com/images/I/819O-XFptgL._AC_SL1500_.jpg"
  },
  {
    date: "2026-01-23",
    title: "Womens Leggings 3-pack ",
    price: 13,
    was: 26,
    code: "ZGIKWIKI",
    link: "https://amzn.to/4a5J6KB",
    image: "https://m.media-amazon.com/images/I/61K4IbVYguL._AC_UL1500_.jpg"
  },
  {
    date: "2026-01-22",
    title: "Food Prep Storage Containers",
    price: 12,
    was: 24,
    code: "No Promo Code Needed",
    link: "https://amzn.to/4sOPcq1",
    image: "https://m.media-amazon.com/images/I/81xXn1GCD0L._AC_UF1000,1000_QL80_.jpg"
  },
  {
    date: "2026-01-22",
    title: "Power Inverter",
    price: 16.50,
    was: 40,
    code: "K7B7YJZP",
    link: "https://amzn.to/4a7dQL7",
    image: "https://m.media-amazon.com/images/I/71HgDhWt0vL._AC_SL1500_.jpg"
  },
  {
    date: "2026-01-22",
    title: "Shoe Organizer",
    price: 22,
    was: 44,
    code: "5PFDW9JG",
    link: "https://amzn.to/4rd9jNg",
    image: "https://m.media-amazon.com/images/I/71OybEburlL._AC_UF1000,1000_QL80_.jpg"
  },
  {
    date: "2026-01-22",
    title: "Salt and Pepper Grinder",
    price: 18,
    was: 26,
    code: "T8TNJTZ7",
    link: "https://amzn.to/4r2R1xP",
    image: "https://m.media-amazon.com/images/I/714WzQTJXML._AC_UF1000,1000_QL80_.jpg"
  },
  {
    date: "2026-01-21",
    title: "Ceramie Vases",
    price: 15,
    was: 30,
    code: "BL7OCZ9Z",
    link: "https://amzn.to/49wUq29",
    image: "https://m.media-amazon.com/images/I/91kt+YCNbvL._AC_SL1500_.jpg"
  },
  {
    date: "2026-01-21",
    title: "3 Pack Long sleeve shirts",
    price: 15,
    was: 40,
    code: "K5LJGK53",
    link: "https://amzn.to/4pT40RH",
    image: "https://m.media-amazon.com/images/I/71f6ldNbL-L._AC_UL1500_.jpg"
  },
  {
    date: "2026-01-21",
    title: "5-in-1 Immersion Blender",
    price: 23,
    was: 46,
    code: "7IW4OZME",
    link: "https://amzn.to/4r1qctX",
    image: "https://m.media-amazon.com/images/I/71RYRLNaruL._AC_SL1500_.jpg"
  },
  {
    date: "2026-01-21",
    title: "Rattan Night Stand",
    price: 45,
    was: 130,
    code: "3GVFRTOK",
    link: "https://amzn.to/49Lnl1n",
    image: "https://m.media-amazon.com/images/I/81AGz92+kZL._AC_UF1000,1000_QL80_.jpg"
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
