// DOM Elements
const signupPage = document.getElementById('signup-page');
const homePage = document.getElementById('home-page');
const signupForm = document.getElementById('signup-form');
const lacaseraModal = document.getElementById('lacasera-modal');
const smileModal = document.getElementById('smile-modal');
const jokeText = document.getElementById('joke-text');

// Feature cards
const insultCard = document.getElementById('insult');
const lacaseraCard = document.getElementById('lacasera');
const caprisonCard = document.getElementById('caprison');
const singCard = document.getElementById('sing');
const smileCard = document.getElementById('smile');

// Buttons
const closeBtns = document.querySelectorAll('.close-btn');
const moreBtn = document.querySelector('.more-btn');

// Jokes to make Bella smile
const jokes = [
    "Why don't scientists trust atoms? Because they make up everything!",
    "What did the ocean say to the beach? Nothing, it just waved!",
    "Why don't eggs tell jokes? They'd crack each other up!",
    "I told my wife she was drawing her eyebrows too high. She looked surprised.",
    "What's the best thing about Switzerland? I don't know, but the flag is a big plus!",
    "Did you hear about the mathematician who's afraid of negative numbers? He'll stop at nothing to avoid them!",
    "Why did the scarecrow win an award? Because he was outstanding in his field!",
    "I'm reading a book on anti-gravity. It's impossible to put down!",
    "What's orange and sounds like a parrot? A carrot!",
    "Why couldn't the bicycle stand up by itself? It was two tired!",
    "I used to play piano by ear, but now I use my hands.",
    "How do you organize a space party? You planet!",
    "Why did the coffee file a police report? It got mugged!",
    "What do you call a fake noodle? An impasta!",
    "How does a penguin build its house? Igloos it together!"
];

// Show a random joke
function showRandomJoke() {
    const randomIndex = Math.floor(Math.random() * jokes.length);
    jokeText.textContent = jokes[randomIndex];
}

// Event Listeners
document.addEventListener('DOMContentLoaded', function() {
    // Show signup page initially
    signupPage.classList.add('active');
    
    // Handle form submission
    signupForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Save form data (you could extend this to actually save data)
        const username = document.getElementById('username').value;
        const email = document.getElementById('email').value;
        const phone = document.getElementById('phone').value;
        
        // Simulate form submission with transition effect
        signupPage.classList.remove('active');
        setTimeout(() => {
            homePage.classList.add('active');
            // Display a personalized welcome message
            const welcomeMsg = document.querySelector('.welcome-banner h1');
            welcomeMsg.textContent = `Welcome to Frosh site made by bella, ${username}!`;
        }, 500);
    });
    
    // Feature cards click events
    insultCard.addEventListener('click', function() {
        const insults = [
            "You're so unfunny, your jokes need life support.",
            "I'd explain it to you, but I don't have crayons right now.",
            "You're not the sharpest tool in the shed, but you're certainly a tool.",
            "If I wanted to hear from you, I'd pull the string on your back.",
            "You're like a cloud. When you disappear, it's a beautiful day."
        ];
        const randomInsult = insults[Math.floor(Math.random() * insults.length)];
        alert(`Random Insult: ${randomInsult}`);
    });
    
    lacaseraCard.addEventListener('click', function() {
        lacaseraModal.classList.add('active');
    });
    
    caprisonCard.addEventListener('click', function() {
        const caprisonMessages = [
            "Caprison Challenge: Drink a full Caprison in under 5 seconds!",
            "Caprison Challenge: Can you do a blind taste test of different Caprison flavors?",
            "Caprison Challenge: Stack 3 empty Caprison pouches on your head for 10 seconds!",
            "Caprison Challenge: Create a Caprison fountain with 3 friends!"
        ];
        const randomMessage = caprisonMessages[Math.floor(Math.random() * caprisonMessages.length)];
        alert(randomMessage);
    });
    
    singCard.addEventListener('click', function() {
        const songChallenges = [
            "Sing Challenge: Try singing your favorite song backwards!",
            "Sing Challenge: Perform a duet with yourself by recording one part first!",
            "Sing Challenge: Sing a popular song but replace all the words with 'meow'!",
            "Sing Challenge: Speed singing - how fast can you sing your favorite chorus?"
        ];
        const randomChallenge = songChallenges[Math.floor(Math.random() * songChallenges.length)];
        alert(randomChallenge);
    });
    
    smileCard.addEventListener('click', function() {
        showRandomJoke();
        smileModal.classList.add('active');
    });
    
    // Close modals
    closeBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            lacaseraModal.classList.remove('active');
            smileModal.classList.remove('active');
        });
    });
    
    // Show another joke
    moreBtn.addEventListener('click', showRandomJoke);
});

// Add visual effects
document.addEventListener('mousemove', function(e) {
    const x = e.clientX / window.innerWidth;
    const y = e.clientY / window.innerHeight;
    
    document.body.style.background = `linear-gradient(135deg, 
        rgba(74, 0, 128, ${0.8 + x * 0.2}), 
        rgba(26, 26, 46, ${0.9 - y * 0.2}))`;
});

// Add particle background effect
function createParticles() {
    const particles = document.createElement('div');
    particles.className = 'particles';
    document.body.appendChild(particles);
    
    for (let i = 0; i < 50; i++) {
        const particle = document.createElement('span');
        const size = Math.random() * 5 + 2;
        const posX = Math.random() * 100;
        const posY = Math.random() * 100;
        const duration = Math.random() * 20 + 10;
        const delay = Math.random() * 5;
        
        particle.style.width = `${size}px`;
        particle.style.height = `${size}px`;
        particle.style.left = `${posX}%`;
        particle.style.top = `${posY}%`;
        particle.style.backgroundColor = Math.random() > 0.5 ? '#9D4EDD' : '#FFD700';
        particle.style.opacity = Math.random() * 0.5 + 0.1;
        particle.style.animation = `float ${duration}s linear ${delay}s infinite`;
        
        particles.appendChild(particle);
    }
}

// Create some visual shine effect on the logo
function addLogoEffect() {
    const logo = document.querySelector('.logo');
    
    if (logo) {
        const shine = document.createElement('div');
        shine.className = 'logo-shine';
        logo.parentElement.appendChild(shine);
    }
}

// Add keyframe animation for particles
const style = document.createElement('style');
style.textContent = `
    @keyframes float {
        0% {
            transform: translateY(0) rotate(0);
            opacity: 0.7;
        }
        50% {
            transform: translateY(-100px) rotate(180deg);
            opacity: 0.3;
        }
        100% {
            transform: translateY(-200px) rotate(360deg);
            opacity: 0;
        }
    }
    
    .particles {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        pointer-events: none;
        z-index: -1;
    }
    
    .particles span {
        position: absolute;
        border-radius: 50%;
        pointer-events: none;
    }
    
    .logo-shine {
        position: absolute;
        top: 0;
        left: -100%;
        width: 50%;
        height: 100%;
        background: linear-gradient(
            to right,
            rgba(255, 255, 255, 0) 0%,
            rgba(255, 255, 255, 0.3) 50%,
            rgba(255, 255, 255, 0) 100%
        );
        transform: skewX(-25deg);
        animation: shine 3s infinite;
    }
    
    @keyframes shine {
        0% { left: -100%; }
        100% { left: 200%; }
    }
`;

document.head.appendChild(style);

// Initialize effects
window.addEventListener('load', function() {
    createParticles();
    addLogoEffect();
});