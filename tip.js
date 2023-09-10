let btn = document.getElementById("btn");
btn.addEventListener("cick", function() {
    let billAmount = document.getElementById("bill_amount").value;
    let tipPercentage = document.getElementById("tip_percentage").value;

    let tipAmount = document.getElementById("tip_amount") = (billAmount / 100) * tipPercentage;
    document.getElementById("total_bill").value = parseFloat(billAmount) + parseFloat(tipAmount);
});
