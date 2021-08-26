function getInputValue(feildId) {
    const inputField = document.getElementById(feildId);//id vary kortese ekhane tai .. 
    const valueInText = inputField.value;
    const value = parseFloat(valueInText);
    inputField.value = ''; //directly update korte hobe
    return value;
}
function getInnerTextValue(fieldId) {
    const fieldTag = document.getElementById(fieldId);
    const fieldValueInText = fieldTag.innerText;
    const amount = parseFloat(fieldValueInText);
    return amount;
}

function updateTotal(fieldId, value) {
    const totalTag = document.getElementById(fieldId);
    const previousTotalInText = totalTag.innerText;
    const previousTotal = parseFloat(previousTotalInText);
    const newTotal = previousTotal + value;
    totalTag.innerText = newTotal;
}
function updateBalance(value, isAdd) {
    const balanceTag = document.getElementById('balance-total');
    const balanceInText = balanceTag.innerText;
    const previousBalance = parseFloat(balanceInText); // parse float e nea necessary 
    // if (isAdd == true) {
    //     balanceTag.innerText = previousBalance + value;
    // }
    // else {
    //     balanceTag.innerText = previousBalance - value;
    // }
    let newBalance;
    if (isAdd == true) {
        newBalance = previousBalance + value;
    }
    else {
        newBalance = previousBalance - value;
    }
    balanceTag.innerText = newBalance;
}

document.getElementById('deposit-button').addEventListener('click', function () {
    const value = getInputValue('deposit-input'); // variabe e rakhsi cz amount ta lagbe then amount ta function e disi 
    if (value > 0) {
        updateTotal('deposit-total', value);
        updateBalance(value, true);
    }


});

//handle withdraw 
document.getElementById('withdraw-button').addEventListener('click', function () {
    const value = getInputValue('withdraw-input');
    const balance = getInnerTextValue('balance-total');
    if (value > 0 && value <= balance) {
        updateTotal('withdraw-amount', value);
        updateBalance(value, false);
    }

});