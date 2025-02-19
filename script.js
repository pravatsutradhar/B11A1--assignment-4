// Vat Calculate Function

function calculateVAT(amount) {
    if (typeof amount !== "number" || amount <= 0 || isNaN(amount)) {
        return "Invalid";
    }
    return (amount * 0.075).toFixed(2);
}

function addToTable() {
    let input = document.getElementById("amount").value;
    let amount = parseFloat(input);

    let vat = calculateVAT(amount);
    if (vat === "Invalid") {
        alert("Please enter a valid positive number!");
        return;
    }

    let table = document.getElementById("vatTable");
    let row = table.insertRow();
    row.insertCell(0).innerText = amount.toFixed(2);
    row.insertCell(1).innerText = vat;

    // Clear input field
    document.getElementById("amount").value = ""; 
}


// Contact Validator Function 


function validContact(contact) {
        

    // Check if input is not a string 
    if (typeof contact !== 'string') {
        return "Invalid";
    }

    if (contact.length !== 11) {
        return false;
    }
    if (!contact.startsWith("01")) {
        return false;
    }
    if (contact.includes(" ")) {
        return false;
    }
    for (let i = 0; i < contact.length; i++) {
        if (contact[i] < '0' || contact[i] > '9') {
            return false;
        }
    }
    return true;
}


let validNumber = validContact(["01987654321"]);
console.log(validNumber)

function addToTable() {
    let input = document.getElementById("contact").value.trim(); 

    if (input === "") {
        alert("Please enter a contact number!");
        return;
    }

    let result = validContact(input);
    let table = document.getElementById("contactTable");

    // Prevent duplicate entries
    let existingNumbers = [...table.getElementsByTagName("td")].map(td => td.innerText);
    if (existingNumbers.includes(input)) {
        alert("This number is already in the table!");
        return;
    }

    let row = table.insertRow();
    row.insertCell(0).innerText = input;
    
    // Display "Invalid" correctly 
    row.insertCell(1).innerText = result === true ? "Valid" : result === false ? "Invalid" : result;

    document.getElementById("contact").value = ""; 
}


// Admission Functions 

function willSuccess(results) {
    // Check an array
    if (!Array.isArray(results)) {
        return "Invalid";
    }

    let passCount = 0;
    let failCount = 0;

    // Loop results array and count passes and fails
    for (let score of results) {
        if (typeof score !== 'number') {
            return "Invalid";
        }

        if (score >= 50) {
            passCount++;
        } else {
            failCount++;
        }
    }

    return passCount >= failCount;
}

let passArray = willSuccess([60,40,80,20]);
console.log(passArray)

function analyzeResults() {
    let input = document.getElementById("resultInput").value.trim();
    let resultArray = input.split(',').map(item => parseInt(item.trim())); 
    let result = willSuccess(resultArray); 

    // Handle invalid input or result
    let table = document.getElementById("resultTable");
    let row = table.insertRow();
    row.insertCell(0).innerText = input || "Empty Input";  
    row.insertCell(1).innerText = result === "Invalid" ? "Invalid Input" : result ? "Pass" : "Fail";
    
    document.getElementById("resultInput").value = "";
}


