const words = ["Software", "Developer", "Programmer", "Developer"];
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


function showSection(section) {
    // Hide all sections
    document.querySelectorAll('section').forEach(function (sec) {
        sec.style.display = 'none';
    });
    
    // Show the selected section
    document.querySelector('.' + section).style.display = 'flex';

    document.querySelectorAll('nav a').forEach(link => {
        link.classList.remove('active');
    });

    const activeLink = document.querySelector(`nav a[onclick*="${sectionId}"]`);
    if (activeLink) {
        activeLink.classList.add('active');
    }
}

// Initialize the view by showing only the home section
showSection('home');

// Show specific section of About (Skills, Experience, Education)
function showAboutSection(aboutSection) {
    // Hide all About subsections
    document.querySelectorAll('.about-content').forEach(function (about) {
        about.style.display = 'none';
    });

    // Show the selected About subsection
    document.querySelector('.' + aboutSection).style.display = 'block';
}
