// Function for validating email
function ValidateEmail(email) 
{
 if (/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(email))
  {
    return (true)
  }return (false)
}

// Validation

const error = document.getElementById('error')

document.getElementById("reset").addEventListener("click", function(){
  alert("form resetted")
})


document.getElementById('form').addEventListener('submit', function(e){
  e.preventDefault()
  const name = this.name.value.trim()
  const email = this.email.value.trim()
  const notes = this.notes.value
  const planchoice = this.planchoice.value
  const agree = this.agreement.checked

  let errorMsg = "";

  if (name.length < 5){
    errorMsg += "Name must be as least 5 character long!<br />"
  }


  let isValid = true;
  // validasi nama
  for (let i = 0; i < name.length; i++){
    let char = name.charAt(i).toLowerCase()
    isValid = isValid && ((char >= 'a' && char <= 'z') || char ==' ')
  }
  if(!isValid){
    errorMsg += "Name must be in alphabet<br />"
  }
// validasi email
  if (!ValidateEmail(email)){
    errorMsg += "Invalid Email!<br />"
  }
// validasi notes
if (notes.length < 10){
    errorMsg += "Buxger can't understand with less than 10 letter!<br />"
  }
// validasi choice
  if (planchoice.length == 0){
    errorMsg += "Please choose one of the area<br />"
  }
// validasi agreement
  if (!agree){
    errorMsg += "Agreement must be checked<br />"
  }

  error.innerHTML = errorMsg


  if (errorMsg.length == 0){
    alert(`
      name      : ${name}\n
      email     : ${email}\n
      notes    : ${notes}\n
      area      : ${planchoice}\n
    `
    )
    const additional = prompt("Please input if you have any additional message")
    alert("Your plan choice has been saved, please check your email for confirmation")
  }else{
    alert("Some of the information you entered may be invalid")
  }
})