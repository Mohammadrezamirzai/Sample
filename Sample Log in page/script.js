const nextbtn = document.getElementById("nextbutton");
const emailinput = document.getElementById("input");
const invalidmessage = document.getElementById("invalid");
const emailres = document.getElementById("emailres");

function TestEmail() {
  const email = document.getElementById("input").value;
  if (email.endsWith("@gmail.com" || "@yahoo.com") === true) {
    emailinput.classList.add("border-green-400");
    emailres.classList.remove("hidden");
    emailres.classList.add("text-green-500");
    emailres.textContent = "Vaild";
  } else {
    emailinput.classList.add("border-red-400");
    emailres.classList.remove("hidden");
    emailres.classList.add("text-red-500");
    emailres.textContent = "Invalid";
  }
}

nextbtn.addEventListener("click", TestEmail);
