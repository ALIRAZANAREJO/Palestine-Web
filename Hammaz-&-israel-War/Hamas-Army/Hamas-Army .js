const headlines = [
    "HAMAS–the acronym for Harakat al-Muqawama al-Islamiya (Islamic Resistance Movement)—is the largest and most capable militant group in the Palestinian territories and one of the territories’ two major political parties...",
    "HAMAS Emerged in 1987 during the first Palestinian uprising, or intifada, as an outgrowth of the Muslim Brotherhood’s Palestinian branch. The group is committed to armed resistance against Israel and the creation of an Islamic Palestinian state in Israel’s place. HAMAS has been the de facto governing body in the Gaza Strip since 2007, when it ousted the Palestinian Authority from Power."
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




