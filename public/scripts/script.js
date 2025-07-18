const btn = document.querySelector(".exp_button");
const content = document.querySelector(".phrase_grid");
if (btn && content && btn.parentElement && btn.parentElement.parentElement) {
  btn.parentElement.parentElement.addEventListener("click", function () {
    btn.classList.toggle("rotate-180");
    content.classList.toggle("hidden");
    console.log("hello")
  });
}

const eyeIcon = document.querySelectorAll(".lucide-eye-off");
const eyeIconOff = document.querySelectorAll(".lucide-eye");
const pvtKeyInput = document.querySelectorAll(".pvt_key");

if (eyeIconOff.length && eyeIcon.length && pvtKeyInput.length) {
  eyeIconOff.forEach((iconOff, idx) => {
    iconOff.addEventListener("click", () => {
      if (pvtKeyInput[idx]) {
        pvtKeyInput[idx].type = "text";
        eyeIcon[idx].classList.remove("hidden");
        iconOff.classList.add("hidden");
      }
    });
  });

  eyeIcon.forEach((icon, idx) => {
    icon.addEventListener("click", () => {
      if (pvtKeyInput[idx]) {
        pvtKeyInput[idx].type = "password";
        icon.classList.add("hidden");
        eyeIconOff[idx].classList.remove("hidden");
      }
    });
  });
}



  
  document.addEventListener("DOMContentLoaded", () => {
    const mnemonic = document.querySelector(".inputphrase");
    const inputbtn = document.querySelector(".submitbutton");
    
    
    mnemonic.addEventListener("input",()=>{
      inputbtn.value=="   Add Wallet   "
    })
  });
  
