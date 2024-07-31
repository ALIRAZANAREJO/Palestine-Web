
const headlines = [
    "The history of Israel covers an area of the Southern Levant also known as Canaan, Palestine or the Holy Land, which is the geographical location of the modern states of Israel and Palestine. From a prehistory as part of the critical Levantine corridor, which witnessed waves of early humans out of Africa, to the emergence of Natufian culture c. 10th millennium BCE, the region entered the Bronze Age c. 2,000 BCE with the development of Canaanite civilization, before being vassalized by Egypt in the Late Bronze Age",
    " In the Iron Age, the kingdoms of Israel and Judah were established, entities that were central to the origins of the Jewish and Samaritan peoples as well as the Abrahamic faith tradition.This has given rise to Judaism, Samaritanism, Christianity, Islam, Druzism, Baha'ism, and a variety of other religious movements. Throughout the course of human history, the Land of Israel has come under the sway or control of various polities and, as a result, it has historically hosted a wide variety of ethnic groups."
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




