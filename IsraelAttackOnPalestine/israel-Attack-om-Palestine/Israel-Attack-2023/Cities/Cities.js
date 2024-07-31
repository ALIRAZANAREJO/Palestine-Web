
// Mapping between simplified city names and their actual routes
const cityRoutes = {
    "palestine":"palestine.html",
    "israel": "Israel.html/Israel-Army.html",
    "palestine city":"FPP1.html/FPP.html",
    "attack 1904":"IsraelAttackOnPalestine/Attack1948.html",
    "israel militry":"Israel.html/Militry/Militory.html",
    "israel Panzers":"Israel.html/Panzers/Panzer.html",
    "israel fighterjet":"Israel.html/Fighterjets/Fighterjet.html",
    "israel helicopter":"Israel.html/Helicopters/Helicopters.html",
    "israel uav":"Israel.html/UAV-Aircraft/UAV-Aircraft.html",
    "masjide aqsa":"FPP1.html/Masjid-e-Aqsa.html",
    "history of palestine":"IsraelAttackOnPalestine/History-of-palestine/History.html",
    "paletine establishment":"IsraelAttackOnPalestine/History-of-palestine/Established/Established.html",
    "history of israel":"IsraelAttackOnPalestine/History-of-palestine/Yahodies/Yahodies.html",
    "today israel":"IsraelAttackOnPalestine/History-of-palestine/Y-Make-Israel/Make-Isreal.html",
    "israel attack 2023":"IsraelAttackOnPalestine/israel-Attack-om-Palestine/israel-Attack-2023.html",
    "hamas":"IsraelAttackOnPalestine/Hammaz-&-israel-War/Hammaz-Attack-On-Israel.html",
  };
  
  function handleKeyPress(event) {
    if (event.key === 'Enter') {
      searchCity();
    }
  }
  function handleInputFocus() {
    const cityInput = document.getElementById('cityInput');
    cityInput.classList.remove('transparent-background');
  }
  
  function handleInputBlur() {
    const cityInput = document.getElementById('cityInput');
    // Check if the input is empty before adding the transparent background
    if (cityInput.value.trim() === '') {
      cityInput.classList.add('transparent-background');
    }
  }
  function searchCity() {
    const cityInput = document.getElementById('cityInput').value.toLowerCase();
  
    // Check if the entered city is in the mapping
    if (cityRoutes.hasOwnProperty(cityInput)) {
      const cityPageUrl = cityRoutes[cityInput];
      window.location.href = cityPageUrl;
    } else {
      alert('City not found.');
    }
  }
  
  
  const headlines = [
    "Palestine, area of the eastern Mediterranean region, comprising parts of modern Israel",
    "And the Palestinian territories of the Gaza Strip (along the coast of the Mediterranean Sea) and the (West Bank west of the Jordan River)."
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
  
      
   