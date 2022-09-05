function checkPasswordMatch(e) {
    let pass1=document.getElementById('password')
    let pass2 = document.getElementById('confirmPass')
    if (pass1.value != pass2.value){
        pass1.style = 'border:1px solid #FF00FF; box-shadow: 0 0 5px #FF00FF;'
        pass2.style = 'border:1px solid #FF00FF; box-shadow: 0 0 5px #FF00FF;'
        console.log(pass1.value,pass2.value)
        
        errorMessage.innerHTML = 'Passwords must match!'
        e.preventDefault();

    }
    return
}
errorMessage = document.querySelector('.errorMessage')
let submitButton  = document.getElementById('submit')
submitButton.addEventListener('click', (e)=>checkPasswordMatch(e))
 
