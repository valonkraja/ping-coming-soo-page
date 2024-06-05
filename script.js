let form = document.querySelector("form")
let emailInp = document.querySelector("#email")
let emailError = document.querySelector(".email-error")
console.log(form)

form.addEventListener("submit", function(e){
    e.preventDefault()
    let email = e.target[0].value

    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
        console.log(email);
        
        emailError.classList.remove("active");
        emailInp.classList.remove("error");
        
      } else {
        emailInp.classList.add("error")
        emailError.classList.add("active");
      }
})
