const headlines = [
  "About Plaestine Situation",
  "There Billions Muslims w Atomic Power Countries",
  "But No One Can Help Palestine",
  "Muslims Siad To Palestinianes",
  "We Are Stand With You",
  "We Fight For You",
  "We Help You",
  "We Can Understand Your Pain",
  "WE Pray For You",
  "But Reality is Now You See",
  "If Muslims See Injured Palestinianes",
  "They Like Share & Post",
  "Write Captions ",
  "I AM Stand w Palestine",
  "Fuck israel",
  "israel is Nothing",
  "israel is Yahoudi",
  "We Kill You israel",
  "We Het You",
  "We Love Palestine",
  "Allah May Help You",
  "We case Fire for you",
  "People make Dresses For Relies",
  "To Show They Care About Palestine",
  "But They Can,t Come To Plaestine",
  "They Said We Have a Family",
  "They Can,t To Leave Their Family",
  "Because They Love Their Family",
  "But We Want Justice for You from israel",
  "We Apeel For Your Help",
  "To Our Prime Minister",
  "But Reality Primenister oF",
  "Every Muslim Coutreis",
  "Are Already Saled From America",
  "Sorry To Show Our Life Reality & Truth"
];

let currentIndex = 0;
let wordIndex = 0;
let isAdding = true;

function updateHeadline() {
  const text = document.getElementById("text");
  const headline = headlines[currentIndex];

  if (isAdding) {
    const partialHeadline = headline.substr(0, wordIndex + 1);
    text.textContent = partialHeadline;
    wordIndex++;
    if (wordIndex > headline.length) {
      isAdding = false;
    }
  } else {
    const partialHeadline = headline.substr(0, wordIndex);
    text.textContent = partialHeadline;
    wordIndex--;
    if (wordIndex < 0) {
      isAdding = true;
      currentIndex = (currentIndex + 1) % headlines.length;
    }
  }
}
function updateCursorPosition() {
  const cursorElement = document.querySelector('.container span');
  cursorElement.style.marginLeft = `${document.getElementById('text').offsetWidth}px`;
}
setInterval(updateHeadline, 80);

document.addEventListener('DOMContentLoaded', () => {
  const h2 = document.getElementById('container');
  const spans = document.querySelectorAll('#container span');
  let currentSpanIndex = 0;
  let charIndex = 0;
  let typing = true;
  let deleting = false;

  const typingSpeed = 100; // milliseconds per character
  const deletingSpeed = 100; // milliseconds per character
  const delayBetweenWords = 30; // milliseconds
  const delayBeforeDeleting = 2000; // milliseconds before deleting all text
  const delayBetweenSpans = 100; // milliseconds between typing different spans

  function type() {
    if (currentSpanIndex < spans.length) {
      const currentSpan = spans[currentSpanIndex];
      const fullText = currentSpan.dataset.text;

      if (typing) {
        if (charIndex < fullText.length) {
          currentSpan.style.visibility = 'visible';
          currentSpan.textContent = fullText.substring(0, charIndex + 1);
          addCursor(currentSpan);
          charIndex++;
          setTimeout(type, typingSpeed);
        } else {
          // Move to the next span after the word is fully typed
          removeCursor(currentSpan);
          charIndex = 0;
          currentSpanIndex++;
          if (currentSpanIndex < spans.length) {
            setTimeout(type, delayBetweenSpans);
          } 
        }
      }
    }
  }

 
  function addCursor(element) {
    element.classList.add('show-cursor');
  }

  function removeCursor(element) {
    element.classList.remove('show-cursor');
  }

  // Initialize dataset.text with original span text and clear spans
  spans.forEach(span => {
    span.dataset.text = span.textContent;
    span.textContent = '';
  });

  type();
});
 





// heading 4
//document.addEventListener('DOMContentLoaded', function () {
  //   const h2 = document.getElementById('typedText1');
  //   const h3 = document.getElementById('typedText2');
  //   const h4 = document.getElementById('typedText3');
  //   const h5 = document.getElementById('typedText4');
  //   const elements = [h2, h3, h4, h5];
  //   let elementIndex = 0;
  //   let currentElement = elements[elementIndex];
  //   let typingSpeed = 100;
  //   let deletingSpeed = 50;
  //   let delayAfterTyping = 3000;
  //   let delayAfterDeleting = 2000;
  //   let cursor;
  //   let textToType = '';
  //   let charIndex = 0;
  
  //   function type() {
  //     if (charIndex < textToType.length) {
  //       currentElement.innerHTML = textToType.slice(0, charIndex + 1) + cursor.outerHTML;
  //       charIndex++;
  //     } else {
  //       clearInterval(typingInterval);
  //       setTimeout(() => {
  //         deletingInterval = setInterval(deleteText, deletingSpeed);
  //       }, delayAfterTyping);
  //     }
  //   }
  
  //   function deleteText() {
  //     if (charIndex > 0) {
  //       currentElement.innerHTML = textToType.slice(0, charIndex - 1) + cursor.outerHTML;
  //       charIndex--;
  //     } else {
  //       clearInterval(deletingInterval);
  //       setTimeout(() => {
  //         currentElement.classList.add('hidden');
  //         elementIndex = (elementIndex + 1) % elements.length;
  //         currentElement = elements[elementIndex];
  //         textToType = Array.from(currentElement.children).map(span => span.textContent).join('');
  //         charIndex = 0;
  //         currentElement.classList.remove('hidden');
  //         cursor.style.borderColor = getComputedStyle(currentElement.children[0]).color;
  //         typingInterval = setInterval(type, typingSpeed);
  //       }, delayAfterDeleting);
  //     }
  //   }
  
  //   cursor = document.createElement('span');
  //   cursor.className = 'typing-effect';
  //   textToType = Array.from(currentElement.children).map(span => span.textContent).join('');
  //   currentElement.appendChild(cursor);
  //   currentElement.classList.remove('hidden');
  //   cursor.style.borderColor = getComputedStyle(currentElement.children[0]).color;
  //   let typingInterval = setInterval(type, typingSpeed);
  //   let deletingInterval;
  // });












