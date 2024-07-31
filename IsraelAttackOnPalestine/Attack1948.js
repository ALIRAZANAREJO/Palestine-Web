const headlines = [
  "It formally began following the end of the British Mandate for Palestine at midnight on 14 May 1948.",
  "The Israeli Declaration of Independence had been issued earlier that day & a military coalition of Arab states entered the territory of British Palestine in the morning of 15 May."
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

setInterval(updateHeadline, 80);
