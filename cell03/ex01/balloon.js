// Get the balloon element
const balloon = document.getElementById("balloon");

// Initial state for balloon size and color
let size = 200;
let colorOrder = ["red", "green", "blue"];
let colorIndex = 0;

// Function to handle balloon click
balloon.addEventListener("click", () => {
  // Increase the size by 10px
  size += 10;

  // Change color in order
  colorIndex = (colorIndex + 1) % colorOrder.length;
  balloon.style.backgroundColor = colorOrder[colorIndex];

  // Check if the balloon size exceeds 420px and "explode"
  if (size > 420) {
    size = 200; // Reset size to 200px
    colorIndex = 0; // Reset color to red
    balloon.style.backgroundColor = colorOrder[colorIndex];
  }

  // Apply the new size to the balloon
  balloon.style.width = `${size}px`;
  balloon.style.height = `${size}px`;
});

// Function to handle mouse enter and leave events
balloon.addEventListener("mouseenter", () => {
  // Do nothing on mouse enter
});

balloon.addEventListener("mouseleave", () => {
  // Decrease the size by 5px, but don't go below 200px
  if (size > 200) {
    size -= 5;
  }

  // Change color in reverse order
  colorIndex = (colorIndex - 1 + colorOrder.length) % colorOrder.length;
  balloon.style.backgroundColor = colorOrder[colorIndex];

  // Apply the new size to the balloon
  balloon.style.width = `${size}px`;
  balloon.style.height = `${size}px`;
});