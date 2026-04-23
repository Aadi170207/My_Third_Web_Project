let images = [
    "https://picsum.photos/400/250?1",
    "https://picsum.photos/400/250?2",
    "https://picsum.photos/400/250?3"
];

let index = 0;
let interval;

function showImage() {
    document.getElementById("carouselImage").src = images[index];
}

function nextImage() {
    index = (index + 1) % images.length;
    showImage();
    resetAutoSlide();
}

function prevImage() {
    index = (index - 1 + images.length) % images.length;
    showImage();
    resetAutoSlide();
}

function startAutoSlide() {
    interval = setInterval(() => {
        nextImage();
    }, 3000); 
}


function resetAutoSlide() {
    clearInterval(interval);
    startAutoSlide();
}

startAutoSlide();

document.addEventListener("DOMContentLoaded", () => {
    const jokeBtn = document.getElementById("jokeBtn");
    const jokeText = document.getElementById("jokeText");

    jokeBtn.addEventListener("click", () => {
        fetch("https://official-joke-api.appspot.com/random_joke")
            .then(response => response.json())
            .then(data => {
                jokeText.innerText = `${data.setup} 😂 ${data.punchline}`;
            })
            .catch(() => {
                jokeText.innerText = "Failed to load joke 😢";
            });
    });
});