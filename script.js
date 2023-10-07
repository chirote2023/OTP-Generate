const inputs = document.querySelectorAll("input"),
button = document.querySelector("button");


inputs.forEach((input, index1) => {
input.addEventListener("keyup", (e) => {
  
  const currentInput = input,
    nextInput = input.nextElementSibling,
    prevInput = input.previousElementSibling;


  if (currentInput.value.length > 1) {
    currentInput.value = "";
    return;
  }

  if (nextInput && nextInput.hasAttribute("disabled") && currentInput.value !== "") {
    nextInput.removeAttribute("disabled");
    nextInput.focus();
  }

  if (e.key === "Backspace") {
   
    inputs.forEach((input, index2) => {
    
      if (index1 <= index2 && prevInput) {
        input.setAttribute("disabled", true);
        input.value = "";
        prevInput.focus();
      }
    });
  }
  
  if (!inputs[3].disabled && inputs[3].value !== "") {
    button.classList.add("active");
    return;
  }
  button.classList.remove("active");
});
});


const generateOtp =() => {
        const lenght = 4;
        let otp = "";
    
        for(let i =0; i<lenght; i++){
            otp += Math.floor(Math.random() * 10);
        }
        return otp;
    }
    let p= new Promise((resolve,reject) =>  {
          alert("Upcoming Message")
          setTimeout(() =>{
              alert(generateOtp())
              resolve(true)
          },2000)
      })
      console.log(p)
    console.log(generateOtp());


window.addEventListener("load", () => inputs[0].focus());