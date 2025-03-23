// References
const heroSection = document.getElementById("hero");
const header = document.getElementById("header");
const exploreButton = document.getElementById("explore");
const verticalMenu = document.getElementById("vertical-menu");
const horizontalMenuItems = document.querySelectorAll(".horizontal-menu li");
const subMenu = document.getElementById("sub-menu");

// Display Header and Horizontal Menu on Button Click
exploreButton.addEventListener("click", () => {
  heroSection.style.display = "none";
  header.classList.remove("hidden");
});

// Show Vertical Menu on Hover
horizontalMenuItems.forEach((item) => {
  item.addEventListener("mouseover", () => {
    const menuType = item.dataset.menu;
    populateVerticalMenu(menuType);
    verticalMenu.classList.remove("hidden");
  });

  // Hide Vertical Menu when leaving the horizontal menu
  item.addEventListener("mouseout", () => {
    verticalMenu.classList.add("hidden");
  });
});

// Display Vertical Menu Permanently on Click
horizontalMenuItems.forEach((item) => {
  item.addEventListener("click", () => {
    const menuType = item.dataset.menu;
    populateVerticalMenu(menuType);
    verticalMenu.classList.remove("hidden");

    // Keep the menu visible for navigation
    verticalMenu.style.display = "block";
  });
});

// Populate Vertical Menu
function populateVerticalMenu(menuType) {
  const subItems = {
    "about-us": ["Our Team", "Our Vision", "Our Mission"],
    "projects": ["Project A", "Project B", "Project C"],
    "locations": ["Location 1", "Location 2", "Location 3"],
    "documents": ["Document 1", "Document 2", "Document 3"],
    "testimonies": ["Testimony 1", "Testimony 2", "Testimony 3"],
    "contact": ["Phone", "Email", "Social Media"]
  };

  subMenu.innerHTML = "";
  subItems[menuType].forEach((item) => {
    const li = document.createElement("li");
    li.textContent = item;
    subMenu.appendChild(li);
  });
}
