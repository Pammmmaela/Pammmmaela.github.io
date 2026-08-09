let startButton = document.getElementById("startButton");
let firstDiv = document.getElementById("firstDiv");
let insideDiv = document.getElementById("insideDiv");

window.addEventListener("load", () => {
    document.getElementById("dateTime").innerHTML = Date();
});

document.addEventListener("click", () => {
    const bgm = document.getElementById("BGM");
    bgm.play();
}, {once: true});

startButton.addEventListener("click", () => {
    firstDiv.classList.add("hidden");
    insideDiv.classList.add("visible");

    firstDiv.style.zIndex = 0;
    insideDiv.style.zIndex = 1;
})