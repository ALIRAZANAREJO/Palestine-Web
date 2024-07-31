//Search Engine
const phrases = [
'Hi How are you Me Ali Raza Narejo :) Here i Assest you',
'Welcome to My Palestine Website ',
'Today We See About Palestine >',
'What is Palestine ?',
'Why is Palestine ?',
'Where from Plaestinianes?',  
'What Happend With Palestine ?',
'Why Happend with Plaestine ?',
'Who Attack At Palestine ?',
'Is Israel Attact At Palestine ?',
'Who is Israel ?',
'Why is Israel ?',
'Where From Israel ?',
'Why israel War with Palestine ?',
'How israel Attack at Palestine ?',
'About Israel Army ?.'
];

let index = 0;
let intervalId = null;
let timerId = null;
let lastInputValue = '';

function typePhrase(phrase) {
const input = document.getElementById('searchInput');
let i = 0;
intervalId = setInterval(function() {
  if (i <= phrase.length) {
    input.value = phrase.substring(0, i);
    i++;
  } else {
    clearInterval(intervalId);
    timerId = setTimeout(erasePhrase, 3000); // Restart typing after 3 seconds if input is empty
  }
}, 100);
}

function erasePhrase() {
const input = document.getElementById('searchInput');
let phrase = input.value;
let i = phrase.length;
intervalId = setInterval(function() {
  if (i >= 0) {
    input.value = phrase.substring(0, i);
    i--;
  } else {
    clearInterval(intervalId);
    index = (index + 1) % phrases.length;
    typePhrase(phrases[index]); // Restart auto-typing with the next phrase
  }
}, 10);
}

function stopTyping() {
clearInterval(intervalId);
clearTimeout(timerId); // Clear the timer when stopping typing
}

function restartTypingIfEmpty() {
const input = document.getElementById('searchInput');
if (input.value === '') {
  clearTimeout(timerId); // Clear the previous timer if any
  timerId = setTimeout(startTyping, 3000); // Restart typing after 3 seconds if input is empty
}
}

function startTyping() {
index = 0;
typePhrase(phrases[index]);
}

document.getElementById('searchButton').addEventListener('click', function() {
stopTyping();
searchAndRedirect();
});

document.getElementById('searchInput').addEventListener('input', function() {
stopTyping();
restartTypingIfEmpty();
});

document.getElementById('searchInput').addEventListener('click', function() {
clearInterval(intervalId); // Stop auto-typing immediately upon clicking
this.value = ''; // Clear the input immediately upon clicking
stopTyping();
restartTypingIfEmpty();
});

document.getElementById('searchInput').addEventListener('focus', function() {
setTimeout(function() {
  stopTyping();
}, 100); // Pause auto-typing for 0.1 second upon focusing
});

// Start auto-typing when the page loads
startTyping();
