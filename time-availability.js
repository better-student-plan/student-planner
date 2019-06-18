function fixNames(htmlstr) {
  cnt += 1;
  // console.log(node.children[0].children);
  console.log(htmlstr);
  let oldstr = "dayoftheweek1";
  let newstr = "dayoftheweek" + cnt;
  let nodehtml = htmlstr.replace(oldstr, newstr);

  oldstr = "startTime1";
  newstr = "startTime" + cnt;
  nodehtml = nodehtml.replace(oldstr, newstr);

  oldstr = "endTime1";
  newstr = "endTime" + cnt;
  nodehtml = nodehtml.replace(oldstr, newstr);

  const node = document.createElement("div");
  node.innerHTML = nodehtml.trim();

  node.id = "time-selector";
  node.className = "form-group form-row";
  return node;
}

function addAnotherForm() {
  console.log("should add");
  const tsDiv = document.getElementById("time-selector");
  // let clone = tsDiv.cloneNode(true);
  let clonehtml = tsDiv.innerHTML;
  // clone = fixNames(clone);
  const clone = fixNames(clonehtml);

  const contDiv = document.getElementById("times-container");
  contDiv.appendChild(clone);
}

function setupListeners() {
  const createButton = document.getElementById("add-time-entry");
  createButton.addEventListener("click", addAnotherForm);
}

var cnt = 1;
setupListeners();
