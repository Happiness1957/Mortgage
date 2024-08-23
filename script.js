document
  .getElementById("mortgageForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    let principal = parseFloat(document.getElementById("mortgage").value);
    let annualRate = parseFloat(document.getElementById("interestRate").value);
    let years = parseFloat(document.getElementById("years").value);

    if (
      isNaN(principal) ||
      isNaN(annualRate) ||
      isNaN(years) ||
      mortgage <= 0 ||
      interestRate <= 0 ||
      years <= 0
    ) {
      document.getElementById("errorMessage").innerText =
        "Please fill out all fields correctly.";
      return;
    } else {
      document.getElementById("errorMessage").innerText = "";
    }

    let monthlyRate = interestRate / 100 / 12;
    let numberOfPayments = years * 12;
    let monthlyRepayment =
      (mortgage * monthlyRate) /
      (1 - Math.pow(1 + monthlyRate, -numberOfPayments));
    let totalRepayment = monthlyRepayment * numberOfPayments;

    document.getElementById("monthlyRepayment").innerText =
      monthlyRepayment.toFixed(2);
    document.getElementById("totalRepayment").innerText =
      totalRepayment.toFixed(2);
  });
