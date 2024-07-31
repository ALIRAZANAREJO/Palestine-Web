const headlines = [
    "The War of the Camps (Arabic: حرب المخيمات, romanized: Harb al-mukhayimat), was a subconflict within the 1984–1990 phase of the Lebanese Civil War, in which the Palestinian refugee camps in Beirut were besieged by the Shia Amal militia",
    "Sometimes described as being Muslim versus Christian, the Lebanese Civil War was actually a multifaceted conflict in which there was nearly as much inter-factional violence between members of the same religion as there was violence between Muslims and Christians.[2] In that respect, the conflict can be compared to the fighting between the Lebanese Forces (LF), a primarily Christian Maronite militia led by Samir Geagea, and Michel Aoun's Christian-controlled faction of the Lebanese Armed Forces (LAF).",
    "During the 1948 Arab-Israeli War and the subsequent Nakba (crisis) of the Palestinian people, hundreds of thousands of Palestinian refugees fled to Southern Lebanon.[3] A few Palestinians with skills and capital were allowed to reside in cities and live dignified lives; the majority, however were destitute peasants who could only offer their unskilled work to the Lebanese economy, and mostly lived in squalid refugee camps near the main cities. Upon arriving in Southern Lebanon, the locals sympathized with their catastrophic conditions, and many were sheltered in Abdul Husayn Sharaf ad-Dine's al-Ja'fariyya school until the authorities dealt with the situation. Sharaf ad-Dine also introduced a Palestinian curriculum known as 'Matriculation', to allow Palestinian students to finish what they had started in Palestine.[4] The sympathy was shared by the depopulatees of the Shia villages in Palestine, many of whom were massacred",
    "Even before the establishment of the Palestine Liberation Organization (PLO) in 1964, exiled Palestinian intellectuals residing in Lebanon and other Arab countries began to form clandestine paramilitary groups in the late 1950s. In 1956, Sharaf ad-Dine's al-Ja'fariyya school organized a guerrilla group consisting of 25 Lebanese and Palestinian students with the sole purpose of launching strikes in Israel.[citation needed] Moreover, prior to the Cairo Agreement in 1969, PLO's chairman Ahmad Shukeiri (1964–1967) had set up a PLO training camp in the southern village of Kafr Dunin. As such, pro-Palestinian sentiment among some Lebanese, in particular the Shiites, was high.[4] However, this unconditional support was disrupted following clashes between the Palestinians and the Lebanese Army in April 1969. Israeli retaliation against Palestinian operations mostly affected the local civilians, and in 1970 had led to the migration of more than 50,000 from the south. Actions of rogue factions further contributed to the alienation of the locals, such as setting up checkpoints throughout Beirut and the South, actions which Musa Sadr denounced as unrepresentative of the mainstream PLO.",
    "Opposing forces",
    "Allied with the pro-Arafat Palestinian refugee camp militias were the Lebanese Al-Mourabitoun, Sixth of February Movement, Communist Action Organization in Lebanon (OCAL), Druze Progressive Socialist Party (PSP) and Kurdish Democratic Party – Lebanon (KDP-L), who faced a powerful coalition of Lebanese Communist Party (LCP), and Shia Muslim Amal movement militia forces backed by Syria,[6] the Lebanese Army, and the anti-Arafat Fatah al-Intifada, As-Sa'iqa, Palestine Liberation Army, and Popular Front for the Liberation of Palestine – General Command (PFLP–GC) dissident Palestinian guerrilla factions. Some Palestinian fighters were able to return to the camps via Cyprus. The journey involved paying substantial sums of money to the Lebanese Forces militia who controlled the port at Jounieh. On 2 January 1987 the ferry from Larnica with 164 passengers was turned back by the Israeli Navy. The fighters were not arriving in large numbers; one estimate suggests 3-4,000 arrived in 1985."
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
