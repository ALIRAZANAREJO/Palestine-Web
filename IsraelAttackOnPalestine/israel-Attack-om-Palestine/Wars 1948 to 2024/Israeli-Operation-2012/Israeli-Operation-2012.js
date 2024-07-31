const headlines = [
    "In November 2012, the Israel Defense Forces (IDF) launched Operation Pillar of Defense (Hebrew: עַמּוּד עָנָן, ʿAmúd ʿAnán, literally:Pillar of Cloud),[23] which was an eight-day campaign in the Hamas-governed Gaza Strip, beginning on 14 November 2012 with the killing of Ahmed Jabari, chief of the Gaza military wing of Hamas, by an Israeli airstrike",
    "The operation was preceded by a period with a number of mutual Israeli–Palestinian responsive attacks.[28] According to the Israeli government, the operation began in response to the launch of over 100 rockets at Israel during a 24-hour period,[29][30] an attack by Gaza militants on an Israeli military patrol jeep within Israeli borders,[citation needed] and an explosion caused by improvised explosive devices (IEDs), which occurred near Israeli soldiers, on the Israeli side of a tunnel passing under the Israeli West Bank barrier.[31][32] The Israeli government stated that the aims of the military operation were to halt rocket attacks against civilian targets originating from the Gaza Strip[33][34] and to disrupt the capabilities of militant organizations.[35] The Palestinians blamed the Israeli government for the upsurge in violence, accusing the IDF of attacks on Gazan civilians in the days leading up to the operation.[36] They cited the blockade of the Gaza Strip and the occupation of West Bank, including East Jerusalem, as the reason for rocket attacks.",
    "During the operation, Hamas, the al-Qassam Brigades and the Palestinian Islamic Jihad (PIJ) further intensified their rocket attacks on Israeli cities and towns, in an operation code named Operation Stones of Baked Clay (Arabic: حجارة سجيل, ḥijārat sijīl) by the al-Qassam Brigades,[48] firing over 1,456 rockets into Israel, and an additional 142 which fell inside Gaza itself.[49] Palestinian militant groups used weapons including Iranian-made Fajr-5, Russian-made Grad rockets, Qassams, and mortars.[citation needed] Some of these weapons were fired into Rishon LeZion, Beersheba, Ashdod, Ashkelon, and other population centers. Tel Aviv was hit for the first time since the 1991 Gulf War, and rockets were fired at Jerusalem.[50] The rockets killed three Israeli civilians in a direct hit on a home in Kiryat Malachi.[25][46][51] By the end of the operation, six Israelis had been killed, two hundred forty were injured, and more than two hundred had been treated for anxiety by Magen David Adom, an Israeli medical organization.[56] About 421 rockets were intercepted by Israel's Iron Dome missile defense system, another 142 fell on Gaza itself, 875 fell in open areas, and 58 hit urban areas in Israel.[49][57] A bus in Tel Aviv was bombed by an Arab-Israeli, injuring 28 civilians."
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
