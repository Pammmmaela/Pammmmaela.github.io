const bgm = document.getElementById("BGM");

let makeBubbleEvent;

window.addEventListener("load", () => {
    if(!makeBubbleEvent) {
        makeBubbleEvent = setInterval(() => {
            makeBubble();
        }, 1000);
    }

    document.getElementById("dateTime").innerHTML = Date();
});

document.addEventListener("click", () => {
    bgm.play();
});

function makeBubble() {
    let temporaryX = Math.floor(Math.random() * 1100);
    console.log(temporaryX);
    let bubleNew = document.createElement("img");

    bubleNew.setAttribute("src", "sud.png");

    bubleNew.style.position = "absolute";
    bubleNew.style.zIndex = -99;
    bubleNew.style.height = "50px";
    bubleNew.style.width = "50px";
    bubleNew.style.opacity = 0.25;
    bubleNew.style.left = temporaryX + "px";
    bubleNew.style.top = "94%";

    document.body.appendChild(bubleNew);

    requestAnimationFrame(() => {
        bubleNew.style.transition = "top 20s linear";
        bubleNew.style.top = "-6%";
    });

    setTimeout(() => {
        bubleNew.remove();
    }, 21000);
}

/* 1100px 94% */
/* 0px -6% */