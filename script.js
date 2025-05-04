const changeTextBtn = document.getElementById("change-text-btn");
const dynamicText = document.getElementById("dynamic-text");

changeTextBtn.addEventListener("click", () => {
  dynamicText.textContent = "The text has been changed!";
});
