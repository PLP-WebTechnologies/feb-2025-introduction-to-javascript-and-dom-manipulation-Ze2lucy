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

const addRemoveBtn = document.getElementById("add-remove-btn");
const container = document.getElementById("container");

addRemoveBtn.addEventListener("click", () => {
  const newElement = document.createElement("div");
  newElement.textContent = "This is a dynamically added element.";
  newElement.style.padding = "10px";
  newElement.style.backgroundColor = "#f1f1f1";
  newElement.style.marginTop = "10px";

  if (container.children.length === 0) {
    container.appendChild(newElement);
  } else {
    container.removeChild(container.firstChild);
  }
});
