
let loginButton = document.querySelector("#loginButton");
let registerButton = document.querySelector("#registerButton");
let formContainer = document.querySelector("#formContainer");

loginButton.addEventListener("click", displayLoginForm);
registerButton.addEventListener("click", displayRegisterForm);

function displayLoginForm() {
    clearFormContainer();
    let form = document.createElement("div");
    form.innerHTML = `
        <h2>Login Form</h2>
        <input id="loginEmail" type="email" placeholder="Enter Your Email">
        <input id="loginPassword" type="password" placeholder="Enter Your Password">
        <button id="loginSubmit">Login</button>
    `;
    formContainer.appendChild(form);

    let loginSubmitButton = document.querySelector("#loginSubmit");
    loginSubmitButton.addEventListener("click", handleLogin);
}

function displayRegisterForm() {
    clearFormContainer();
    let form = document.createElement("div");
    form.innerHTML = `
        <h2>Register Form</h2>
        <input id="registerName" type="text" placeholder="Enter Your Name">
        <input id="registerEmail" type="email" placeholder="Enter Your Email">
        <input id="registerPassword" type="password" placeholder="Enter Your Password">
        <select id="registerCategory" type="text">
            <option>Doctor</option>
            <option>Not a Doctor</option>
         </select>
        <button id="registerSubmit">Register</button>
    `;
    formContainer.appendChild(form);

    let registerSubmitButton = document.querySelector("#registerSubmit");
    registerSubmitButton.addEventListener("click", handleRegistration);
}

function clearFormContainer() {
    formContainer.innerHTML = "";
}

async function handleRegistration() {
    let nameInput = document.querySelector("#registerName");
    let emailInput = document.querySelector("#registerEmail");
    let passwordInput = document.querySelector("#registerPassword");
    let categoryInput = document.querySelector("#registerCategory");

    let newUser = {
        name: nameInput.value,
        email: emailInput.value,
        password: passwordInput.value,
        category: categoryInput.value
    };

    try {
        let response = await fetch("https://doctors-n4qb.onrender.com/users", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newUser)
        });

        if (response.ok) {
            alert("User registered successfully!");
        } else {
            alert("User registration failed.");
        }
    } catch (error) {
        console.error("Error:", error);
    }
}

async function handleLogin() {
    let emailInput = document.querySelector("#loginEmail").value
    let passwordInput = document.querySelector("#loginPassword").value

    try {
    let response = await fetch("https://doctors-n4qb.onrender.com/users");
    if (response.ok) {
        let users = await response.json();
        let foundUser = users.find(user => user.email === emailInput && user.password === passwordInput);

        if (foundUser) {
alert("Login successful!");
if (foundUser.category === "Doctor") {
window.location = "Doctor.html";
} else if (foundUser.category === "Not a Doctor") {
window.location = "appointments.html";
}
} 

else {
alert("Incorrect credentials. Please try again.");
}
    }}
catch (error) {
    console.error("Error:", error);
}
}
