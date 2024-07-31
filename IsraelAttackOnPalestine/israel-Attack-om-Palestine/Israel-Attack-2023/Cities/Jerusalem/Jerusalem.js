const headlines = [
  "The attack on Jerusalem in October 2023, part of a broader conflict, was marked by significant casualties and displacement. According to reports, the initial attack resulted in the deaths of 1,139 individuals, including 695 Israeli civilians, of which 36 were children.",
  "The aftermath saw a substantial number of people displaced, with the head of Israel’s National Emergency Management Authority reporting that a quarter of a million Israelis were displaced.",
  "Many survivors sought refuge in temporary accommodations, such as hotels or resorts, as they were unable to return to their homes due to the ongoing conflict and security concerns.",
  "The events in Jerusalem reflect the profound human toll of the conflict and the urgent need for safety and shelter for those affected."
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
          setTimeout(removeWords, 1000); // Wait for 1 second before removing words
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

    
 

    
