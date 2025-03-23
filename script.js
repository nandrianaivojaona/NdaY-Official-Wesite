// References
const heroSection = document.getElementById("hero-section");
const dynamicBg = document.getElementById("dynamic-bg");
const menuSection = document.getElementById("menu-section");

// Hover to Switch Sections
heroSection.addEventListener("mouseover", () => {
  heroSection.style.display = "none"; // Hide the initial dynamic background
  dynamicBg.style.display = "none";  // Hide the dynamic elements
  menuSection.classList.remove("hidden"); // Show the menu layout
});
