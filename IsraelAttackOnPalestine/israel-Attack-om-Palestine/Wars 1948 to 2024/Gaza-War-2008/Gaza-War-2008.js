const headlines = [
    "The Gaza War, also known as Operation Cast Lead (Hebrew: מִבְצָע עוֹפֶרֶת יְצוּקָה),[29] also known as the Gaza Massacre (Arabic: مجزرة غزة),[30][31][32] and referred to as the Battle of al-Furqan (معركة الفرقان) by Hamas,[33][34] was a three-week armed conflict between Gaza Strip Palestinian paramilitary groups and the Israel Defense Forces (IDF) that began on 27 December 2008 and ended on 18 January 2009 with a unilateral ceasefire. The conflict resulted in 1,166–1,417 Palestinian and 13 Israeli deaths.[35] Over 46,000 homes were destroyed in Gaza, making more than 100,000 people homeless",
    "A six month long ceasefire between Israel and Hamas ended on 4 November, when the IDF made a raid into Deir al-Balah, central Gaza to destroy a tunnel, killing several Hamas militants. Israel said the raid was a preemptive strike and Hamas intended to abduct further Israeli soldiers,[37][38] while Hamas characterized it as a ceasefire violation,[37][39] and responded with rocket fire into Israel.[40][41] Attempts to renew a truce between Israel and Hamas were unsuccessful.On December 27, Israel began Operation Cast Lead with the stated aim of stopping rocket fire.[42][43] In the initial air assault, Israel attacked police stations, military targets including weapons caches and suspected rocket firing teams, as well as political and administrative institutions, striking in the densely populated cities of Gaza, Khan Yunis and Rafah.[44] After hostilities broke out, Palestinian groups fired rockets in retaliation for the aerial bombardments and attacks.[45] The international community considers indiscriminate attacks on civilians and civilian structures that do not discriminate between civilians and military targets as illegal under international law ."
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
