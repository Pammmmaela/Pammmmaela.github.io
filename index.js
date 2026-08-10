let startButton = document.getElementById("startButton");
let firstDiv = document.getElementById("firstDiv");
let insideDiv = document.getElementById("insideDiv");

const startSFX = document.getElementById("SFX");
const bgm = document.getElementById("BGM");
const hoverpbutton = document.getElementById("hoverPButton");

let makeBubbleEvent;

window.addEventListener("load", () => {
    document.getElementById("dateTime").innerHTML = Date();
});

document.addEventListener("click", () => {
    bgm.play();
});

startButton.addEventListener("click", () => {
    if(!makeBubbleEvent) {
        makeBubbleEvent = setInterval(() => {
            makeBubble();
        }, 1000);
    }

    firstDiv.classList.add("hidden");
    insideDiv.classList.add("visible");

    firstDiv.style.zIndex = 0;
    insideDiv.style.zIndex = 1;

    startSFX.play();

    // let pButtons = document.getElementsByClassName("pButton");

    // pButtons.forEach((element) => {
    //     element.addEventListener("mouseenter", (event) => {
    //         hoverpbutton.play();
    //         console.log("You hovered on me!");
    //     })

    //     element.addEventListener("mouseleave", (event) => {
    //         hoverpbutton.play();
    //         console.log("You unhovered on me!");
    //     })
    // });
})

function makeBubble() {
    let temporaryX = Math.floor(Math.random() * 1100);
    console.log(temporaryX);
    let bubleNew = document.createElement("img");

    bubleNew.setAttribute("src", "assets/sud.png");

    bubleNew.style.position = "absolute";
    bubleNew.style.zIndex = -99;
    bubleNew.style.height = "50px";
    bubleNew.style.width = "50px";
    bubleNew.style.opacity = 0.25;
    bubleNew.style.left = temporaryX + "px";
    bubleNew.style.top = "94%";

    document.body.appendChild(bubleNew);

    requestAnimationFrame(() => {
        bubleNew.style.transition = "left 10s linear, top 10s linear";
        bubleNew.style.top = "-6%";
    });

    setTimeout(() => {
        bubleNew.remove();
    }, 11000);
}

/* 1100px 94% */
/* 0px -6% */