// document.addEventListener('DOMContentLoaded', () => {
//   const spans = document.querySelectorAll('#container span');
//   let currentSpanIndex = 0;
//   let charIndex = 0;
//   let typing = true;

//   const typingSpeed = 100; // milliseconds per character
//   const deletingSpeed = 50; // milliseconds per character
//   const delayBetweenWords = 3000; // milliseconds
//   const delayBetweenSpans = 1000; // milliseconds between typing different spans

//   function type() {
//       if (currentSpanIndex < spans.length) {
//           const currentSpan = spans[currentSpanIndex];
//           const fullText = currentSpan.dataset.text;

//           if (typing) {
//               if (charIndex < fullText.length) {
//                   currentSpan.style.visibility = 'visible';
//                   currentSpan.textContent = fullText.substring(0, charIndex + 1);
//                   charIndex++;
//                   setTimeout(type, typingSpeed);
//               } else {
//                   typing = false;
//                   setTimeout(type, delayBetweenWords);
//               }
//           } else {
//               if (charIndex > 0) {
//                   currentSpan.textContent = fullText.substring(0, charIndex - 1);
//                   charIndex--;
//                   setTimeout(type, deletingSpeed);
//               } else {
//                   currentSpan.style.visibility = 'hidden';
//                   typing = true;
//                   currentSpanIndex = (currentSpanIndex + 1) % spans.length;
//                   setTimeout(type, delayBetweenSpans);
//               }
//           }
//       }
//   }

//   // Initialize dataset.text with original span text and clear spans
//   spans.forEach(span => {
//       span.dataset.text = span.textContent;
//       span.textContent = '';
//   });

//   type();
// });

  









// document.addEventListener('DOMContentLoaded', function () {
//   const h2 = document.getElementById('typedText1');
//   const h3 = document.getElementById('typedText2');
//   const elements = [h2, h3];
//   let elementIndex = 0;
//   let currentElement = elements[elementIndex];
//   let typingSpeed = 100;
//   let deletingSpeed = 50;
//   let delayAfterTyping = 3000;
//   let delayAfterDeleting = 2000;
//   let cursor;
//   let textToType = '';
//   let charIndex = 0;

//   function type() {
//     if (charIndex < textToType.length) {
//       currentElement.innerHTML = textToType.slice(0, charIndex + 1) + cursor.outerHTML;
//       charIndex++;
//     } else {
//       clearInterval(typingInterval);
//       setTimeout(() => {
//         deletingInterval = setInterval(deleteText, deletingSpeed);
//       }, delayAfterTyping);
//     }
//   }

//   function deleteText() {
//     if (charIndex > 0) {
//       currentElement.innerHTML = textToType.slice(0, charIndex - 1) + cursor.outerHTML;
//       charIndex--;
//     } else {
//       clearInterval(deletingInterval);
//       setTimeout(() => {
//         currentElement.classList.add('hidden');
//         elementIndex = (elementIndex + 1) % elements.length;
//         currentElement = elements[elementIndex];
//         textToType = Array.from(currentElement.children).map(span => span.textContent).join('');
//         charIndex = 0;
//         currentElement.classList.remove('hidden');
//         cursor.style.borderColor = getComputedStyle(currentElement.children[0]).color;
//         typingInterval = setInterval(type, typingSpeed);
//       }, delayAfterDeleting);
//     }
//   }

//   cursor = document.createElement('span');
//   cursor.className = 'typing-effect';
//   textToType = Array.from(currentElement.children).map(span => span.textContent).join('');
//   currentElement.appendChild(cursor);
//   currentElement.classList.remove('hidden');
//   cursor.style.borderColor = getComputedStyle(currentElement.children[0]).color;
//   let typingInterval = setInterval(type, typingSpeed);
//   let deletingInterval;
// });


