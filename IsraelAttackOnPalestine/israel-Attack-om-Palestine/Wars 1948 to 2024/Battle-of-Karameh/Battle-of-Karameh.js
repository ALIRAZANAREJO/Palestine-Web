const headlines = [
    "The Battle of Karameh (Arabic: معركة الكرامة) was a 15-hour military engagement between the Israel Defense Forces (IDF) and combined forces of the Palestine Liberation Organization (PLO) and the Jordanian Armed Forces (JAF) in the Jordanian border town of Karameh on 21 March 1968, during the War of Attrition. It was planned by Israel as one of two concurrent raids on PLO camps, one in Karameh and one in the distant village of Safi.",
    "After Jordan lost control of the West Bank to Israel in 1967, Palestinian fighters known as fedayeen moved their bases to Jordan and stepped up their attacks on Israel and Israeli-occupied territories, taking the border town of Karameh as their headquarters. The IDF claimed that the purpose was to destroy the fedayeen camps at Karameh, and to capture the leader of the PLO Yasser Arafat as reprisal. Israel also wanted to punish Jordan for its perceived support to the fedayeen.[16] A large Israeli force launched an attack on the town on the dawn of 21 March, supported by fighter jets. Israel assumed the Jordanian Army would choose to not get involved in the battle, but the latter deployed heavy artillery fire, while the Palestinian irregulars engaged in guerrilla warfare. The Israelis withdrew, or were repulsed, after a day-long battle, having destroyed most of the Karameh camp and taken around 140 PLO members prisoner."
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
            setTimeout(removeWords, 1000); // Wait for 1 second before removing words
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
