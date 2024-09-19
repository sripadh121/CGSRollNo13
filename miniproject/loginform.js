// var username = document.getElementById("username");
// var password = document.getElementById("password");
// var btn = document.getElementById("login");

// // Example credentials (for testing purposes only)
// // const correctUsername = "useremail@gmail.com";
// // const correctPassword = "password123";

// // Event listener for the login button
// btn.addEventListener("click", displaydown);

// function displaydown() {
//     const enteredUsername = username.value;
//     const enteredPassword = password.value;
    
//     // Check if the entered credentials match the correct ones
//     if (enteredUsername === 'sripadh@gmail.com' && 123456 === 123456) {
//         // Redirect to another page
//         window.location.href = "dashboard.html"; // Replace with the desired URL
//         alert("sucessfully Logged IN")
//     } else {
//         // Show an error message if credentials are incorrect
//         document.getElementById("conpass-error").innerText = "Invalid username or password";
//         document.getElementById("conpass-error").style.display = "block";
//     }
// }
var username = document.getElementById("username");
var password = document.getElementById("password");
var btn = document.getElementById("login");

// Dictionary of usernames and passwords
const users = {
    "sripadh@gmail.com": "123456",
    "useremail@gmail.com": "password123",
    "john@example.com": "johnpassword"
};

// Event listener for the login button
btn.addEventListener("click", displaydown);

function displaydown() {
    const enteredUsername = username.value;
    const enteredPassword = password.value;
    
    // Check if the entered username exists in the dictionary
    if (users[enteredUsername] && users[enteredUsername] === enteredPassword) {
        // Show success message
        alert("Successfully Logged In");
        
        // Redirect to another page
        window.location.href = "dashboard.html"; // Replace with the desired URL
    } else {
        // Show an error message if credentials are incorrect
        document.getElementById("conpass-error").innerText = "Invalid username or password";
        document.getElementById("conpass-error").style.display = "block";
    }
}
