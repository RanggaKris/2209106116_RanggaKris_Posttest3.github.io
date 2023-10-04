// Ini untuk button
const themeToggle = document.getElementById("aa-button");
const body = document.body;

// Ini untuk cek tema dari localStorage 
const currentTheme = localStorage.getItem("theme");

// Ini untuk set tema pas awal
if (currentTheme) {
    body.classList.add(currentTheme);
}

// event listener untuk mengganti tema
themeToggle.addEventListener("click", () => {
    if (body.classList.contains("dark-mode")) {
        body.classList.remove("dark-mode");
        localStorage.setItem("theme", "light-mode");
        // Ini untuk memanipulasi DOM pada dark mode
        body.style.fontSize = "16px";
        body.style.margin = "20px";
        // Ini untuk menampilkan popup box
        alert("Anda mengganti ke light mode.");
    } else {
        body.classList.add("dark-mode");
        localStorage.setItem("theme", "dark-mode");
        // Ini untuk memanipulasi DOM
        body.style.fontSize = "18px";
        body.style.margin = "10px";
        // Ini untuk menampilkan popup box
        alert("Anda mengganti ke dark mode.");
    }
});
