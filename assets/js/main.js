// Page JavaScript here

// --------------------------------
// Getting the ids of the page
// --------------------------------

let container = document.getElementById("container");
let box = document.getElementById("box");
let input = document.getElementById("input");
let hiddenText = document.getElementById("hiddenText");

// --------------------------------
// Getting the info weather a key is pressed
// --------------------------------

const track = () => {
  let inputValue = document.getElementById("input").value;
  if (inputValue == "") {
    hiddenText.innerText = "";
    return;
  }
  inputValue = Number(inputValue);

  // --------------------------------
  // Checking for zero
  // --------------------------------
  if (inputValue < 0) {
    hiddenText.innerText = "Please enter a positive value";
  }

  // --------------------------------
  // Checking for even no
  // --------------------------------
  else if (inputValue % 2 == 0) {
    let D = Number(inputValue + Number(2));
    hiddenText.classList.add("success");
    hiddenText.innerHTML = ["Required Values are: " + D, D + 2, D + 4];
  }

  // --------------------------------
  // Checking for odd no
  // --------------------------------
  else if (inputValue % 2 != 0) {
    let D = Number(inputValue + Number(2));
    hiddenText.classList.add("success");
    hiddenText.innerHTML = ["Required Values are: " + D, D + 2, D + 4];
  }

  // --------------------------------
  // Checking for wrong input
  // --------------------------------
  else {
    hiddenText.classList.add("hiddenText");
    hiddenText.innerText = "Please enter a value";
  }
};

input.addEventListener("keyup", track);
