document.addEventListener('DOMContentLoaded', function() {
  const textElement = document.querySelector('.typing-text');
  const cursorElement = document.querySelector('.cursor');
  
  // Text to be typed sequentially
  const textToType = [
    "Hello, I'm a Developer.",
    "Welcome to my Portfolio.",
    "Check out my projects!"
  ];
  
  let textIndex = 0;
  let charIndex = 0;
  let typingSpeed = 100;
  
  function typeText() {
    const currentText = textToType[textIndex];
    
    // Add a character
    textElement.textContent = currentText.substring(0, charIndex + 1);
    charIndex++;
    
    // Position the cursor after the text
    cursorElement.style.left = textElement.offsetWidth + 'px';
    
    // If completed typing the current text
    if (charIndex === currentText.length) {
      // Pause before moving to the next text
      setTimeout(() => {
        // Check if we've completed all texts
        if (textIndex === textToType.length - 1) {
          // Last text has been typed, navigate to home.html after a pause
          setTimeout(() => {
            window.location.href = 'home.html';
          }, 1500); // Pause 1.5 seconds before navigation
          return;
        }
        
        // Move to the next text
        textIndex++;
        charIndex = 0;
        textElement.textContent = '';
        typeText();
      }, 1500); // Pause 1.5 seconds between texts
    } else {
      // Continue typing the current text
      setTimeout(typeText, typingSpeed);
    }
  }
  
  // Start the typing animation
  setTimeout(typeText, 500);
});
