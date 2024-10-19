const quotes = [
  {
    text: "The best way to predict the future is to create it.",
    category: "Inspiration",
  },
  {
    text: "Do one thing every day that scares you.",
    category: "Motivation",
  },
  {
    text: "Success is not final, failure is not fatal: It is the courage to continue that counts.",
    category: "Success",
  },
];

function showRandomQuote() {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  const quote = quotes[randomIndex];
  document.getElementById(
    "quoteDisplay"
  ).innerHTML = `<p>"${quote.text}" - ${quote.category}</p>`;
}

document.getElementById("newQuote").addEventListener("click", showRandomQuote);

function addQuote() {
  const newQuoteText = document.getElementById("newQuoteText").value;
  const newQuoteCategory = document.getElementById("newQuoteCategory").value;

  if (newQuoteText && newQuoteCategory) {
    quotes.push({ text: newQuoteText, category: newQuoteCategory });

    document.getElementById("newQuoteText").value = "";
    document.getElementById("newQuoteCategory").value = "";

    showRandomQuote();
  } else {
    alert("Please enter both a quote and a category.");
  }
}

document.getElementById("addQuoteBtn").addEventListener("click", addQuote);
