const headlines = [
    "Over the course of 2023",
    " before the October 7 attack, 32 Israelis and two foreign nationals had been killed in Palestinian attacks, while at least 247 Palestinians had been killed by Israeli forces."
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






function zoomCard(card) {
    card.classList.add('zoomed-card');
    card.querySelector('.card-video').play();
}

function resetCard(card) {
    card.classList.remove('zoomed-card');
    card.querySelector('.card-video').pause();
    card.querySelector('.card-video').currentTime = 0;
}

document.querySelectorAll('.video-card').forEach(card => {
    card.addEventListener('mouseover', function() {
        document.querySelectorAll('.video-card').forEach(c => {
            if (c !== card) {
                c.classList.add('black-and-white');
            }
        });
    });
    card.addEventListener('mouseout', function() {
        document.querySelectorAll('.video-card').forEach(c => {
            if (c !== card) {
                c.classList.remove('black-and-white');
            }
        });
    });
});
