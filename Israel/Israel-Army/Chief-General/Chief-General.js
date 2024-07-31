const headlines = [
    "Herzl 'Herzi' Halevi (Hebrew: הרצ'הרצי' הלוי; born 17 December 1967) is the Chief of the General Staff of the Israel Defense Forces, having taken the oath of office on 16 January 2023..",
    "Halevi was drafted into the Israel Defense Forces (IDF) in 1985. He volunteered as a paratrooper in the Paratroopers Brigade. He served as a soldier and squad leader.[6] In 1987, he became an infantry officer after completing an officer candidate school and returned to the Paratroopers Brigade as a platoon leader. Halevi led the brigade's anti-tank company in counter-guerrilla operations during the South Lebanon conflict.[7] In 1993, he was assigned to Sayeret Matkal, the IDF's special forces unit, where he served as a company commander. Halevi later commanded the unit during the Second Intifada.." ,
    "Herzl (Herzi) Halevi was born in Jerusalem. His father Shlomo was the son of Haim Shalom Halevi (Gordin), a member of the Irgun and the 'Battalion for the Defence of the Language',[4] and Tzila, the daughter of Rabbi Dov-Ber HaCohen Kook and niece of Rabbi Abraham Isaac HaCohen Kook, the chief rabbi of Israel. He was named after his uncle who died in the battle for Jerusalem in the Six-Day War several months before his birth.[5] Halevi's mother's family lived in Jerusalem for 14 generations, while his father's parents immigrated from Russia.Halevi studied at Himmelfarb religious high school and was a member of the Tzofim religious scouts."
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
  
      
   