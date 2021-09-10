document.getElementById('deposit-btn').addEventListener('click',function(){
    const depositInput = document.getElementById('deposit-input');
    const newDepositText = depositInput.value;
    const lastDepositAmout = parseFloat(newDepositText)
    // console.log(depositAmout);

    /* Update Deposit */
    const depositTotal = document.getElementById('total-deposit');
    const previousDepositText = depositTotal.innerText;
    const previousDepositAmout = parseFloat(previousDepositText)
    // console.log(parseFloat(previousDepositAmout),parseFloat(newDepositAmount));
    const newDepositTotal = previousDepositAmout + lastDepositAmout;
    console.log(newDepositTotal);
    depositTotal.innerText = newDepositTotal;
    /* Update account Balance */
    const balanceTotal = document.getElementById('total-balance');
    const balanceText = balanceTotal.innerText;
    const previousBalanceTotal = parseFloat(balanceText);
    const newTotalBalance = previousBalanceTotal + lastDepositAmout;
    balanceTotal.innerText = newTotalBalance;

    // clear input field
    depositInput.value = '';
});
/* handle withdraw */
    document.getElementById('withdraw-btn').addEventListener('click',function () {
    const withdrawInput = document.getElementById('withdraw-input');
    const withdrawText = withdrawInput.value;
    const newWithdrawAmount = parseFloat(withdrawText);
    console.log(newWithdrawAmount);

    /* set withdraw total */
        const withdrawTotal = document.getElementById('total-withdraw');
        const previousWithdrawText = withdrawTotal.innerText;
        const previousWithdrawTotal = parseFloat(previousWithdrawText);
        const newWithdrawTotal = previousWithdrawTotal + newWithdrawAmount;       
        withdrawTotal.innerText = newWithdrawTotal;

        /* update withdraw Balance */
        const balanceTotal = document.getElementById('total-balance');
        const previousBalanceText = balanceTotal.innerText;
        const previousBalanceTotal = parseFloat(previousBalanceText);
        const newBalanceTotal = previousBalanceTotal - newWithdrawAmount;
        balanceTotal.innerText = newBalanceTotal;
        /* clear input */
        withdrawInput.value = '';
   
})