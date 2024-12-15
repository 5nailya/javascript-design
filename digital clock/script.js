function ShowTime() {
    const date = new Date();
    let h = date.getHours();
    let m = date.getMinutes();
    let s = date.getSeconds();
    let session = "AM";

    if (h == 0) {
        h = 12;
    }
    if (h > 12) {
        h = h - 12;
        session = "PM";
    }

    h = h < 10 ? "0" + h : h;
    m = m < 10 ? "0" + m : m;
    s = s < 10 ? "0" + s : s;

    const time = `${h}:${m}:${s} ${session}`;
    document.getElementById("MyclockDisplay").innerText = time;

    setTimeout(ShowTime, 1000);
}

function toggleMode() {
    const body = document.body;
    const clock = document.getElementById("MyclockDisplay");
    const toggleBtn = document.getElementById("toggleMode");

    body.classList.toggle("dark-mode");
    body.classList.toggle("light-mode");
    clock.classList.toggle("dark-mode");

    const isDarkMode = body.classList.contains("dark-mode");
    toggleBtn.textContent = isDarkMode ? "Switch to Light Mode" : "Switch to Dark Mode";
    toggleBtn.classList.toggle("btn-outline-light", isDarkMode);
    toggleBtn.classList.toggle("btn-outline-dark", !isDarkMode);

    localStorage.setItem("theme", isDarkMode ? "dark" : "light");
    localStorage.setItem("siteName", "Digital Clock");
}


document.getElementById("MyclockDisplay").addEventListener("click", () => {
    const clock = document.getElementById("MyclockDisplay");
    clock.classList.toggle("no-pulse");
});

document.getElementById("toggleMode").addEventListener("click", toggleMode);

ShowTime();
