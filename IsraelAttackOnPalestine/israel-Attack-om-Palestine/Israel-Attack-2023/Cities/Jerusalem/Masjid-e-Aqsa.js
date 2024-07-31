const headlines = [
    "Masjid-e-Aqsa is the first place where Muslims are prayed of Allah",
    "Bait ul Muqaddas is in Palestine. Palestine is one of the oldest places on Earth that human beings have inhabited. Jerusalem, the Palestinian land between Jordan and the Mediterranean Sea, is the holy land where Bait ul Muqaddas is."
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




