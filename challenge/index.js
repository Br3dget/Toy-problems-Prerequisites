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