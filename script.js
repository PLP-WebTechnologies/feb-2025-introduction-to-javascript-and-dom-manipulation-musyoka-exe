// Wait for DOM to load
document.addEventListener("DOMContentLoaded", function () {

  // 1. Change text content dynamically
  const changeTextBtn = document.getElementById("changeTextBtn");
  const messageDiv = document.getElementById("message");

  changeTextBtn.addEventListener("click", function () {
    messageDiv.textContent = "The text has been updated dynamically!";
    messageDiv.classList.add("highlight");
  });

  // 2. Modify CSS styles via JavaScript
  const colorPicker = document.getElementById("colorPicker");

  colorPicker.addEventListener("input", function (event) {
    document.body.style.backgroundColor = event.target.value;
  });

  // 3. Add or remove an element when a button is clicked
  const addElementBtn = document.getElementById("addElementBtn");
  const removeElementBtn = document.getElementById("removeElementBtn");
  const container = document.getElementById("container");

  let dynamicParagraph = null;

  addElementBtn.addEventListener("click", function () {
    if (!dynamicParagraph) {
      dynamicParagraph = document.createElement("p");
      dynamicParagraph.textContent = "This paragraph was added with JavaScript!";
      dynamicParagraph.style.color = "blue";
      container.appendChild(dynamicParagraph);
    }
  });

  removeElementBtn.addEventListener("click", function () {
    if (dynamicParagraph && dynamicParagraph.parentNode) {
      container.removeChild(dynamicParagraph);
      dynamicParagraph = null;
    }
  });

});
