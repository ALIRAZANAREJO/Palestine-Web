const headlines = [
    "The Palestinian Fedayeen insurgency was an armed cross-border conflict, which peaked between 1949 and 1956, involving Israel and Palestinian militants, mainly based in the Gaza Strip, under the nominal control, of the All-Palestine Protectorate – a Palestinian client-state of Egypt declared in October 1948, which became the focal point of the Palestinian fedayeen activity.[1] The conflict was parallel to the Palestinian infiltration phenomenon. Hundreds were killed in the course of the conflict, which declined after the 1956 Suez War.",
    "Palestinian infiltration refers to numerous border-crossings by Palestinians, considered illegal by the Israeli authorities, during the first years of Israeli statehood. Most of the people in question were refugees attempting to return to their homes, take back possessions that had been left behind during the war and to gather crops from their former fields and orchards inside the new Israeli state Between 30,000 and 90,000 Palestinian refugees returned to Israel as a result. Meron Benvenisti states that the fact that the infiltrators were for the most part former inhabitants of the land returning for personal, economic and sentimental reasons was suppressed in Israel as it was feared that this may lead to an understanding of their motives and to the justification of their actions."
];
let currentIndex = 0;
let wordIndex = 0;
let isAdding = true;

// Initial interval speed for adding words
let addIntervalSpeed = 50;
// Initial interval speed for removing words
let removeIntervalSpeed = 50;

function updateHeadline() {
    const headlineContainer = document.getElementById("headlineContainer");
    const headline = headlines[currentIndex];

    if (isAdding) {
        const partialHeadline = headline.substr(0, wordIndex + 1);
        headlineContainer.textContent = partialHeadline;
        wordIndex++;
        if (wordIndex > headline.length) {
            isAdding = false;
            setTimeout(removeWords, 100); // Wait for 1 second before removing words
        }
    }
}

// Set interval to update headlines
setInterval(updateHeadline, addIntervalSpeed); // Write words every 50 milliseconds

// Function to remove the words word by word
function removeWords() {
    const headlineContainer = document.getElementById("headlineContainer");
    const headline = headlines[currentIndex];
    const wordCount = headline.split(" ").length; // Get the number of words in the headline

    // Update word index to remove words word by word
    let currentWordIndex = wordIndex;
    const removeInterval = setInterval(() => {
        if (currentWordIndex >= 0) {
            const partialHeadline = headline.split(" ").slice(0, currentWordIndex).join(" ");
            headlineContainer.textContent = partialHeadline;
            currentWordIndex--;
        } else {
            clearInterval(removeInterval); // Stop the interval when all words are removed
            currentIndex = (currentIndex + 1) % headlines.length;
            wordIndex = 0; // Reset word index for the next headline
            isAdding = true; // Start adding words for the next headline
        }
    }, removeIntervalSpeed);
}
