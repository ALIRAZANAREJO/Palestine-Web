const headlines = [
    "Operation Returning Echo[3] (מבצע הד חוזר) was an Israel Defense Forces (IDF) military operation in the Gaza Strip from March 9 until March 14, 2012. It was the worst outbreak of violence covered by the media in the region since the 2008–2009 Gaza War (Operation Cast Lead).On March 9, Israel carried out a targeted air strike in the Gaza Strip killing Zohair al-Qaisi, the secretary general of the Popular Resistance Committees (PRC). Another militant was also killed in the strike, as well as seriously injuring a man nearby.[5] According to the IDF, though the PRC denies this, Al-Qaisi had overseen the 2011 southern Israel cross-border attacks, which killed eight Israelis including six civilians.[6] Israeli officials said that he was preparing the final stages of a new mega-attack that could have claimed multiple lives.[7] Palestinian militant groups retaliated[8][9] by launching rocket attacks on Israel, with over 300 Grad missiles, Qassam rockets and mortar shells launched, of which 177 hit Israeli territory[10] striking the major urban centers of Ashdod, Ashkelon and Beersheba, as well as smaller communities.[citation needed] Twenty-three Israelis were injured, all of them civilians, and schools throughout southern Israel were kept closed for most of the week to protect students from rocket fire. Israel's Iron Dome missile defense system intercepted many of the Palestinian-launched projectiles aimed at large cities, shooting down 56 rockets in 71 attempts",
    "Israel attacked with 37 air strikes on Gazan weapons storage facilities, rocket launching sites, weapon manufacturing facilities, training bases, posts, tunnels and militants, killing 22, mostly from Palestinian Islamic Jihad and the others from the Popular Resistance Committees. Four civilians were killed as well.[17][18][19] Another 74 Palestinians were reportedly injured during the conflict, mostly civilians.[2] Some deaths and injuries among Palestinian civilians during the escalation, which were reported as casualties of the clashes, were later shown to be unrelated to Israeli actions.The United States, France, and an official from the United Nations condemned the Palestinian attacks, and the US stressed that Israel has the right to defend itself.[22][23] The Organization of the Islamic Conference, the Arab League, Syria, Egypt and Iran condemned Israel's responsive air strikes on militants.[24][25][26][27][28] On March 13, Egypt brokered a ceasefire between Israel and Palestinian militant groups. Hamas did not participate in the fighting directly, and insisted that all-out war would be devastating to the Palestinian people."
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
