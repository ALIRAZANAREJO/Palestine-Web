const headlines = [
    "The 1948 Arab–Israeli War, also known as the First Arab–Israeli War, followed the civil war in Mandatory Palestine as the second and final stage of the 1948 Palestine war. It formally began following the end of the British Mandate for Palestine at midnight on 14 May 1948; the Israeli Declaration of Independence had been issued earlier that day, and a military coalition of Arab states entered the territory of Mandatory Palestine in the morning of 15 May.",
    "The day after the 29 November 1947 adoption of the United Nations Partition Plan for Palestine – which planned to divide the territory into an Arab state, a Jewish state, and the Special International Regime encompassing the cities of Jerusalem and Bethlehem – a civil war began. There had been tension and conflict between Arabs, Jews, and the British since the 1917 Balfour Declaration and the 1920 creation of the British Mandate of Palestine. British policies dissatisfied both Arabs and Jews. Arab opposition developed into the 1936–1939 Arab revolt in Palestine, while the Jewish opposition developed into the 1944–1947 Jewish insurgency in Palestine. On 15 May 1948, the civil war transformed into a conflict between Israel and the Arab states following the Israeli Declaration of Independence the previous day. Egypt, Transjordan, Syria, and expeditionary forces from Iraq entered Palestine.[16][17][18][19] The invading forces took control of the Arab areas and immediately attacked Israeli forces and several Jewish settlements.[20][21][22] The 10 months of fighting took place mostly on the territory of the British Mandate and in the Sinai Peninsula and southern Lebanon, interrupted by several truce periods."
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
