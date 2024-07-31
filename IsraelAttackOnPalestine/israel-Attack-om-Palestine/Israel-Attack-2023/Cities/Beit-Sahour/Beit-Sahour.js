const headlines = [
    "Beit Sahour endured a tragic Israeli assault on November 25, 2023, leaving deep scars on the city and its inhabitants.",
    " The city suffered significant loss, with twenty men, eighteen women, and thirteen children tragically losing their lives. Despite the adversity, Beit Sahour's population of 25,000 remains steadfast, united in their determination to rebuild and restore their community."
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
  
      
   