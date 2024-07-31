const headlines = [
    "The First Intifada (Arabic: الانتفاضة الأولى, romanized: al-Intifāḍa al-’Ūlā, lit. 'The First Uprising'), also known as the First Palestinian Intifada or the Stone Intifada, was a sustained series of protests, civil disobedience and riots carried out by Palestinians in the Israeli-occupied Palestinian territories and Israel.It was motivated by collective Palestinian frustration over Israel's military occupation of the West Bank and the Gaza Strip, as it approached a twenty-year mark, having begun in the wake of the 1967 Arab–Israeli War.[8] The uprising lasted from December 1987 until the Madrid Conference of 1991, though some date its conclusion to 1993, with the signing of the Oslo Accords",
    "The intifada began on 9 December 1987,in the Jabalia refugee camp after an Israeli truck driver collided with a civilian car, killing four Palestinian workers, three of whom were from the Jabalia refugee camp.[10][11] Palestinians charged that the collision was a deliberate response for the killing of an Israeli in Gaza days earlier.[12] Israel denied that the crash, which came at time of heightened tensions, was intentional or coordinated. The Palestinian response was characterized by protests, civil disobedience, and violence.There was graffiti, barricading,and widespread throwing of stones and Molotov cocktails at the Israeli army and its infrastructure within the West Bank and Gaza Strip. These contrasted with civil efforts including general strikes, boycotts of Israeli Civil Administration institutions in the Gaza Strip and the West Bank, an economic boycott consisting of refusal to work in Israeli settlements on Israeli products, refusal to pay taxes, and refusal to drive Palestinian cars with Israeli licenses."
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
