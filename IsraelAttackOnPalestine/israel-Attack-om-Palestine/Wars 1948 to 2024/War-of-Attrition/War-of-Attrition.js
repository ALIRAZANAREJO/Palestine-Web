const headlines = [
    "The War of Attrition (Arabic: حرب الاستنزاف, romanized: Ḥarb al-Istinzāf; Hebrew: מלחמת ההתשה, romanized: Milḥemet haHatashah) involved fighting between Israel and Egypt, Jordan, the Palestine Liberation Organisation (PLO) and their allies from 1967 to 1970",
    "Following the 1967 Six-Day War, no serious diplomatic efforts were made to resolve the issues at the heart of the Arab–Israeli conflict. The 1967 Arab League summit formulated in September the 'three no's' policy, barring peace, recognition, or negotiations with Israel.[19] Egyptian President Gamal Abdel Nasser believed that only military initiative would compel Israel or the international community to facilitate a full Israeli withdrawal from Sinai,[20][21] and hostilities soon resumed along the Suez Canal.",
    "These initially took the form of limited artillery duels and small-scale incursions into Sinai, but by 1969, the Egyptian Army judged itself prepared for larger-scale operations. On March 8, 1969, Nasser proclaimed the official launch of the War of Attrition, characterized by large-scale shelling along the Suez Canal, extensive aerial warfare and commando raids.[20][22] Hostilities continued until August 1970 and ended with a ceasefire.[23] The frontiers remaining the same as when the war began, with no real commitment to serious peace negotiations",
    "Egyptian front..",
    "Israel's victory in the Six-Day War left the entirety of the Egyptian Sinai Peninsula up to the eastern bank of the Suez Canal under Israeli control. Egypt was determined to regain Sinai, and also sought to mitigate the severity of its defeat. Sporadic clashes were taking place along the cease-fire line, and Egyptian missile boats sank the Israeli destroyer INS Eilat on October 21 of the same year.",
    "Egypt began shelling Israeli positions along the Bar Lev Line, using heavy artillery, MiG aircraft and various other forms of Soviet assistance with the hope of forcing the Israeli government into concessions.[24] Israel responded with aerial bombardments, airborne raids on Egyptian military positions, and aerial strikes against strategic facilities in Egypt. The strategic bombing of Egypt had mixed military and political results",
    "In August 1970, Israel, Jordan, and Egypt agreed to an 'in place' ceasefire under the terms proposed by the Rogers Plan. The plan contained restrictions on missile deployment by both sides, and required the cessation of raids as a precondition for peace. The Egyptians and their Soviet allies rekindled the conflict by violating the agreement shortly thereafter, moving their missiles near to the Suez Canal, and constructing the largest anti-aircraft system yet implemented at that point in history.[24][26] The Israelis responded with a policy which their Prime Minister, Golda Meir, dubbed 'asymmetrical response', wherein Israeli retaliation was disproportionately large in comparison to any Egyptian attack."
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
