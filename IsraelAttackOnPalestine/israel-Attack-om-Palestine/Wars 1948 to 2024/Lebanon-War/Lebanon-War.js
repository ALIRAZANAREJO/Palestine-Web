const headlines = [
    "The 1982 Lebanon War began on 6 June 1982, when the Israel Defense Forces (IDF) invaded southern Lebanon. The invasion followed a series of attacks and counter-attacks between the Palestine Liberation Organization (PLO) operating in southern Lebanon and the IDF that had caused civilian casualties on both sides of the border.[11][12][13] The military operation was launched after gunmen from the Abu Nidal Organization attempted to assassinate Shlomo Argov, Israel's ambassador to the United Kingdom. Israeli Prime Minister Menachem Begin blamed Abu Nidal's enemy, the PLO, for the incident,[14][15] and used the incident as a casus belli for the invasion.",
    "After attacking the PLO – as well as Syrian, leftist, and Muslim Lebanese forces – the Israeli military, in cooperation with their Maronite allies and the self-styled Free Lebanon State, occupied southern Lebanon, eventually surrounding the PLO and elements of the Syrian Army. Surrounded in West Beirut and subjected to heavy Israeli bombardment, the PLO forces and their allies negotiated passage from Lebanon with the aid of United States Special Envoy Philip Habib and the protection of international peacekeepers. The PLO, under the chairmanship of Yasser Arafat, had relocated its headquarters to Tripoli in June 1982. By expelling the PLO, removing Syrian influence over Lebanon, and installing a pro-Israeli Christian government led by President Bachir Gemayel, Israel hoped to sign a treaty which Begin promised would give Israel 'forty years of peace'.",
    "After the beginning of the Nakba with the 1948 Arab-Israeli war, Lebanon became home to more than 110,000 Palestinian refugees.[20] After its founding in 1964 and the radicalization among Palestinians which followed the Six-Day War, the Palestine Liberation Organisation (PLO) became a powerful force, then centred in Jordan. The large influx of Palestinians from Jordan after the Black September conflict caused an additional demographic imbalance within Lebanese society, and affected its democratic institutions established earlier by the National Pact. By 1975, the refugees numbered more than 300,000 and the PLO in effect created an unofficial state-within-a-state, particularly in Southern Lebanon, which then played an important role in the Lebanese Civil War. There had been continual violence near the Lebanon-Israel border between Israel and the PLO, starting from 1968; this increased following the relocation of PLO bases to Lebanon after the civil war in Jordan."
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
