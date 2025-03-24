// References
const heroSection = document.getElementById("hero-section");
const dynamicBg = document.getElementById("dynamic-bg");
const menuSection = document.getElementById("menu-section");
const projectsMenu = document.getElementById("projects");
const projectsSection = document.getElementById("projects-section");

// Ensure Animations Start Immediately
window.onload = () => {
  // Make the dynamic elements visible
  dynamicBg.style.opacity = 1;
  dynamicBg.style.visibility = "visible";

  // Hide menus and projects section initially
  menuSection.classList.remove("active");
  projectsSection.style.display = "none";
};

// Show Horizontal Menus on Hovering Hero Section
heroSection.addEventListener("mouseover", () => {
  dynamicBg.style.opacity = 0; // Fade out dynamic background
  dynamicBg.style.visibility = "hidden"; // Hide dynamic elements
  menuSection.classList.add("active"); // Show horizontal menus
});

// Hide Horizontal Menus and Return to Hero Section on Hover Off
menuSection.addEventListener("mouseleave", () => {
  menuSection.classList.remove("active"); // Hide menus
  dynamicBg.style.opacity = 1; // Restore dynamic background
  dynamicBg.style.visibility = "visible"; // Show dynamic elements
});

// Show Projects Section on Menu Click
projectsMenu.addEventListener("click", () => {
  projectsSection.style.display = "block"; // Show projects section
});

// Hide Projects Section on Mouse Leave (Optional)
projectsSection.addEventListener("mouseleave", () => {
  projectsSection.style.display = "none"; // Hide projects section
});
