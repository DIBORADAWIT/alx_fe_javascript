let quotes = JSON.parse(localStorage.getItem("quotes")) || [];

function saveQuotes() {
  localStorage.setItem("quotes", JSON.stringify(quotes));
}

function displayQuotes() {
  const quoteList = document.getElementById("quoteList");
  quoteList.innerHTML = "";

  quotes.forEach((quote, index) => {
    const listItem = document.createElement("li");
    listItem.textContent = `${quote.text} (Category: ${quote.category})`;
    quoteList.appendChild(listItem);
  });
}

function showRandomQuote() {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  const randomQuote = quotes[randomIndex];
  alert(
    `Random Quote: "${randomQuote.text}" - Category: ${randomQuote.category}`
  );
}

function addQuote() {
  const quoteText = document.getElementById("newQuoteText").value.trim();
  const quoteCategory = document
    .getElementById("newQuoteCategory")
    .value.trim();

  if (quoteText && quoteCategory) {
    const newQuote = { text: quoteText, category: quoteCategory };
    quotes.push(newQuote);
    saveQuotes();
    displayQuotes();
    clearForm();
  } else {
    alert("Please enter both quote text and category.");
  }
}

function clearForm() {
  document.getElementById("newQuoteText").value = "";
  document.getElementById("newQuoteCategory").value = "";
}

function exportQuotes() {
  const quotesJson = JSON.stringify(quotes);
  const blob = new Blob([quotesJson], { type: "application/json" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = "quotes.json";
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
}

function importFromJsonFile(event) {
  const fileReader = new FileReader();
  fileReader.onload = function (event) {
    const importedQuotes = JSON.parse(event.target.result);
    quotes.push(...importedQuotes);
    saveQuotes();
    displayQuotes();
    alert("Quotes imported successfully!");
  };
  fileReader.readAsText(event.target.files[0]);
}

function initializeQuotes() {
  displayQuotes();
}

initializeQuotes();
