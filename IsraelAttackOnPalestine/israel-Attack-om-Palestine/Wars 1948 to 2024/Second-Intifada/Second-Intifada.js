const headlines = [
    "The Second Intifada (Arabic: الانتفاضة الثانية, romanized: Al-Intifāḍa aṯ-Ṯhāniya, lit. 'The Second Uprising'; Hebrew: האינתיפאדה השנייה Ha-Intifada ha-Shniya), also known as the Al-Aqsa Intifada,[11] was a major uprising by Palestinians against the Israeli occupation, characterized by a period of heightened violence in the Palestinian territories and Israel between 2000 and 2005.[11] The general triggers for the unrest are speculated to have been centered on the failure of the 2000 Camp David Summit, which was expected to reach a final agreement on the Israeli–Palestinian peace process in July 2000.[12] An uptick in violent incidents started in September 2000, after Israeli politician Ariel Sharon made a provocative visit to the Al-Aqsa compound, which is situated atop the Temple Mount in East Jerusalem;[13][12] the visit itself was peaceful, but, as anticipated, sparked protests and riots that Israeli police put down with rubber bullets, live ammunition, and tear gas.[14] Within the first few days of the uprising, the IDF had fired one million rounds of ammunition..",
    "High numbers of casualties were caused among civilians as well as combatants. Israeli security forces engaged in gunfights, targeted killings, tank attacks, and airstrikes; Palestinians engaged in gunfights, suicide bombings (the first of which occurred in March 2001[15]), stone-throwing, and rocket attacks.[16][17] The suicide bombings carried out by Palestinian assailants became one of the more prominent features of the Second Intifada and mainly targeted Israeli civilians, contrasting with the relatively less violent nature of the First Intifada, which took place between 1987 and 1993.[18][19][20][21][22] During the first few weeks of the uprising, the ratio of Palestinians to Israelis killed was around 20 to 1.[15] With a combined casualty figure for combatants and civilians, the violence is estimated to have resulted in the deaths of approximately 3,000 Palestinians and 1,000 Israelis, as well as 64 foreign nationals."
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
