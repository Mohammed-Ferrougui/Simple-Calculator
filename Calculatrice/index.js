const allbuttons = document.querySelectorAll("button");

for (let i = 0; i < allbuttons.length; i++) {
  allbuttons[i].addEventListener("click", (e) => {
    const buttonValue = e.target.textContent;
    if (buttonValue === "C") {
      clearResult();
    } else if (buttonValue === "=") {
      calculateResult();
    } else {
      appendValue(buttonValue);
    }
  });
}

function clearResult() {
  const resultInput = document.getElementById("result");
  resultInput.value = "";
}

function calculateResult() {
  const resultInput = document.getElementById("result");
  resultInput.value = eval(resultInput.value);
}

function appendValue(buttonValue) {
  const resultInput = document.getElementById("result");
  resultInput.value += buttonValue;
}
