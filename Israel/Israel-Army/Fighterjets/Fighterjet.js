function zoomCard(card) {
    card.style.transform = 'scale(1.1)';
    const info = card.querySelector('.info');
    info.style.display = 'block';
    const circleImg = card.querySelector('.circle img');
    circleImg.style.transform = 'scale(1.2)';
}

function unzoomCard(card) {
    card.style.transform = 'scale(1)';
    const info = card.querySelector('.info');
    info.style.display = 'none';
    const circleImg = card.querySelector('.circle img');
    circleImg.style.transform = 'scale(1)';
}



const headlines = [
    "The airbase was used extensively by the Syrian Arab Air Force during the Syrian Civil Wa",
    "On 18 May 2018, a series of massive explosions at the airbase reportedly resulted in the death of 11 people and dozens others injured or missing.[3] According to Syrian military officials, technical failure inside the depots had caused the incident, while other sources allege it had been triggered by an Israeli airstrike or a sabotage operation by the jihadist group Saraya Al-Jihad, who claimed responsibility soon afterwards.On 1 March 2020, Turkish drones bombed the 47th brigade which was located in the airbase.[5]."
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





