let bgm = document.getElementById("BGM");

document.addEventListener("DOMContentLoaded", () => {
    console.log("The HTML is fully loaded and ready!");
    document.getElementById("dateTime").innerHTML = Date();
    playBGM();
});

function playBGM() {
    bgm.play();
}