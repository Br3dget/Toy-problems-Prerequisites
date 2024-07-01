# Author
This program is written by Bridget Njoki Njoroge.

# Date
30/6/2024


# week 1 Toy problems Prerequisites.
The program contains 3 challenges including:Student Grade Generator, Speed Detector,Net Salary Calculator.

# Challenge 1; Student Grade Generator

### Description
It prompts the user to input student marks (between 0 and 100) :
A: Marks greater than 79
B: Marks between 60 and 79
C: Marks between 50 and 59
D: Marks between 40 and 49
E: Marks less than 40

## Code
function gradeStudent() {
    let marks = prompt("70");
    
    marks = parseFloat(marks);

    if (isNaN(marks) || marks < 0 || marks > 100){
        alert("90");
        return;
    }

    let grade;
    if (marks >79){
        grade = 'A';
    } else if (marks >= 60) {
        grade = 'B';
    } else if (marks >= 50) {
        grade = 'C';
    } else if (marks >= 40) {
        grade = 'D';
    } else {
        grade = 'E';
    }
    
}
gradeStudent();

# Challenge 2; Speed Detector

## Description
The program takes the speed of a car as input. If the speed is less than 70 km/h, it prints “Ok”. For every 5 km/h above the speed limit (70 km/h), the driver receives one demerit point. If the driver accumulates more than 12 demerit points, the program prints “License suspended”.

## Code
 function checkSpeed(speed){
    const kmPerDemeritPoint = 5;
    const speedLimit = 70;
    const demeritPointsThreshold = 12;

if (speed <= speedlimit) {
    console.log("ok");
} else {
    const points = Math.floor((speed -speedlimit) / kmPerDemeritPoint)

    if (points>= demeritPointsThreshold) {
        console.log("License Suspended");
    } else {
        console.log("points: " + points);
    }
}
}

speedDetector();

# Challenge 3; Net Salary Calculator 

## Description
This program is used to compute an individual’s net salary. It takes inputs for basic salary and benefits, then calculates the gross salary, payee (tax), NHIF deductions, NSSF deductions, and finally the net salary.

## Code
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
