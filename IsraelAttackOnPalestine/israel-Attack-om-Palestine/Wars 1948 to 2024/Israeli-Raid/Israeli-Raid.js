const headlines = [
    "The 1973 Israeli raid in Lebanon (also known as Operation Spring of Youth in Hebrew or the Verdun massacre in Arabic)[3] took place on the night of April 9 and early morning of April 10, 1973, when Israeli army special forces units attacked several Palestine Liberation Organization (PLO) targets in Beirut and Sidon, Lebanon.[4] The operation is generally considered to have been part of Operation Wrath of God, Israel's retaliation for the Munich massacre at the Summer Olympics in 1972",
    "The Israeli troops arrived at the Lebanese beaches on speedboats launched from missile boats offshore. Mossad agents awaited the forces on the beaches with cars rented the previous day, and then drove them to their targets and later back to the beaches for extraction. During the operation, three of the highest-level PLO leaders, surprised at home, were killed, along with other PLO members. Several Lebanese security people and civilian neighbors were also killed, as were two of the Israeli soldiers."
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
