let startButton = document.getElementById("startButton");
let firstDiv = document.getElementById("firstDiv");
let insideDiv = document.getElementById("insideDiv");

window.addEventListener("load", () => {
    document.getElementById("dateTime").innerHTML = Date();
    console.log("2000 timer should start after this");
    setInterval(makeBubble, 2000);
});

document.addEventListener("click", () => {
    const bgm = document.getElementById("BGM");
    bgm.play();
});

startButton.addEventListener("click", () => {
    firstDiv.classList.add("hidden");
    insideDiv.classList.add("visible");

    firstDiv.style.zIndex = 0;
    insideDiv.style.zIndex = 1;
})

function makeBubble() {
    let temporaryX = Math.floor(Math.random() * 1100);
    let bubleNew = document.createElement("img");

    bubleNew.setAttribute("src", "assets/sud.png");

    bubleNew.style.position = "absolute";
    bubleNew.style.zIndex = -99;
    bubleNew.style.height = "50px";
    bubleNew.style.width = "50px";
    bubleNew.style.opacity = 0.25;
    bubleNew.style.left = temporaryX;
    bubleNew.style.top = "94%";

    document.body.appendChild(bubleNew);

    bubleNew.style.top = "-6%";

    setTimeout(bubleNew.remove(), 11000);
}

/* 1100px 94% */
/* 0px -6% */