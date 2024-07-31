const headlines = [
  "In September 15, 2023, Beit Jala faced a devastating Israeli attack, resulting in widespread devastation and loss.",
  " The city mourned the loss of eighteen men, sixteen women, and eleven children. Despite the tragedy, Beit Jala's population of 30,000 continues to demonstrate resilience, determined to rebuild and recover from the devastation."
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

    
 