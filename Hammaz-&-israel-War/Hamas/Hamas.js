const headlines = [
  "Hamas was founded by Palestinian imam and activist Ahmed Yassin in 1987, after the outbreak of the First Intifada against the Israeli occupation. It emerged from his 1973 Mujama al-Islamiya Islamic charity affiliated with the Muslim Brotherhood.[55] In 2006, Hamas won the Palestinian legislative election by campaigning on clean government without corruption, combined with affirmation of Palestinians’ right to armed struggle against the Israeli occupation, thus winning a majority in the Palestinian Legislative Council.",
    "In 2007, Hamas took control of the Gaza Strip from rival Palestinian faction Fatah,[57][58] which it has governed since separately from the Palestinian National Authority. This was followed by an Israeli blockade of the Gaza Strip with Egyptian support, and multiple wars with Israel, including in 2008–09, 2012, 2014, and 2021. The ongoing 2023 war began after Hamas launched an attack, killing both civilians and soldiers, and taking hostages back to Gaza.[59][60][61] The attack has been described as the biggest military setback for Israel since the 1973 Arab–Israeli War, which Israel has responded to in an ongoing ground invasion of Gaza."
];

let currentIndex = 0;
let wordIndex = 0;
let isAdding = true;

function updateHeadline() {
    const headlineContainer = document.getElementById("headlineContainer");
    const headline = headlines[currentIndex];

    if (isAdding) {
        const partialHeadline = headline.substr(0, wordIndex + 1);
        headlineContainer.textContent = partialHeadline;
        wordIndex++;
        if (wordIndex > headline.length) {
            isAdding = false;
        }
    } else {
        const partialHeadline = headline.substr(0, wordIndex);
        headlineContainer.textContent = partialHeadline;
        wordIndex--;
        if (wordIndex < 0) {
            isAdding = true;
            currentIndex = (currentIndex + 1) % headlines.length;
        }
    }
}

// Set interval to update headlines
setInterval(updateHeadline, 80); // Change every 0.3 seconds





