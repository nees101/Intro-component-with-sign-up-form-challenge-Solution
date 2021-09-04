var form = document.querySelector("form");
var inputs = form.getElementsByClassName("sign-up");

// Form Validation Section

function validation() {
  for (var i = 0; i < inputs.length; i++) {
    if (inputs[i] === email) {
      email_toggle(inputs[i]);
    } else {
      toggle(inputs[i]);
    }
  }
}

function toggle(el) {
  el.value === "" ? addError(el) : removeError(el);
}

function addError(el) {
  el.classList.add("error-icon");
  el.placeholder = " ";
  var id = el.id + "Error";
  var errorMessage = document.getElementById(id);
  errorMessage.style.display = 'block';
}

function removeError(el) {
  el.classList.remove("error-icon");
  var id = el.id + "Error";
  var errorMessage = document.getElementById(id);
  errorMessage.style.display = 'none';
}

// Seperate function for email validation

function email_toggle(el) {
  var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/; //Email pattern
  el.value === "" || !el.value.match(filter) ? addEmailError(el) : removeEmailError(el);
}

function addEmailError(el) {
  el.classList.add("error-icon");
  email.placeholder = "email@example/com";
  el.classList.add("placeholder-color");
  var id = el.id + "Error";
  var errorMessage = document.getElementById(id);
  errorMessage.style.display = 'block';
}

function removeEmailError(el) {
  el.classList.remove("error-icon");
  el.classList.remove("placeholder-color");
  var id = el.id + "Error";
  var errorMessage = document.getElementById(id);
  errorMessage.style.display = 'none';
}

// Event Listeners

form.addEventListener("submit", function(event) {
  event.preventDefault();
  validation();
});
