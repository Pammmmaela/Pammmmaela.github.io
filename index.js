let startButton = document.getElementById("startButton");
let firstDiv = document.getElementById("firstDiv");
let insideDiv = document.getElementById("insideDiv");
let bubbleImg = document.getElementById("buble");

window.addEventListener("load", () => {
    document.getElementById("dateTime").innerHTML = Date();

    bubbleImg.style.top = "-6%";
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

// constant for loop in background
// randomize x
// store in let tempoX var
// bubleNew = createElement("img")
// bubleNew.style.top = 94%
// bubleNew.style.left = tempoX
// TIYAKA MGA IBA PANG PROPERTIES LIEK OPACITY 
// transition top 94% to -6% ease

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
}

/* 1100px 94% */
/* 0px -6% */