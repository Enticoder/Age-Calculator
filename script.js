/*
TASK OBJECTIVE:
Create a web-based age calculator using JavaScript.

FEATURES:
- User inputs Date of Birth (day, month, year).
- Output shows calculated age in years, months, and days.

TECH STACK:
- JavaScript for age calculation using Date object.

KEY CONCEPTS:
- DOM Manipulation
- Working with JavaScript Date & Time
- Input validation
*/

function calculateAge() {
    // DOM Manipulation: Get user input from the input field
    const birthdateValue = document.getElementById('birthdate').value;

    // Input Validation: Check if the user selected a date
    if (!birthdateValue) {
        document.getElementById('result').innerText = "Please select your birthdate.";
        return;
    }

    // Working with JavaScript Date & Time
    const birthdate = new Date(birthdateValue);
    const today = new Date();

    // Calculate initial year, month, and day differences
    let years = today.getFullYear() - birthdate.getFullYear();
    let months = today.getMonth() - birthdate.getMonth();
    let days = today.getDate() - birthdate.getDate();

    // Adjust if the current day is earlier than the birth day
    if (days < 0) {
        months--;
        const previousMonth = new Date(today.getFullYear(), today.getMonth(), 0);
        days += previousMonth.getDate();
    }

    // Adjust if the current month is earlier than the birth month
    if (months < 0) {
        years--;
        months += 12;
    }

    // DOM Manipulation: Display the final result
    document.getElementById('result').innerText =
        `Your age is ${years} years, ${months} months, and ${days} days.`;
}