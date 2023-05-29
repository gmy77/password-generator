async function getPassword()
{
    let requestedLength = numberOfCharsInput.value;
    if (requestedLength < 1 || requestedLength > 128)
    {
        passwordDisplay.innerText = "Passwords must be 1 to 128 characters long";
        return;
    }

    let requestedASCII = lowerASCII.concat(
        (numsInput.checked ? numASCII : []),
        (mixCaseInput.checked ? upperASCII : []),
        (symbolsInput.checked ? symbolASCII : [])
    );

    passwordDisplay.innerText = "";

    let responseJSON;

    try {
        let response = await fetch(`https://qrng.anu.edu.au/API/jsonI.php?length=${requestedLength}&type=uint8`);
        if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
        responseJSON = await response.json();
    } catch (err) {
        // Se si verifica un errore di rete o se lo stato della risposta non è OK, gestisci l'errore
        passwordDisplay.innerText = "Failed to fetch data from the API. Please try again later.";
        console.log(err);
        return;
    }

    for (let randomNumber of responseJSON.data)
    {
        passwordDisplay.innerText += String.fromCharCode(requestedASCII[Math.floor(randomNumber * requestedASCII.length / 256)]);
    }
}

document.getElementById("submitBtn").addEventListener("click", getPassword);
