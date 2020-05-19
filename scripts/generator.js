"use strict";

/*
File: generator.js
Zachary Muranaka
Generates a random password based on the user's input
*/

document.getElementById("submitBtn").addEventListener("click", generatePassword);

// Returns a random member of the argument array as a char
function randomChar(array) { return String.fromCharCode(array[Math.floor(Math.random() * array.length)]); }

// Returns the password length if it is within the acceptable range or 0 if it is not
function validPasswordLength()
{
    return (document.getElementById("numberOfChars").value > 0 && document.getElementById("numberOfChars").value < 65) ?
    document.getElementById("numberOfChars").value : 0;
}

// Generates a password and displays the results
function generatePassword()
{
    // ASCII codes for lowercase letters
    var charRange =
    [
        97, 98, 99, 100, 101, 102, 103, 104, 105, 106, 107, 108, 109,
        110, 111, 112, 113, 114, 115, 116, 117, 118, 119, 120, 121, 122
    ];

    document.getElementById("password").textContent = ""; // Reset the textContent

    if(document.getElementById("nums").checked)
    {
        // Push the ASCII codes for numbers onto charRange
        for(let i = 48; i <= 57; i++) charRange.push(i);
    }
    if(document.getElementById("mixCase").checked)
    {
        // Push the ASCII codes for uppercase letters onto charRange
        for(let i = 65; i <= 90; i++) charRange.push(i);
    }
    if(document.getElementById("symbols").checked)
    {
        // Push the ASCII codes for symbols onto charRange
        for(let i = 33; i <= 47; i++) charRange.push(i);
        for(let i = 58; i <= 64; i++) charRange.push(i);
        for(let i = 91; i <= 96; i++) charRange.push(i);
        for(let i = 123; i <= 126; i++) charRange.push(i);
    }

    // Generate and display the random password
    for(let i = 0; i < validPasswordLength(); i++)
        document.getElementById("password").textContent += randomChar(charRange);
    
    if(document.getElementById("password").textContent === "")
        document.getElementById("password").textContent = "Passwords must be between 1 and 64 characters";
}
