const mainWebsiteURL = "https://sims-7tap.onrender.com/";
const scienceFacts = [
    "The Earth is not perfectly round, but an oblate spheroid.",
    "The human brain is the most energy-consuming organ, using about 20% of the body's energy.",
    "There are more stars in the universe than grains of sand on all the beaches on Earth.",
    "A teaspoon of a neutron star would weigh about 6 billion tons.",
    "The Great Barrier Reef is the world's largest living structure, stretching over 2,300 kilometers.",
    "Honey never spoils. Archaeologists have found pots of honey in ancient Egyptian tombs that are over 3,000 years old and still perfectly edible.",
    "Bananas are radioactive! They contain a small amount of the isotope potassium-40.",
    "Water can exist in three states at once. This is known as the triple boil, and it occurs at a specific temperature and pressure.",
    "The human body contains about 37 trillion cells.",
    "The average person walks the equivalent of three times around the world in a lifetime.",
    "The DNA in all humans is 99.9% identical. It's the 0.1% that makes us unique.",
    "If you could fold a piece of paper in half 42 times, it would be thick enough to reach the moon.",
    "There are more possible iterations of a game of chess than there are atoms in the observable universe.",
    "The coldest temperature ever recorded on Earth was -89.2°C (-128.6°F) in Antarctica.",
    "The Earth's magnetic field flips, on average, every 200,000 to 300,000 years.",
    "The human eye can distinguish about 10 million different colors.",
    "Light from the Sun takes about 8 minutes and 20 seconds to reach Earth.",
    "The universe is estimated to be about 13.8 billion years old.",
    "There is a species of jellyfish, Turritopsis dohrnii, that is considered biologically immortal.",
    "The largest volcano in our solar system is Olympus Mons on Mars, which is nearly three times the height of Mount Everest."
];

const tipElement = document.getElementById("tip");
let currentFactIndex = 0;

function showNextFact() {
    tipElement.textContent = scienceFacts[currentFactIndex];
    currentFactIndex = (currentFactIndex + 1) % scienceFacts.length; // Cycle through the facts
}

function redirect() {
    window.location.href = mainWebsiteURL;
}

// Check if the main website is loaded
function checkWebsiteStatus() {
    fetch(mainWebsiteURL, { mode: 'no-cors' })
        .then(response => {
            redirect();
        })
        .catch(error => {
            console.error("Website not yet loaded:", error);
            setTimeout(checkWebsiteStatus, 3000);
        });
}

// Show the first fact immediately, then change it every 5 seconds
showNextFact();
setInterval(showNextFact, 5000);

// Start checking website status
checkWebsiteStatus();