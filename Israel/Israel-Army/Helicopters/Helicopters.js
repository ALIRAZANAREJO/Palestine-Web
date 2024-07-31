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
    "Israel operates a diverse fleet of helicopters, ranging from attack and transport to search and rescue platforms.",
    "These helicopters are vital assets in the Israeli Defense Forces (IDF), contributing to their operational capabilities across a wide spectrum of missions"
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





