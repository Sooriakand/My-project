document.getElementById("registrationForm").addEventListener("submit", function(event) {
    // Prevent form submission by default
    event.preventDefault();

    // Retrieve the input values
    const nameInput = document.getElementById("name").value.trim();
    const emailInput = document.getElementById("email").value.trim();
    const phoneNumberInput = document.getElementById("phoneNumber").value.trim();
    const passwordInput = document.getElementById("password").value;

    // Validate input values
    displayErrorMessage("name", !isValidName(nameInput), "Username must contain only alphabets and spaces, with a minimum of 6 characters.");
    displayErrorMessage("email", !isValidEmail(emailInput), "Please enter a valid email address.");
    displayErrorMessage("phoneNumber", !isValidPhoneNumber(phoneNumberInput), "Phone number must contain exactly 10 digits.");
    displayErrorMessage("password", !isValidPassword(passwordInput), "Password must be at least 8 characters long.");

    // If all validations pass, submit the form
    if (isValidName(nameInput) && isValidEmail(emailInput) && isValidPhoneNumber(phoneNumberInput) && isValidPassword(passwordInput)) {
        this.submit();
    }
});

// Function to validate username format
function isValidName(name) {
    const namePattern = /^[a-zA-Z\s]{6,}$/;
    return namePattern.test(name);
}

// Function to validate email format
function isValidEmail(email) {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
}

// Function to validate phone number format
function isValidPhoneNumber(phoneNumber) {
    return /^\d{10}$/.test(phoneNumber);
}

// Function to validate password format
function isValidPassword(password) {
    const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    return passwordPattern.test(password);
}

// Function to display error message
function displayErrorMessage(inputId, condition, message) {
    const errorSpan = document.getElementById(`${inputId}Error`);
    if (condition) {
        errorSpan.textContent = message;
        errorSpan.classList.add("error-visible");
    } else {
        errorSpan.textContent = "";
        errorSpan.classList.remove("error-visible");
    }
}


// Login css
document.getElementById("registrationForm").addEventListener("submit", function(event) {
    // Prevent form submission by default
    event.preventDefault();

    // Retrieve the email and password input values
    const emailInput = document.getElementById("email").value.trim();
    const passwordInput = document.getElementById("password").value;

    // Validate email
    if (!isValidEmail(emailInput)) {
        // Display error message for email
        document.getElementById("emailError").textContent = "Please enter a valid email address.";
        return; // Exit function to prevent further validation
    }

    // Validate password
    if (!isValidPassword(passwordInput)) {
        // Display error message for password
        document.getElementById("passwordError").textContent = "Password must be at least 8 characters long.";
        return; // Exit function to prevent further validation
    }

    // If all validations pass, submit the form
    this.submit();
});

// Function to validate email format
function isValidEmail(email) {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
}

// Function to validate password format
function isValidPassword(password) {
    return password.length >= 8;
}

function saveData(){
    let name, email, phoneNumber, password;
    name=document.getElementById("name").value;
    email=document.getElementById("email").value;
    phoneNumber=document.getElementById("phoneNumber").value;
    password=document.getElementById("password").value;
    // console.log(name+email+phoneNumber+password);

        // localStorage.setItem("name",name);
        // localStorage.setItem("email",email); 
        //  localStorage.setItem("phoneNumber",phoneNumber);
        //  localStorage.setItem("password",password);

        let user_records=new Array();
        user_records=JSON.parse(localStorage.getItem("users"))?JSON.parse(localStorage.getItem("users")):[]
        if(user_records.some((v)=>{
            return v.email==email
         })){
         alert("Duplicate Data")
        }
        else{
            user_records.push({
                "name":name,
                "email":email,
                "password":password, 
                "phoneNumber":phoneNumber 
            })
            localStorage.setItem("users",JSON.stringify(user_records));
    }}

    