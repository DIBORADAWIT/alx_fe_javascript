let quotes = [
  {
    text: "The best way to predict the future is to invent it.",
    category: "Motivation",
  },
  { text: "Good artists copy, great artists steal.", category: "Creativity" },
  { text: "Simplicity is the ultimate sophistication.", category: "Design" },
];

function showRandomQuote() {
  const quoteDisplay = document.getElementById("quoteDisplay");

  quoteDisplay.innerHTML = "";

  const randomIndex = Math.floor(Math.random() * quotes.length);
  const randomQuote = quotes[randomIndex];

  const quoteText = document.createElement("p");
  quoteText.textContent = `"${randomQuote.text}"`;

  const quoteCategory = document.createElement("span");
  quoteCategory.textContent = ` - ${randomQuote.category}`;
  quoteCategory.style.fontWeight = "bold";

  quoteDisplay.appendChild(quoteText);
  quoteDisplay.appendChild(quoteCategory);
}

function addQuote() {
  const newQuoteText = document.getElementById("newQuoteText").value;
  const newQuoteCategory = document.getElementById("newQuoteCategory").value;

  if (newQuoteText && newQuoteCategory) {
    quotes.push({ text: newQuoteText, category: newQuoteCategory });

    document.getElementById("newQuoteText").value = "";

    document.getElementById("newQuoteCategory").value = "";

    alert("New quote added successfully!");

    showRandomQuote();
  } else {
    alert("Please enter both a quote and a category.");
  }
}

document.addEventListener("DOMContentLoaded", function () {
  showRandomQuote();

  document
    .getElementById("newQuote")
    .addEventListener("click", showRandomQuote);
});

// let quotes = JSON.parse(localStorage.getItem("quotes")) || [];

function saveQuotes() {
  localStorage.setItem("quotes", JSON.stringify(quotes));
}

function addQuote(newQuote) {
  quotes.push(newQuote);
  saveQuotes();
  displayQuotes();
}

function initializeQuotes() {
  displayQuotes();
}

initializeQuotes();
