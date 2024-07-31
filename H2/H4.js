document.addEventListener('DOMContentLoaded', () => {
    const spans = document.querySelectorAll('#container2 span');
    let currentSpanIndex = 0;
    let charIndex = 0;
    let typing = true;
  
    const typingSpeed = 10; // milliseconds per character
    const deletingSpeed = 50; // milliseconds per character
    const delayBetweenWords = 300; // milliseconds
    const delayBetweenSpans = 1000; // milliseconds between typing different spans
  
    function type() {
        if (currentSpanIndex < spans.length) {
            const currentSpan = spans[currentSpanIndex];
            const fullText = currentSpan.dataset.text;
  
            if (typing) {
                if (charIndex < fullText.length) {
                    currentSpan.style.visibility = 'visible';
                    currentSpan.textContent = fullText.substring(0, charIndex + 1);
                    charIndex++;
                    setTimeout(type, typingSpeed);
                } else {
                    typing = false;
                    setTimeout(type, delayBetweenWords);
                }
            } else {
                if (charIndex > 0) {
                    currentSpan.textContent = fullText.substring(0, charIndex - 1);
                    charIndex--;
                    setTimeout(type, deletingSpeed);
                } else {
                    currentSpan.style.visibility = 'hidden';
                    typing = true;
                    currentSpanIndex = (currentSpanIndex + 1) % spans.length;
                    setTimeout(type, delayBetweenSpans);
                }
            }
        }
    }
  
    spans.forEach(span => {
        span.dataset.text = span.textContent;
        span.textContent = '';
    });
  
    type();
  });





// document.addEventListener('DOMContentLoaded', () => {
//   const spans = document.querySelectorAll('#container span:not(.cursor)');
//   let currentSpanIndex = 0;
//   let charIndex = 0;
//   let typing = true;

//   const typingSpeed = 100; // milliseconds per character
//   const delayBetweenWords = 3000; // milliseconds
//   const delayBeforeDeleting = 30; // milliseconds before deleting all text
//   const delayBetweenSpans = 100; // milliseconds between typing different spans

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
//                   // Move to the next span after the word is fully typed
//                   charIndex = 0;
//                   currentSpanIndex++;
//                   if (currentSpanIndex < spans.length) {
//                       setTimeout(type, delayBetweenSpans);
//                   } else {
//                       // Reset to start deleting all text after a delay
//                       currentSpanIndex = 0;
//                       setTimeout(deleteAllText, delayBeforeDeleting);
//                   }
//               }
//           }
//       }
//   }

//   function deleteAllText() {
//       spans.forEach(span => {
//           span.textContent = '';
//           span.style.visibility = 'hidden';
//       });
//       setTimeout(type, delayBetweenWords);
//   }

//   // Initialize dataset.text with original span text and clear spans
//   spans.forEach(span => {
//       span.dataset.text = span.textContent;
//       span.textContent = '';
//   });

//   type();
// });
