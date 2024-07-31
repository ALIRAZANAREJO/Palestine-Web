const headlines = [
    "The modern state of Israel was established on May 14, 1948. This event followed the United Nations General Assembly's adoption of the Resolution 181 (II) on November 29, 1947, which recommended the partition of British-ruled Mandatory Palestine into separate Jewish and Arab states, along with an internationalized Jerusalem. This resolution paved the way for the declaration of the State of Israel by Jewish leaders, led by David Ben-Gurion, in Tel Aviv. The declaration of the state led to the subsequent Arab-Israeli War, which resulted in territorial changes and established the borders of Israel as recognized by the international community.",
    ""
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




