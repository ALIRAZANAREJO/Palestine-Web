const headlines = [
    "Black September (Arabic: أيلول الأسود Aylūl al-ʾAswad), also known as the Jordanian Civil War,[9] was an armed conflict between Jordan, led by King Hussein, and the Palestine Liberation Organization (PLO), led by chairman Yasser Arafat. The main phase of the fighting took place between 16 and 27 September 1970, though certain aspects of the conflict continued until 17 July 1971.",
    "After the 1967 Six-Day War, Palestinian fedayeen guerrillas relocated to Jordan and stepped up their attacks against Israel and what had become the Israeli-occupied West Bank. They were headquartered at the Jordanian border town of Karameh, which Israel targeted during the Battle of Karameh in 1968, leading to a surge of Arab support for the fedayeen. The PLO's strength grew, and by early 1970, leftist groups within the PLO began calling for the overthrow of Jordan's Hashemite monarchy, leading to violent clashes in June 1970. Hussein hesitated to oust them from the country, but continued PLO activities in Jordan culminated in the Dawson's Field hijackings of 6 September 1970. This involved the Popular Front for the Liberation of Palestine (PFLP) seizing three civilian passenger flights and forcing their landing in the Jordanian city of Zarqa, where they took foreign nationals as hostages and blew up the planes in front of international press. Hussein saw this as the last straw and ordered the Jordanian Army to take action."
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
