document.getElementById('registrationForm').addEventListener(
    'submit', function (event) {
        event.preventDefault(); 

        var name = document.getElementById("name").value;
        var email = document.getElementById("email").value;
        var phone = document.getElementById( "phone" ).value;
        var password = document.getElementById("password").value;
        var confirmPassword = document.getElementById( "confirmPassword" ).value;


        var error = document.getElementById("error");
        error.innerHTML='';

        if (!name.trim()) {
            error.innerHTML = "Please enter name";
            return;
        }

        if(!email.trim()) {
            error.innerHTML = "Please Enter Email";
            return;

        }

        if(!validateEmail(email)) {
            error.innerHTML += " Please Enter valid email";
            return;
        }

        if(!phone.trim()){
            error.innerHTML += "\n Please provide your Phone Number.";
            return;
        }

        if(!validatePhone(phone)) {
            error.innerHTML += "\n Invalid Phone number format.";
            return;
        }

        if(!password.trim()) {
            error.innerHTML += "\n Password cannot be empty.";
            return;
        }

        if (password.length < 8) {
            error.innerHTML += "\n Password must have at least 8 characters long.";
        }

        if(!/[A-Z]/.test(password) || !/[a-z]/.test(password) || !/[0-9]/.test(password)) {
            error.innerHTML += "\n Password should contain at least one upper case letter, one lower case letter and one digit.";
            return;
        }

        if(password !== confirmPassword) {
            error.innerHTML = "password does not match";
            return;
        }

        alert('registration successfill');
        });





        function validateEmail(email) {
            var re = /^[^\s@]+\@[^\s@]+$/;
            return re.test(email);

        }


        function validatePhone(phone) {
            var re = /^\d{10}$/;
            return re.test(phone);
        }