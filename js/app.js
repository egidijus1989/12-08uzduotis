function createInput() {
  let myInput = document.createElement("input");
  myInput.setAttribute("type", "text");
  myInput.setAttribute("placeholder", "Pleace write text");
  myInput.setAttribute("value", "React");
  myInput.classList.add("myInput");
  let myForm = document.createElement("form");
  let myBody = document.querySelector("body");
  myForm.appendChild(myInput);
  myBody.appendChild(myForm);
}
createInput();

let ourInput = document.querySelector(".myInput");

ourInput.addEventListener("change", (e) => {
  let myBody = document.querySelector("body");
  let myUl = document.createElement("ul");
  let myLi = document.createElement("li");
  let inputString = e.target.value;
  let firstArray = inputString.split("");
  let outputString;
  if (firstArray.length < 3) {
    outputString = firstArray.join("").toUpperCase();
  } else {
    reducedArray = firstArray.slice(0, 3);
    restOfArray = firstArray.slice(3, firstArray.length);
    outputString = reducedArray.join("").toLowerCase() + restOfArray.join("");
  }
  myLi.innerHTML = "";
  myLi.textContent = `Įvestis: ${inputString}, Rezultatas: ${outputString}`;
  myUl.appendChild(myLi);
  myBody.appendChild(myUl);
});
