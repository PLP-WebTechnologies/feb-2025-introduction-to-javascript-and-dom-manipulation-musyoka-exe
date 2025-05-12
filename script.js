// Wait for the DOM to load before running scripts
document.addEventListener("DOMContentLoaded", function () {

  // Task 1: Change text content dynamically
  const changeTextBtn = document.getElementById("change-text-btn");
  const demoText = document.getElementById("demo-text");

  changeTextBtn.addEventListener("click", function () {
    demoText.textContent = "The text has been changed!";
  });

  // Task 2: Modify CSS styles via JavaScript
  const colorPicker = document.getElementById("color-picker");

  colorPicker.addEventListener("input", function (event) {
    document.body.style.backgroundColor = event.target.value;
  });

  // Task 3: Add or remove an element when a button is clicked
  const addElementBtn = document.getElementById("add-element-btn");
  const removeElementBtn = document.getElementById("remove-element-btn");
  const container = document.getElementById("element-container");

  let dynamicElement = null;

  addElementBtn.addEventListener("click", function () {
    if (!dynamicElement) {
      dynamicElement = document.createElement("p");
      dynamicElement.textContent = "This is a dynamically added paragraph.";
      dynamicElement.style.color = "blue";
      container.appendChild(dynamicElement);
    }
  });

  removeElementBtn.addEventListener("click", function () {
    if (dynamicElement && dynamicElement.parentNode) {
      container.removeChild(dynamicElement);
      dynamicElement = null;
    }
  });

});
