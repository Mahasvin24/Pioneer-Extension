/****************************************************
 ******************** Website JS ********************
 ***************************************************/

const button = document.getElementById("check-5");
const text = document.getElementById("status");

button.addEventListener("change", (event) => {
  if (button.checked === true) {
    text.innerHTML = "Enabled";
    //startLogging(); // Start logging when the button is checked
  } else {
    text.innerHTML = "Disabled";
    //stopLogging(); // Stop logging when the button is unchecked
  }
});
