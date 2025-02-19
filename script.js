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



// Person Match 

function validProposal(person1, person2) {
    if (typeof person1 !== 'object' || typeof person2 !== 'object') {
        return "Invalid";
    }

    if (!('name' in person1 && 'gender' in person1 && 'age' in person1) ||
        !('name' in person2 && 'gender' in person2 && 'age' in person2)) {
        return "Invalid";
    }

    if (typeof person1.name !== 'string' || typeof person2.name !== 'string' ||
        typeof person1.gender !== 'string' || typeof person2.gender !== 'string' ||
        typeof person1.age !== 'number' || typeof person2.age !== 'number') {
        return "Invalid";
    }

    if (person1.gender === person2.gender) {
        return false;
    }

    if (Math.abs(person1.age - person2.age) > 7) {
        return false;
    }

    return true;
}

// Example 1: Valid Proposal
const person1 = { name: 'Alice', gender: 'Female', age: 25 };
const person2 = { name: 'Bob', gender: 'Male', age: 28 };
console.log(validProposal(person1, person2));


function handleSubmit() {
    // Get input values from the form
    const name1 = document.getElementById('name1').value;
    const gender1 = document.getElementById('gender1').value;
    const age1 = parseInt(document.getElementById('age1').value);
    
    const name2 = document.getElementById('name2').value;
    const gender2 = document.getElementById('gender2').value;
    const age2 = parseInt(document.getElementById('age2').value);

    // Create person objects
    const person1 = { name: name1, gender: gender1, age: age1 };
    const person2 = { name: name2, gender: gender2, age: age2 };

    // Validate the proposal
    const result = validProposal(person1, person2);
    
    // Display result in the table
    const resultTable = document.getElementById('result-table');
    const newRow = resultTable.insertRow();
    const newCell = newRow.insertCell();
    newCell.textContent = result === true ? "Valid Proposal" : result === false ? "Proposal Invalid: Gender or Age" : "Invalid Input";
}

