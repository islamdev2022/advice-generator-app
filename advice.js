const quoteID = document.getElementById('id')
const quote = document.getElementById('quote')
const btn = document.getElementById('dc')

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Example usage: Generate a random integer between 1 and 10
btn.addEventListener("click", () => {
    const random = getRandomInt(1, 100);
    const url = `https://api.adviceslip.com/advice/${random}`;

    fetch(url)
        .then(Response => Response.json())
        .then(data => {
            const thequote = data.slip.advice;
            quote.innerHTML = thequote;
            quoteID.innerHTML = random;
        })
})