const words = ["Software", "Developer", "Web", "Developer"];
const typingDelay = 150; // Delay between each letter
const wordDelay = 2000; // Delay between words
let wordIndex = 0;
let letterIndex = 0;

function type() {
    if (letterIndex < words[wordIndex].length) {
        document.getElementById("typedText").textContent += words[wordIndex].charAt(letterIndex);
        letterIndex++;
        setTimeout(type, typingDelay);
    } else {
        setTimeout(deleteText, wordDelay);
    }
}

function deleteText() {
    if (letterIndex > 0) {
        document.getElementById("typedText").textContent = words[wordIndex].substring(0, letterIndex - 1);
        letterIndex--;
        setTimeout(deleteText, typingDelay);
    } else {
        wordIndex = (wordIndex + 1) % words.length; // Move to the next word
        setTimeout(type, typingDelay); // Start typing the next word
    }
}

// Start the typing animation
type();
