const quotes = [];
const randomQuote = document.querySelector("#quote");

function fetchQuotes() {
    fetch('https://api.quotable.io/quotes')
        .then(response => response.json())
        .then(data => {
            const quotesData = data.results;
            quotes.push(...quotesData);
            getRandomQuote();
        });
}

function getRandomQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    const filtered = quotes.filter(quote => quote.author != "Charles Dickens")
    const randomQuote = filtered[randomIndex];
    document.getElementById('quote').innerText = randomQuote.content;
    document.getElementById('author').innerText = `${randomQuote.author} said`;
}
document.querySelector("#getRandomQuote").addEventListener("click", () => {
    fetchQuotes()
});
fetchQuotes();