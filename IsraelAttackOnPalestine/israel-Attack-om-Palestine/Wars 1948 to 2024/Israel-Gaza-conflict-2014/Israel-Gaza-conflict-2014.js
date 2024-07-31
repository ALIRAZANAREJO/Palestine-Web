const headlines = [
    "The 2014 Gaza War, also known as Operation Protective Edge (Hebrew: מִבְצָע צוּק אֵיתָן, romanized: Miv'tza Tzuk Eitan, lit. 'Operation Strong Cliff'[note 3][26][27][28]), and Battle of the Withered Grain (Arabic: معركة العصف المائكول, romanized: Mʿa-rakkat Al-ʿasf Al-Ma’kool[29][30]), was a military operation launched by Israel on 8 July 2014 in the Gaza Strip, a Palestinian territory that has been governed by Hamas since 2007.[note 4] Following the kidnapping and murder of three Israeli teenagers in the West Bank by Hamas-affiliated Palestinian militants, the Israel Defense Forces (IDF) initiated Operation Brother's Keeper, in which some 350 Palestinians, including nearly all of the active Hamas militants in the West Bank, were arrested.[31][32][33] Hamas subsequently fired a greater number of rockets into Israel from the Gaza Strip, triggering a seven-week-long conflict between the two sides. It was one of the deadliest outbreaks of open conflict between Israel and the Palestinians in decades. The combination of Palestinian rocket attacks and Israeli airstrikes resulted in over two thousand deaths, the vast majority of which were Gazan Palestinians.[34] This includes a total of six Israeli civilians who were killed as a result of the conflict",
    
    "On 7 July, after seven Hamas militants died in a tunnel explosion in Khan Yunis that was caused either by an Israeli airstrike (per Hamas, Nathan Thrall, BBC, and a senior IDF official)[39] or an accidental explosion of their own munitions (per the IDF), Hamas assumed responsibility for rockets fired into Israel, and subsequently launched 40 more rockets towards Israel.[40][41] The Israeli aerial operation officially began the following day, and on 17 July, it was expanded to include a full-scale ground invasion of the Gaza Strip with the stated aim of destroying Gaza's tunnel system;[42] the Israeli ground invasion ended on 5 August.[43] On 26 August, an open-ended ceasefire was announced.[44] By this time, the IDF reported that Hamas, PIJ, and other Palestinian militant groups had fired 4,564 rockets and mortars into Israel, with over 735 projectiles having been intercepted mid-flight and shot down by Israel's Iron Dome. Most Gazan mortar and rocket fire was inaccurate, and consequently hit open land; more than 280 projectiles had landed within the Gaza Strip,[45][46][47] and 224 had struck residential areas.[48][49] Palestinian rocketry also killed 13 Palestinian civilians in Gaza, 11 of them children.[50][51] The IDF attacked 5,263 targets in the Gaza Strip; at least 34 known tunnels were destroyed[48] and two-thirds of Hamas's 10,000-rocket arsenal was either used up or destroyed"
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
