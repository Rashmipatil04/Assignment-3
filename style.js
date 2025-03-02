function validateForm() {
    // Get all input values
    const fullName = document.getElementById('fullName').value.trim();
    const mobile = document.getElementById('mobile').value.trim();
    const aadhar = document.getElementById('aadhar').value.trim();
    const panCard = document.getElementById('panCard').value.trim();
    const dob = document.getElementById('dob').value.trim();

    const subject1 = document.getElementById('subject1').value;
    const subject2 = document.getElementById('subject2').value;
    const subject3 = document.getElementById('subject3').value;
    const subject4 = document.getElementById('subject4').value;
    const subject5 = document.getElementById('subject5').value;
    const subject6 = document.getElementById('subject6').value;

    // Split the full name into First, Middle, Last
    const nameParts = fullName.split(" ");
    if (nameParts.length < 3) {
        alert("Please enter your full name with First, Middle, and Last name.");
        return false;
    }

    // Validate Mobile Number (10 digits)
    const mobilePattern = /^[0-9]{10}$/;
    if (!mobilePattern.test(mobile)) {
        alert("Please enter a valid 10-digit mobile number.");
        return false;
    }

    // Validate Aadhar Number (12 digits)
    const aadharPattern = /^[0-9]{12}$/;
    if (!aadharPattern.test(aadhar)) {
        alert("Please enter a valid 12-digit Aadhar number.");
        return false;
    }

    // Validate PAN Card Number (XXXXX9999X)
    const panCardPattern = /^[A-Z]{5}[0-9]{4}[A-Z]{1}$/;
    if (!panCardPattern.test(panCard)) {
        alert("Please enter a valid PAN card number.");
        return false;
    }

    // Validate Date of Birth
    if (!dob) {
        alert("Please select your Date of Birth.");
        return false;
    }

    // Validate Marks for subjects
    const marks = [subject1, subject2, subject3, subject4, subject5, subject6];
    for (let i = 0; i < marks.length; i++) {
        if (marks[i] < 0 || marks[i] > 100) {
            alert("Please enter valid marks between 0 and 100 for all subjects.");
            return false;
        }
    }

    // Calculate the Best of Five Subjects
    const subjectMarks = marks.map(Number); // Convert all marks to numbers
    subjectMarks.sort((a, b) => b - a); // Sort in descending order
    const bestFiveMarks = subjectMarks.slice(0, 5); // Take best five subjects
    const totalMarks = bestFiveMarks.reduce((acc, mark) => acc + mark, 0);
    const percentage = (totalMarks / 500) * 100;

    // Display the percentage
    const percentageDisplay = document.getElementById('percentageDisplay');
    percentageDisplay.innerHTML = `Best Five Subjects Total: ${totalMarks} / 500<br>Percentage: ${percentage.toFixed(2)}%`;

    return false; // Prevent form submission for demo purposes
}

