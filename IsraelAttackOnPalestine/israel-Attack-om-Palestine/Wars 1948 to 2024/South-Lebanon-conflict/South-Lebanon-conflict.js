const headlines = [
    "The 1978 South Lebanon conflict (codenamed Operation Litani by Israel) began after Israel invaded southern Lebanon up to the Litani River in March 1978, in response to the Coastal Road massacre near Tel Aviv by Lebanon-based Palestinian militants. The conflict resulted in the deaths of 1,100–2,000 Lebanese and Palestinians, 20 Israelis, and the internal displacement of 100,000 to 250,000 people in Lebanon. The Israel Defense Forces gained a military victory against the Palestine Liberation Organization as the latter was forced to withdraw from southern Lebanon, preventing it from launching attacks on Israel from across its land border with Lebanon. In response to the outbreak of hostilities, the United Nations Security Council adopted Resolution 425 and Resolution 426 on 19 March 1978, which called on Israel to immediately withdraw its troops from Lebanon and established the United Nations Interim Force in Lebanon (UNIFIL).",
    "Though it took the form of an invasion by the Israeli military of southern Lebanon, Operation Litani arose from the long-running Israeli–Palestinian conflict. After 1968, militant groups that formed the Palestine Liberation Organization (PLO) and other Palestinian groups established a quasi-state in southern Lebanon, using it as a base for attacks against civilian targets in northern Israel as well as terror attacks on diaspora Israelis and other targets worldwide. This violence was exacerbated by an influx of some 3,000 PLO militants who had fled Jordan following the defeat of Palestinian groups to Jordanian forces during the Black September conflict; the Palestinian political cause began to regroup in southern Lebanon and re-shifted the focus of its attacks to Israeli targets, and did so via the Israel–Lebanon border. Israel responded to Palestinian attacks from Lebanon with extensive air raids against PLO bases of operations.",
    "As a consequence of Israeli aerial attacks from 1968 to 1977, some of the Palestinian towns and camps in southern Lebanon were totally leveled. It is estimated that by October 1977, about 300,000 refugees—mainly Lebanese Shia Muslims—had fled southern Lebanon.[6] The escalating Israel–PLO conflict increased political tensions in Lebanon between the largely pro-Palestinian Muslim population on one hand and the pro-Israel Maronite Christian and Druze populations on the other, further adding to the factors that fuelled the 1975–1990 Lebanese Civil War.",
    "In November 1977, an exchange of gunfire led to the deaths of several people on both sides of the Israel–Lebanon border and led to Israel's bombing of targets in southern Lebanon that killed 70 people, mainly Lebanese.",
    "The proximate cause of the Israeli invasion was the Coastal Road massacre that took place near Tel Aviv on 11 March 1978.[9] On that day, 11 Palestinian Fatah members led by the 18-year-old female fighter Dalal Mughrabi travelled from Lebanon to Israel, where they killed an American tourist at a beach before hijacking a bus on the Coastal Road near Haifa; the group later also hijacked a second bus that was bound for Tel Aviv. After a lengthy chase and shootout, 38 Israeli civilians, including 13 children, were killed and 76 were wounded."
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
