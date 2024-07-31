const headlines = [
    "The Lebanese Civil War (Arabic: الحرب الأهلية اللبنانية Al-Ḥarb al-Ahliyyah al-Libnāniyyah) was a multifaceted armed conflict that took place from 1975 to 1990. It resulted in an estimated 150,000 fatalities[5] and also led to the exodus of almost one million people from Lebanon",
    "The diversity of the Lebanese population played a notable role in the lead-up to and during the conflict: Christians and Sunni Muslims comprised the majority in the coastal cities; Shia Muslims were primarily based throughout all of southern Lebanon and the Beqaa Valley in the east; and Druze and Christians populated the country's mountainous areas. At the time, the Lebanese government was running under the significant influence of elites within the Maronite Christian community.[7][8] The link between politics and religion had been reinforced under the French Mandate from 1920 to 1943, and the country's parliamentary structure favoured a leading position for Lebanese Christians, who constituted the majority of Lebanon's population. However, the country's Muslim minority was still relatively large, and the influx of thousands of Palestinians—first in 1948 and again in 1967—contributed to Lebanon's demographic shift towards an eventual Muslim majority. Lebanon's Christian-dominated government had been facing increasing levels of opposition from Muslims, pan-Arabists, and a number of left-wing groups. To this end, the Cold War exerted a disintegrative effect on the country, closely linked to the political polarization that preceded the 1958 Lebanese crisis. Christians mostly sided with the Western world while Muslims, pan-Arabists, and leftists mostly sided with Soviet-aligned Arab countries",
    "Fighting between Lebanese Christian militias and Palestinian insurgents (mainly from the Palestine Liberation Organization) began in 1975 and triggered the establishment of an alliance between the Palestinians and Lebanese Muslims, pan-Arabists, and leftists.[10] However, over the course of the conflict, these alliances shifted rapidly and unpredictably. Furthermore, the internal strife deepened as foreign powers, namely Syria, Israel, and Iran, became involved and supported or fought alongside different factions. Various peacekeeping forces, such as the Multinational Force in Lebanon and the United Nations Interim Force in Lebanon, were also stationed in the country during this time.",
    "In 1989, the Taif Agreement marked the beginning of the end for the fighting as a committee appointed by the Arab League began to formulate solutions to the conflict. In March 1991, the Parliament of Lebanon passed an amnesty law that pardoned all political crimes that had been perpetrated prior to the law's time of enactment.[11] In May 1991, all of the armed factions that had been operating in Lebanon were dissolved, excluding Hezbollah, an Iran-backed Shia Islamist militia. Though the Lebanese Armed Forces slowly began to rebuild as Lebanon's only major non-sectarian armed institution after the conflict,[12] the federal government remained unable to challenge Hezbollah's armed strength. Religious tensions, especially between Shias and Sunnis, persisted across Lebanon since the formal end of the hostilities in 1990."
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
