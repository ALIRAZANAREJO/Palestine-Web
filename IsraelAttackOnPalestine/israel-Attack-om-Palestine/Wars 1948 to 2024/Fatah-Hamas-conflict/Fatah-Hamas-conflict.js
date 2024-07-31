const headlines = [
    "The Fatah–Hamas conflict (Arabic: النزاع بين فتح وحماس, romanized: an-Nizāʿ bayna Fataḥ wa-Ḥamās) is an ongoing political and strategic conflict between Fatah and Hamas,[a] the two main Palestinian political parties in the Palestinian territories, leading to the Hamas takeover of the Gaza Strip in June 2007. The reconciliation process and unification of Hamas and Fatah administrations remains unfinalized and the situation is deemed a frozen conflict The Palestinian Independent Commission for Citizens' Rights has found that over 600 Palestinians were killed in the fighting from January 2006 to May 2007.[14] Dozens more were killed or executed in the following years as part of the conflict.",
    "Hamas was founded in 1987,[15][16] soon after the First Intifada broke out, as an offshoot of the Egyptian Muslim Brotherhood.[17] It is a Palestinian Sunni-Islamist fundamentalist organization,[18][19] which is regarded, either in whole or in part, as a terrorist organization by several countries and international organizations, including by Australia, Canada, the European Union, Israel, Japan, Paraguay, the United Kingdom, and the United States.Tensions between Fatah and Hamas began to rise in 2005 after the death of Yasser Arafat in November 2004. After the legislative election on 25 January 2006, which resulted in a Hamas victory, relations were marked by sporadic factional fighting. This became more intense after the two parties repeatedly failed to reach a deal to share government power, escalating in June 2007 and resulting in Hamas' takeover of Gaza.[23] A major issue was control over the border crossings, especially the Rafah Border Crossing."
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
