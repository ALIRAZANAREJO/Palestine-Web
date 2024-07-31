const headlines = [
    "At around 6:30 a.m. IDT (UTC+3) on 7 October 2023, Hamas announced the start of what it called 'Operation Al-Aqsa Flood', stating it had fired over 5,000 rockets from the Gaza Strip into Israel within a span of 20 minutes. Israeli sources reported that at least 3,000 projectiles had been launched from Gaza...",
    "the Palestinian Sunni Islamist group Hamas (a U.S.-designated foreign terrorist organization, or FTO) led surprise attacks against Israel from the Gaza Strip. More than 1,200 Israelis and foreign nationals (including at least 35 U.S. citizens in Israel) were killed...",
    "At least 44 countries denounced the attack as terrorism, while some Arab and Muslim countries blamed Israel's occupation of the Palestinian territories as the root cause of the attack.[44][45][46] The day was labeled the bloodiest in Israel's history and the deadliest for Jews since the Holocaust.[47][48][49][50] Some have called the attack a genocide against Israelis."
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
  
      
   