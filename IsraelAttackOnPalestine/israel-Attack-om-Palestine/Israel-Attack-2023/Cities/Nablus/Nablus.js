  const headlines = [
    "On 22 February 2023, Israel conducted a military incursion into the Palestinian city of Nablus. After an undercover unit located the house in which two militants were believed to be residing, a firefight broke out, resulting in the deaths of 3 militants. Fighting between Israeli reinforcements and other militants left 4 suspected militants and 4 other Palestinians dead. A further 102 people suffered injuries...",
    "Of the 11 killed, one person dying on the following day, seven[8] were identified as militants.[1] Three elderly men, Adnan Sabe Bara (72); Abdelhadi Abed Aziz Al-Ashqar (61), and Anan Shawkat Anna (66), also died, the last of side-effects of tear gas intoxication the day after. The fourth civilian casualty was a boy, Mohammad Farid Shaaban (16).[1][9] Overall some 102 people were injured, 82 of whom having been shot by live ammunition from Israeli gunfire. Six people are reported to be in critical condition...",
    "The Palestinian Health ministry said that dozens were being treated for bullet wounds, some critical. Two of the dead were said to be the subject of the arrest operation and killed following the Israeli forces demolition of the building they were occupying.[10][3][4] The Health ministry also said that two journalists were lightly injured by live fire."
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
  
      
   