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


