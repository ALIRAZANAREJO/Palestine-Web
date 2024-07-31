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
    "Israel has a rich history of developing and utilizing tanks to meet its unique security challenges in the Middle East",
    "Here are some key points about Israel's tanks ."
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





