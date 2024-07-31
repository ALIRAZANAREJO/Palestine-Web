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
    "The Elbit Systems Hermes 900 Kochav (Star)is an Israeli medium-size, multi-payload, medium-altitude long-endurance unmanned aerial vehicle (UAV) designed for tactical missions",
    "It is designed for a wide range of military and security missions and extended flight endurance, advanced sensor capabilities, and adaptability to various operational scenarios. "
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





