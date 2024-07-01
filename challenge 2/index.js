const kraPercentage = 16;
const nhifDeduction = 500;
const nssfPercentage = 6;

function calculateNetSalary(basicSalary, benefits) {
    let grossSalary = basicSalary + benefits;
    
    let tax = (kraPercentage/100) * grossSalary;

    let nhifDeduction = nhifDeduction;

    let netSalary = grossSalary - tax - nhifDeduction -nssfdeduction;

    return{
        grossSalary: grossSalary,
        tax: tax,
        nhifDeduction: nhifDeduction,
        netSalary: netSalary
    };
}

let basicSalary = 80000;
let benefits = 20000;

let salaryDetails = calculateNetSalary(basicSalary, benefits);
console.log ("tax");
console.log ("grossSalary");
console.log ("nhifDeductions");
console.log ("nssfDeductions");
console.log ("netSalary");

netSalaryCalculator();
