document.getElementById('login-submit').addEventListener('click', function () {
    //getting email 
    const emailField = document.getElementById('user-email');
    const userEmail = emailField.value;
    console.log(userEmail);
    //getting password
    const passwordField = document.getElementById('user-password');
    const userPassword = passwordField.value;
    console.log(userPassword);
    //for valid checking
    // but this is not a standard technic
    if (userEmail == 'sontan@bap.com' && userPassword == 'secret') {
        window.location.href = 'banking.html'
    }
    else {
        console.log('invalid user')
    }
});

