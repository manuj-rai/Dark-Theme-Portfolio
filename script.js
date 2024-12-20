const words = ["Software", "Developer", "Programmer", "Developer"];
const typingDelay = 150; // Delay between each letter
const wordDelay = 150; // Delay between words
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
    const selectedSection = document.querySelector('.' + section);
    if (selectedSection) {
        selectedSection.style.display = 'flex';
    }

    // Remove 'active' class from all links
    document.querySelectorAll('nav a').forEach(link => {
        link.classList.remove('active');
    });

    // Add 'active' class to the correct link
    const activeLink = document.querySelector(`nav a[onclick*="${section}"]`);
    if (activeLink) {
        activeLink.classList.add('active');
    }

    // Save the active section to localStorage
    localStorage.setItem('activeSection', section);
}

// On page load, check if there's an active section in localStorage
window.addEventListener('DOMContentLoaded', function () {
    const activeSection = localStorage.getItem('activeSection');
    
    if (activeSection) {
        // If there's a saved active section in localStorage, show it
        showSection(activeSection);
    } else {
        // Default to the first section if no active section is found
        showSection('section1'); // Ensure 'section1' is the class of your first section
    }
});


// script.js
document.addEventListener('DOMContentLoaded', function () {
    // Get all the tab buttons and panels
    const tabs = document.querySelectorAll('.tab-btn');
    const panels = document.querySelectorAll('.tab-panel');

    // Add click event listener to each tab button
    tabs.forEach(tab => {
        tab.addEventListener('click', function () {
            // Remove 'active' class from all tabs and panels
            tabs.forEach(t => t.classList.remove('active'));
            panels.forEach(panel => panel.classList.remove('active'));

            // Add 'active' class to the clicked tab and the corresponding panel
            tab.classList.add('active');
            const tabContent = document.getElementById(tab.getAttribute('data-tab'));
            tabContent.classList.add('active');
        });
    });

    // Set the first tab (Skills) as active by default, if not already set in HTML
    const defaultTab = document.querySelector('.tab-btn[data-tab="skills"]');
    if (defaultTab && !document.getElementById('skills').classList.contains('active')) {
        defaultTab.classList.add('active');
        const defaultPanel = document.getElementById(defaultTab.getAttribute('data-tab'));
        if (defaultPanel) {
            defaultPanel.classList.add('active');
        }
    }
});


// function to recieve email from contact section
(function() {
            emailjs.init("YLgMP-bH8XBeKf4xe"); // Replace with your EmailJS public key
        })();

        document.getElementById('contactForm').addEventListener('submit', function(event) {
            event.preventDefault(); // Prevent the form from submitting the default way

            emailjs.send("service_d2do4oo", "template_w9xflfn", {
                name: document.getElementById('name').value,
                email: document.getElementById('email').value,
                message: document.getElementById('message').value
            })
            .then(function(response) {
                document.getElementById('responseMessage').innerText = 'Message sent successfully!';
                console.log('SUCCESS!', response.status, response.text);
            }, function(error) {
                document.getElementById('responseMessage').innerText = 'Error sending message.';
                console.log('FAILED...', error);
            });
        });

