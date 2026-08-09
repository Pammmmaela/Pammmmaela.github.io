let startButton = document.getElementById("startButton");
let firstDiv = document.getElementById("firstDiv");
let insideDiv = document.getElementById("insideDiv");

window.addEventListener("load", () => {
    document.getElementById("dateTime").innerHTML = Date();
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