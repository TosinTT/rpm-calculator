const N = document.querySelector("#N");
const cpt = document.querySelector("#cpt");
const rpm = document.querySelector("#rpm");
const answer = document.querySelector(".answer");
const button = document.querySelector(".calculate");
const input = document.querySelectorAll("input");

function handleInputChange() {
  const nInt = N.value;
  const cptInt = cpt.value;
  const rpmInt = rpm.value;
  button.addEventListener("click", function () {
    answer.innerHTML = Math.round(nInt * cptInt * rpmInt);
  });
}
function resetInputValue() {
  N.value = NaN;
  rpm.value = NaN;
  cpt.value = NaN;
}

cpt.addEventListener("input", handleInputChange);
rpm.addEventListener("input", handleInputChange);
N.addEventListener("input", handleInputChange);

window.onload = resetInputValue;
