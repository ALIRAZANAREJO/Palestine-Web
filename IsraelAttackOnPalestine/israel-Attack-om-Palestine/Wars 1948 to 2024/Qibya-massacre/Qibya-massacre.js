const headlines = [
    "The Qibya massacre occurred during Operation Shoshana, a reprisal operation that occurred in October 1953 when Israeli troops under Ariel Sharon attacked the village of Qibya in the West Bank, which was then under Jordan's control, and killed Palestinian civilians.Israeli forces massacred more than sixty-nine Palestinian villagers,[1] two thirds of which were women and children.[2] Forty-five houses, a school, and a mosque were destroyed.[3] The attack followed cross-border raids from the West Bank, and Israel framed the Qibya massacre as a response to the Yehud attack in which an Israeli woman and her two children were killed.The act was condemned by the U.S. State Department, the UN Security Council, and by Jewish communities worldwide.[5] The State Department described the raid as 'shocking' and used the occasion to confirm publicly that economic aid to Israel had been suspended previously, for other non-compliance regarding the 1949 Armistice Agreements.",
    "The attack took place in the context of border clashes between Israel and neighbouring states, which had begun almost immediately after the signing of the 1949 Armistice Agreements following onset of the Nakba. Along the 1949 armistice line, infiltrations, armed or otherwise, were frequent from both sides. Many infiltrations from Jordanian territory in the West Bank consisted of unarmed Palestinian refugees attempting to rejoin their families. During 1948–49, most of the infiltrators crossed the borders to harvest crops left behind, to plant new crops in their abandoned lands, or to retrieve goods. Many others came to resettle in their old villages or elsewhere inside Israel, or to visit relatives, or simply to get a glimpse of their abandoned homes and fields. During the following years the vast majority came to steal crops, irrigation pipes, farm animals, or other property belonging to settlers, or to graze their flocks. Some engaged in smuggling goods or mail—certain items, such as Bedouin clothing, were often unavailable in Israel, and there were no postal services between Israel and the Arab states. Others moved through Israeli territory in order to reach other Arab countries, most frequently from the Gaza Strip to the West Bank. Most of the infiltrators were unarmed individuals, though it appears that the proportion who came armed and in groups steadily increased after 1950."
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
