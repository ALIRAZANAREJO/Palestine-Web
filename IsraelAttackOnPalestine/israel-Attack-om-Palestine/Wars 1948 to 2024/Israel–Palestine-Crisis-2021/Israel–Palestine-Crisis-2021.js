const headlines = [
    "A major outbreak of violence in the ongoing Israeli–Palestinian conflict commenced on 10 May 2021, though disturbances took place earlier, and continued until a ceasefire came into effect on 21 May. It was marked by protests and police riot control, rocket attacks on Israel by Hamas and Palestinian Islamic Jihad (PIJ), and Israeli airstrikes in the Gaza Strip. The crisis was triggered[34] on 6 May, when Palestinians in East Jerusalem began protesting over an anticipated decision of the Supreme Court of Israel on the eviction of six Palestinian families in the East Jerusalem neighborhood of Sheikh Jarrah.[35] Under international law, the area, effectively annexed by Israel in 1980, is a part of the Israeli-occupied West Bank;[36][37] On 7 May, according to Israel's Channel 12, Palestinians threw stones at Israeli police forces,[38] who then stormed the Al-Aqsa Mosque compound[39] using tear gas, rubber bullets, and stun grenades.[40][39][41] The crisis prompted protests around the world as well as official reactions from world leaders.",
    
    "As a result of the violence, at least 256 Palestinians, including 66 children, were killed (including at least seven from friendly fire).[21][59] In Israel, at least 13 people were killed,[10] including two children.[13] The Gaza Ministry of Health reported that more than 1,900 Palestinians were injured,[20] and as of 12 May, at least 200 Israelis were reported to have been injured.[needs update][60] As of 19 May, at least 72,000 Palestinians have been displaced.[33] Around 4,360 Palestinian rockets were fired towards Israel, of which 680 landed within the Gaza Strip,[61][2] and over 90 percent of rockets bound towards populated areas were intercepted by Israel's Iron Dome.[62][63] Israel conducted around 1,500 aerial, land, and sea strikes on the Gaza Strip.[64] Calls for a ceasefire were first proposed on 13 May by Hamas, but rejected by Israeli prime minister Benjamin Netanyahu.[65] On 18 May, France, along with Egypt and Jordan, announced the filing of a United Nations Security Council resolution for a ceasefire.[66] Egypt mediated a ceasefire between Israel and Hamas, which came into effect on 21 May 2021, ending 11 days of fighting in which both sides claimed victory.[2] On 16 June 2021, incendiary balloons were launched from Gaza into Israel, which the Israeli Air Force responded to with multiple airstrikes in the Gaza Strip, resuming the fighting."
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
