const changeTextBtn = document.getElementById("change-text-btn");
const dynamicText = document.getElementById("dynamic-text");

changeTextBtn.addEventListener("click", () => {
  dynamicText.textContent = "The text has been changed!";
});

const changeStyleBtn = document.getElementById("change-style-btn");
const styledText = document.getElementById("styled-text");

changeStyleBtn.addEventListener("click", () => {
  styledText.style.color = "blue";
  styledText.style.fontSize = "20px";
  styledText.style.fontWeight = "bold";
});
