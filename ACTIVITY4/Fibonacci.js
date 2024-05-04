function generateFibonacci() {
    var numTermsInput = document.getElementById("numTerms").value;
    var errorMsg = document.getElementById("error-msg");
    var sequenceOutput = document.getElementById("fibonacci-sequence");

    // Clear previous error messages
    errorMsg.textContent = "";

    // Check if input is a valid integer and less than 100
    if (isNaN(numTermsInput) || numTermsInput === "" || parseInt(numTermsInput) !== parseFloat(numTermsInput) || parseInt(numTermsInput) >= 100) {
        errorMsg.textContent = "Please enter a valid integer less than 100.";
        sequenceOutput.textContent = "";
        return;
    }

    // Convert input to integer
    var numTerms = parseInt(numTermsInput);

    // Generate Fibonacci series
    var fibonacciSeries = [];
    var firstTerm = 0;
    var secondTerm = 1;

    for (var i = 0; i < numTerms; i++) {
        fibonacciSeries.push(firstTerm);
        var nextTerm = firstTerm + secondTerm;
        firstTerm = secondTerm;
        secondTerm = nextTerm;
    }

    // Display Fibonacci series
    sequenceOutput.textContent = "Fibonacci Series: " + fibonacciSeries.join(", ");
}
