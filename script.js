

let cashInjectionConv = document.getElementById("cashInjectionConv");

let sbaLoanAmount = document.getElementById("sbaLoanAmount");
let convLoanAmount = document.getElementById("convLoanAmount");

let sbaMonthlyPayment = document.getElementById("sbaMonthlyPayment");
let convMonthlyPayment = document.getElementById("convMonthlyPayment");

let breakeven = document.getElementById("breakeven");
let convBreakeven = document.getElementById("convBreakeven");
let breakevenCalc = document.getElementById("breakevenCalc")

let calculateButton = document.getElementById("calculateButton");


function calculate() {

    let propertyPrice = Number(document.getElementById("propertyPrice").value);
    
    cashInjectionConv.innerHTML = '$' + (.215 * propertyPrice).toLocaleString();
    sbaLoanAmount.innerHTML = '$' + Math.round((1.034 * propertyPrice)).toLocaleString();
    convLoanAmount.innerHTML = '$' + (.8 * propertyPrice).toLocaleString();

    let convPaymentAmt = Math.round((((.8 * propertyPrice) * .006125 * (1.006125 ** 300)) / ((1.006125 ** 300) - 1)));
    let sbaPaymentAmt = Math.round((((1.034 * propertyPrice) * .0089583 * (1.0089583 ** 300)) / ((1.0089583 ** 300) - 1)));
    
    convMonthlyPayment.innerHTML = '$' + convPaymentAmt.toLocaleString();
    sbaMonthlyPayment.innerHTML = '$' + sbaPaymentAmt.toLocaleString();

    let breakevenMonths = Math.round((Math.round(propertyPrice * .215) - 10000) / (sbaPaymentAmt - convPaymentAmt));
    let breakevenYears = Math.floor(breakevenMonths / 12) + ' years ' + (breakevenMonths % 12) + ' months';

    convBreakeven.innerHTML = breakevenMonths + ' months <br /> ' + breakevenYears;
    breakevenCalc.innerHTML = '($' + Math.round(Math.round(propertyPrice * .215) - 10000).toLocaleString() + ' / $' +  (sbaPaymentAmt - convPaymentAmt).toLocaleString() + ')';


}

