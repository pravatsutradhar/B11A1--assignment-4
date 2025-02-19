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

    document.getElementById("amount").value = ""; // Clear input field
}