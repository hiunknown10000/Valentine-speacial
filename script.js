// YES button redirect
document.getElementById("yesBtn")?.addEventListener("click", function() {
    document.body.innerHTML += "<div class='fade'>💖</div>";
    setTimeout(() => {
        window.location.href = "memories.html";
    }, 800);
});

// NO button escaping effect
const noBtn = document.getElementById("noBtn");

if (noBtn) {
    noBtn.addEventListener("mouseover", function() {
        const x = Math.random() * (window.innerWidth - noBtn.offsetWidth);
        const y = Math.random() * (window.innerHeight - noBtn.offsetHeight);
        noBtn.style.left = `${x}px`;
        noBtn.style.top = `${y}px`;
    });
}

// Music control
const music = document.getElementById("bgMusic");
const musicBtn = document.getElementById("musicBtn");

if (musicBtn) {
    musicBtn.addEventListener("click", function() {
        if (music.paused) {
            music.play();
            musicBtn.innerText = "⏸(✿◕‿◕✿)";
        } else {
            music.pause();
            musicBtn.innerText = "|>";
        }
    });
}
