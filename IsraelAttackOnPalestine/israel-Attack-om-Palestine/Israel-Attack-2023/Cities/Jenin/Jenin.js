  const headlines = [
    "On 26 January 2023, the Israel Border Police and the Israeli army conducted an armed raid on the Jenin refugee camp, which is in Area A of the Israeli-occupied West Bank and under Palestinian civil authority.[5] According to The Jerusalem Post, the objective was to prevent a planned terrorist strike and arrest three wanted Islamic Jihad militants...",
    "Nine Palestinians were killed by Israeli forces during the ensuing clashes, one of whom was an elderly woman.[8][9][10] On 29 January, another Palestinian succumbed to wounds received during the raid, bringing the total killed to ten.[11][12] It was the deadliest Israeli raid on the Jenin refugee camp in nearly 20 years.[13] The Israeli government said at least six of those killed were armed men.[14] The deaths brought the number of Palestinians killed in 2023 to thirty,[15] 20 of whom were killed in Jenin...",
    "On 27 January, UN experts stated We deplore the Israeli army’s latest violent attack against the Jenin Refugee Camp, and the killing and wounding of Palestinians on Thursday. It shows a dangerous trajectory of violence in the occupied West Bank, continuing the alarming upward trend from 2022.[17][18] Amnesty International called the killings unlawful and blamed 'Israel’s apartheid system' for the ongoing violence including the Jerusalem shooting."
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
  
      
   