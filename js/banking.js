//handle deposit button event 
document.getElementById('deposit-button').addEventListener('click', function () {
    //get the amount deposited
    const depositInput = document.getElementById('deposit-input');
    const newdepositValue = depositInput.value;

    //update deposit total
    const depositTotal = document.getElementById('deposit-total');
    const previousDepositAmount = depositTotal.innerText;
    const newDepositTotal = parseFloat(previousDepositAmount) + parseFloat(newdepositValue);
    depositTotal.innerText = newDepositTotal;

    //update account balance 
    const balanceTotal = document.getElementById('balance-total');
    const balanceTotalText = balanceTotal.innerText;
    const previousBalanceTotal = parseFloat(balanceTotalText);
    const newBalanceTotal = previousBalanceTotal + newDepositTotal;
    balanceTotal.innerText = newBalanceTotal;

    // clear the deposit input field 
    depositInput.value = '';
});

//HANDLE withdraw with even handler
document.getElementById('withdraw-button').addEventListener('click', function () {
    // getting withdraw
    const newWithdrawAmount = document.getElementById('withdraw-input');
    const newWithdrawAmountText = newWithdrawAmount.value;

    const withdrawAmount = document.getElementById('withdraw-amount');
    const previousWithdrawAmountText = withdrawAmount.innerText;

    const totalWithdrawAmount = parseFloat(previousWithdrawAmountText) + parseFloat(newWithdrawAmountText);
    // console.log(totalWithdrawAmount);
    withdrawAmount.innerText = totalWithdrawAmount;

    const currentBalance = document.getElementById('balance-total');
    const previousBalance = currentBalance.innerText;
    // const previousBalanceTotal = parseFloat(previousBalance);
    const newBalance = parseFloat(previousBalance) - totalWithdrawAmount; //first e duebar parseflot korar karone mile nai 
    currentBalance.innerText = newBalance;
    console.log(newBalance);

    //clearing 
    newWithdrawAmount.value = '';

    // const balanceTotal = document.getElementById('balance-total');
    // const balanceTotalText = balanceTotal.innerText;
    // const previousBalanceTotal = parseFloat(balanceTotalText);
    // const newBalanceTotal = previousBalanceTotal - withdrawAmount.innerText;
    // balanceTotal.innerText = newBalanceTotal;

});

