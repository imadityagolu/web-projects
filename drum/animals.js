const sounds = document.querySelector("#Sounds");

const assets = {
    c: "cat", 
    S: "snake", 
    L: "Lion", 
    P: "Parrot"
};

Object.keys(assets).forEach((key) => {
    const asset = assets[key];

    const box = document.createElement("div");
    box.classList.add("box");

    const name = document.createElement("h2");

    box.style.backgroundImage = "url(" + asset + ".jpeg)";
    name.innerText = asset.toUpperCase();

    const sound = document.createElement("audio");
    // sound.src = asset + ".mp3";

    sound.setAttribute("src", asset + ".mp3");

    box.addEventListener("click", () => {
        sound.play();
    });

    box.append(name);
    sounds.append(box);
});

document.addEventListener("keydown", function(event) {
    const key = event.key.toLowerCase();
    
    if(assets[key]) {
        const audio = new Audio(assets[key] + ".mp3");
        audio.play();
    }
});