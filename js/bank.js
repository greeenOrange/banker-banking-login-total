document.getElementById('login-submit').addEventListener('click',function () {
    // get email 
    const emaliField = document.getElementById('user-email');
    const userEmail = emaliField.value;
// get password you can use 1th comment option and 2nd option

// const passwordField = document.getElementById('user-password').value;
const passwordField = document.getElementById('user-password');
const userPassword = passwordField.value;

if(userEmail == 'children@gmail.com' && userPassword == 'secret'){
    window.location.href = "banking.html";
}else {
    console.log('invalid values');
}
    
});

