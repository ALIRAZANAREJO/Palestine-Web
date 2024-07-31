 
const headlines = [
    "More than 70,000 Palestinians have been injured since 7 October 2023, meaning that over 100,000 people have now been killed or injured in 140 days of Israel's offensive. At least a further 7000 are estimated to lie dead beneath the rubble."
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



// Function to handle the like icon click
function handleLike(clickedIcon) {
  const likeIcon = clickedIcon.parentNode.querySelector('.like'); // Get the like icon within the same card
  likeIcon.classList.toggle('active'); // Toggle the 'active' class on the like icon
}

// Function to handle the share icon click
function handleShare(clickedIcon) {
  const shareIcon = clickedIcon.parentNode.querySelector('.share'); // Get the share icon within the same card
  shareIcon.classList.toggle('active'); // Toggle the 'active' class on the share icon
}

// Function to handle the comment icon click
function handleComment(clickedIcon) {
  const commentIcon = clickedIcon.parentNode.querySelector('.comment'); // Get the comment icon within the same card
  commentIcon.classList.toggle('active'); // Toggle the 'active' class on the comment icon
}




