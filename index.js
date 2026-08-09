window.addEventListener("load", () => {
    document.getElementById("dateTime").innerHTML = Date();
});

document.addEventListener("click", () => {
    const bgm = document.getElementById("BGM");
    bgm.play();
}, {once: true});