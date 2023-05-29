/*
File: password_manager.js
Zachary Muranaka
Generates a random password based on the user's input and can improve it as well
using the ANU QRNG API https://qrng.anu.edu.au/contact/api-documentation/
*/

// DOM elements
const numberOfCharsInput = document.getElementById("numberOfChars");
const numsInput = document.getElementById("nums");
const mixCaseInput = document.getElementById("mixCase");
const symbolsInput = document.getElementById("symbols");
const passwordDisplay = document.getElementById("password");
const oldPasswordInput = document.getElementById("oldPassword");
const improvedPasswordDisplay = document.getElementById("improvedPassword");

// ASCII codes for lowercase letters, uppercase letters, numbers, and symbols
const lowerASCII = [...];
const upperASCII = [...];
const numASCII = [...];
const symbolASCII = [...];

async function getPassword() {
    ...
}

function randomArrayMember(array) { ... }

function getChar(character) {
    ...
}

function getImprovedPassword() {
    ...
}

// Generate a password when the generate button is clicked
document.getElementById("generateBtn").addEventListener("click", getPassword);

// Improve the user's password and display the results when the improve button is clicked
document.getElementById("improveBtn").addEventListener("click", getImprovedPassword);
