  const headlines = [
   "The Arab-Israeli War of 1948 broke out when five Arab nations invaded territory in the former...",
   "Palestinian mandate immediately following the announcement of the independence of the state of Israel on May 14, 1948."
];

let currentIndex = 0;
let wordIndex = 0;
let isAdding = true;

function updateHeadline() {
    const headlineContainer = document.getElementById("headlineContainer");
    const headline = headlines[currentIndex];

    if (isAdding) {
        const partialHeadline = headline.substr(0, wordIndex + 1);
        headlineContainer.textContent = partialHeadline;
        wordIndex++;
        if (wordIndex > headline.length) {
            isAdding = false;
        }
    } else {
        const partialHeadline = headline.substr(0, wordIndex);
        headlineContainer.textContent = partialHeadline;
        wordIndex--;
        if (wordIndex < 0) {
            isAdding = true;
            currentIndex = (currentIndex + 1) % headlines.length;
        }
    }
}

// Set interval to update headlines
setInterval(updateHeadline, 80); // Change every 0.3 seconds




