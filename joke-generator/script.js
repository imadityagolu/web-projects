let bodyTag = document.querySelector("body");
let circle = document.querySelector("#circle");
let container = document.querySelector("#toggle-container");
let toggled = false;

const icons = document.querySelectorAll(".icon");
let rotate = 0;

container.addEventListener("click", () => {
    if (!toggled) {
        bodyTag.classList.add("bg-color-black"); // Apply to body (fix)
        circle.classList.add("dark-mode");
        toggled = true;

        setTimeout(() => {
            rotate += 360;
            icons[1].style.transition = "transform 0.5s ease";
            icons[1].style.transform = `rotate(${rotate}deg)`;
        }, 200);

    } else {
        bodyTag.classList.remove("bg-color-black"); // Remove from body (fix)
        circle.classList.remove("dark-mode");
        toggled = false;

        setTimeout(() => {
            rotate += 360;
            icons[0].style.transition = "transform 0.5s ease";
            icons[0].style.transform = `rotate(${rotate}deg)`;
        }, 200);
    }
});


// Joke Fetching Functionality
const button = document.querySelector("#btn");
const jokeText = document.querySelector("#joke");
const apiKey = "MIzvTpRwMhbduFsdM1Zxgw==bjt33V93O8oWTwCr";
const apiURL = "https://api.api-ninjas.com/v1/dadjokes/";

const options = {
    method: "GET",
    headers: {
        "X-Api-Key": apiKey,
    },
};

async function fetchDadJoke() {
    try {
        // Show Laughing Animation While Fetching
        jokeText.innerHTML = "Updating...";
        jokeText.classList.add("bouncing", "blinking");

        // Disable Button While Loading
        button.innerText = "Loading...";
        button.disabled = true;

        // Fetch Joke from API
        const response = await fetch(apiURL, options);

        // Handle API Errors
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();
        console.log(data);

        // Remove Animations and Display the Joke
        setTimeout(() => {
            jokeText.classList.remove("bouncing", "blinking"); // Remove loading animations
            jokeText.textContent = data[0].joke || "No joke found!"; // Handle empty response

            // Re-enable Button After Loading
            button.innerText = "Tell me a joke";
            button.disabled = false;
        }, 2000);

    } catch (error) {
        console.error("Failed to fetch joke:", error);

        // Show Error Animation with Sad Emoji
        jokeText.classList.remove("bouncing", "blinking"); // Remove any ongoing animations
        jokeText.innerHTML = "could not find a joke.";
        jokeText.classList.add("shaking");

        // Remove shaking effect and re-enable button after 2 seconds
        setTimeout(() => {
            jokeText.classList.remove("shaking");
            button.innerText = "Tell me a joke";
            button.disabled = false;
        }, 2000);
    }
}

// Attach function to button click
button.addEventListener("click", fetchDadJoke);
