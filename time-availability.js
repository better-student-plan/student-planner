function addAnotherForm() {
  console.log("should add");
  const tsDiv = document.getElementById("time-selector");
  const clone = tsDiv.cloneNode(true);

  const contDiv = document.getElementById("times-container");
  contDiv.appendChild(clone);
}

function setupListeners() {
  const createButton = document.getElementById("add-time-entry");
  createButton.addEventListener("click", addAnotherForm);
}

setupListeners();
