const mainWebsiteURL = "https://sims-7tap.onrender.com/";
const scienceFacts = [
    "Octopuses have three hearts.",
    "A day on Venus is longer than a year on Venus.",
    "The Eiffel Tower can be about 15 cm taller during the summer due to thermal expansion.",
    "There's a planet made of diamond twice the size of Earth.",
    "Some worms will eat themselves if they can't find food.",
    "A small percentage of people have a genetic variation that makes them immune to norovirus.",
    "Koalas have fingerprints that are almost indistinguishable from human fingerprints.",
    "The 'sixth sense' is called proprioception – your awareness of where your body parts are in space.",
    "Pigeons can recognize themselves in a mirror.",
    "Honeybee wings beat about 200 times per second.",
    "Cows have best friends and get stressed when they are separated.",
    "Slugs have four noses.",
    "A group of owls is called a parliament.",
    "The average cloud weighs around a million pounds.",
    "The only mammal capable of true flight is the bat.",
    "Dragonflies have been around for about 300 million years.",
    "Neutron stars are so dense that a teaspoonful would weigh about six billion tons on Earth.",
    "Sharks have been around longer than trees.",
    "There are more trees on Earth than stars in the Milky Way galaxy.",
    "Your skeleton is constantly rebuilding itself – every ten years, you have a brand new skeleton.",
    "The surface of Mars has a gravity that is about 38% of Earth's.",
    "The sound of a whip cracking is actually a sonic boom.",
    "There are more possible iterations of a game of chess than there are atoms in the observable universe.",
    "The average person spends about six months of their life waiting for red lights to turn green.",
    "A cockroach can live for several weeks without its head.",
    "The smell of freshly cut grass is actually a plant distress call.",
    "Hot water freezes faster than cold water under certain conditions, a phenomenon known as the Mpemba effect.",
    "Lightning strikes the Earth approximately 100 times per second.",
    "The total length of all the nerves in the human body is about 75 kilometers (46 miles).",
    "The lifespan of a taste bud is only about 10 days.",
    "Our eyes blink around 20 times a minute.",
    "The average human produces enough saliva in their lifetime to fill two swimming pools.",
    "You can't hum while holding your nose closed.",
    "The population of bacteria in your body outnumbers your body's cells by about 10 to 1.",
    "The Sahara Desert was once a lush, green area.",
    "Mount Everest is taller than the deepest part of the ocean (the Mariana Trench is deeper).",
    "Polar bears have black skin under their white fur.",
    "A starfish doesn't have a brain.",
    "The fingerprints of a koala are so close to humans' that they could taint crime scenes.",
    "It takes about 8 minutes for light from the sun to reach Earth.",
    "One million seconds is about 11.5 days. One billion seconds is about 31.7 years.",
    "The Earth's core is as hot as the surface of the sun.",
    "Human teeth are the only part of the body that cannot heal themselves.",
    "The average person will shed about 40 pounds of skin in their lifetime.",
    "Babies have around 100 more bones than adults.",
    "Your nose can remember 50,000 different scents.",
    "It is impossible for most people to lick their own elbow.",
    "The lifespan of a housefly is about 28 days.",
    "A snail can sleep for three years.",
    "An ostrich's eye is bigger than its brain.",
    "The electric blue color seen in some animals and insects is often structural, not pigment-based.",
    "Some bamboo species can grow up to 91 cm (35 inches) in a single day.",
    "The 'bark' of a zebra is unique to each individual, just like human fingerprints.",
    "Scientists have discovered water on Mars.",
    "The moon is moving away from the Earth at a rate of about 3.8 cm per year.",
    "Jupiter's Great Red Spot is a storm that has been raging for at least 350 years.",
    "Diamonds are formed under intense heat and pressure deep within the Earth.",
    "The average person will spend approximately 2 weeks of their life kissing.",
    "The first known computer bug was an actual moth trapped in a Harvard Mark II computer in 1947.",
    "There is enough DNA in the average person’s body to stretch from the sun to Pluto and back — 17 times.",
    "The surface area of the human lungs is roughly the same size as a tennis court.",
    "Grasshoppers have ears on their bellies.",
    "The strongest muscle in the human body, relative to its size, is the masseter (jaw muscle)."
];

const tipElement = document.getElementById("tip");
const containerElement = document.querySelector(".container");
const loadingIndicator = document.querySelector(".loading-indicator");

function showRandomFact() {
    const randomIndex = Math.floor(Math.random() * scienceFacts.length);
    tipElement.textContent = scienceFacts[randomIndex];
}

function checkWebsiteStatus() {
    loadingIndicator.style.display = "block";

    const statusCheckInterval = setInterval(() => {
        fetch(mainWebsiteURL, { mode: 'no-cors' })
            .then(response => {
                clearInterval(statusCheckInterval);

                // Add the animation class to the container
                containerElement.classList.add("zoom-in-fade-out");

                // Redirect after the animation ends
                setTimeout(() => {
                    window.location.href = mainWebsiteURL;
                }, 800); // Shortened to match animation duration
            })
            .catch(error => {
                console.log("Website not yet loaded. Retrying...");
            });
    }, 2000);
}

// Show a random fact immediately
showRandomFact();
setInterval(showRandomFact, 5000);

checkWebsiteStatus();