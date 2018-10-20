function OutgoingPage (){
  this.loansAndCreditData = {
    hirePurchaseCount: 2,
    loanCount: 1,
    creditCardCount: 1,
    chargeCardCount: 1,
    mailOrderCount: 1,
    overdraftCount: 2,
    buyNowPayLaterCount: 1,
    interestFreeLoanCount: 2,
    studentLoanCount: 1,
    monthlyPayment: 104.78,
    outstandingBalance: 549.48,
    repaymentPlan: 'abhishek',
    lender: 'Bank of England',
    payBalanceInFull: 'N',
  };
}

const scenario1 = new OutgoingPage();
scenario1.loansAndCreditData.buyNowPayLaterCount = 3;
console.log(scenario1);