//بخش document
let $ = document


let usernameMessage = $.querySelector('.username_validation')
let passwordMessage = $.querySelector('.password_validation')

let usernameInput = $.querySelector('.username')
let passwordInput = $.querySelector('.password')

let logInForm = $.querySelector('.form')
let singInForm = $.querySelector('.form2')

let usernameLength= usernameInput.value.length ;
let passwordLength= passwordInput.value.length ; 
//userName password lengths
var length1 = 12 ; 
var length2 = 8 ;


function usernameValidation () {
    //alert('username')
    if (usernameInput.value.length < 12) {
        usernameMessage.style.color = 'red'
        usernameMessage.style.marginLeft = '10px'
        usernameMessage.innerHTML = 'must contain ' + (length1 - usernameInput.value.length) +' character'
        usernameMessage.style.display = 'block'
    } if (usernameInput.value.length < 1) {
        usernameMessage.style.display = 'none'
    } if (usernameInput.value.length > 11) {
        usernameMessage.style.color = 'green'
        usernameMessage.innerHTML = 'ok'
        usernameMessage.style.marginLeft = '85px'
        usernameMessage.style.display = 'block'
    } 
    
}
function passwordValidation() {
    if (passwordInput.value.length < 8) {
        passwordMessage.style.marginLeft = '10px'
        passwordMessage.style.color = 'red'
        passwordMessage.innerHTML = 'must contain ' + (length2 - passwordInput.value.length) +' character'
        passwordMessage.style.display = 'block'
    } if (passwordInput.value.length < 1) {
        passwordMessage.style.display = 'none'
    } if (passwordInput.value.length > 7) {
        passwordMessage.style.color = 'green'
        passwordMessage.innerHTML = 'ok'
        passwordMessage.style.marginLeft = '85px'
        passwordMessage.style.display = 'block'
    }    
}
function singIn() {
    logInForm.style.animationName ='rotation'
    logInForm.style.animationDuration= '3s'
    singInForm.style.animationName = 'rotate2'
    singInForm.style.animationDuration = '3s'
}
function logIn() {
    logInForm.style.animationName ='loginBack'
    logInForm.style.animationDuration= ' 3s'
    //logInForm.style.animationDirection = 'revers'
    singInForm.style.animationName = 'loginBack2'
    singInForm.style.animationDuration = ' 3s'
    //singInForm.style.animationDirection = 'revers'
}
