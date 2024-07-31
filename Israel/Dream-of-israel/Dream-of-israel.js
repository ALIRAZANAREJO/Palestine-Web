const headlines = [
    "The Third Temple (Hebrew: בֵּית הַמִּקְדָּשׁ הַשְּׁלִישִׁי‎, Bēṯ hamMīqdāš hašŠlīšī, transl. 'Third House of the Sanctum') refers to a hypothetical rebuilt Temple in Jerusalem. It would succeed Solomon's Temple and the Second Temple, the former having been destroyed during the Babylonian siege of Jerusalem in c. 587 BCE and the latter having been destroyed during the Roman siege of Jerusalem in 70 CE...",
    " The notion of and desire for the Third Temple is sacred in Judaism, particularly in Orthodox Judaism. It would be the most sacred place of worship for Jews. The Hebrew Bible holds that Jewish prophets called for its construction prior to, or in tandem with, the Messianic Age. The building of the Third Temple also plays a major role in some interpretations of Christian eschatology."
];
let currentIndex = 0;
let wordIndex = 0;
let isAdding = true;

function updateHeadline() {
    const headlineContainer = document.getElementById("headlineContainer");
    const headline = headlines[currentIndex];

    if (isAdding) {
        const partialHeadline = headline.substr(0, wordIndex + 1);
        headlineContainer.textContent = partialHeadline;
        wordIndex++;
        if (wordIndex > headline.length) {
            isAdding = false;
        }
    } else {
        const partialHeadline = headline.substr(0, wordIndex);
        headlineContainer.textContent = partialHeadline;
        wordIndex--;
        if (wordIndex < 0) {
            isAdding = true;
            currentIndex = (currentIndex + 1) % headlines.length;
        }
    }
}

// Set interval to update headlines
setInterval(updateHeadline, 80); // Change every 0.3 seconds

