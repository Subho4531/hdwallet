document.addEventListener("DOMContentLoaded", function () {
  const btn = document.querySelector(".exp_button");
  const content = document.querySelector(".phrase_grid");

  btn.parentElement.parentElement.addEventListener("click", function () {
    btn.classList.toggle("rotate-180");
    content.classList.toggle("hidden");

    
    
  });
  
  })

document.addEventListener("DOMContentLoaded", function () {
  const eyeIconOff= document.querySelector(".lucide-eye-off");
  const eyeIcon= document.querySelector(".lucide-eye");
  const pvtKeyInput = document.querySelector(".pvt_key");
  [eyeIconOff,eyeIcon].forEach((icon)=>{
    icon.addEventListener("click",()=>{
    pvtKeyInput.type == "password" ? pvtKeyInput.type = "text" : pvtKeyInput.type = "password";
    eyeIcon.classList.toggle("hidden");
    eyeIconOff.classList.toggle("hidden");
  });
  });
});

// document.addEventListener("DOMContentLoaded", function () {
//   const mnemonic = document.querySelector(".mnemonic");
//   const inputbtn = document.querySelector(".submitbutton");

//   if (mnemonic && inputbtn) {
//     mnemonic.addEventListener("input", () => {
//       if (mnemonic.value.trim() !== "") {
//         inputbtn.value = "Add Wallet";
//       } else {
//         inputbtn.value = "Generate Wallet"; 
//       }
//     });
//   }
// });


