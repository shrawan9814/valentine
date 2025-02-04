let noClickCount = 0;
const messages = [
    "Think again! 😏",
    "Are you sure? 🥺",
    "Please say yes! 🥰",
    "Don't break my heart! 💔",
    "One last chance! 😢"
];

document.getElementById("noBtn").addEventListener("click", function() {
    if (noClickCount < messages.length) {
        document.getElementById("message").innerText = messages[noClickCount];
    } else {
        moveNoButton();
    }
    noClickCount++;
});

function moveNoButton() {
    const noBtn = document.getElementById("noBtn");
    const maxX = window.innerWidth - noBtn.clientWidth - 20;
    const maxY = window.innerHeight - noBtn.clientHeight - 20;

    noBtn.style.position = "absolute";
    noBtn.style.left = Math.random() * maxX + "px";
    noBtn.style.top = Math.random() * maxY + "px";
}

document.getElementById("yesBtn").addEventListener("click", function() {
    document.getElementById("yesSound").play();
    document.querySelector(".container").innerHTML = "<h1>Yay! 🎉 See you on Valentine's Day! 💖</h1>";
});