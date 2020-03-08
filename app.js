// login button event handler
const loginBtn = document.getElementById("button");
loginBtn.addEventListener("click", function() {
  const loginArea = document.getElementById("login-area");
  loginArea.style.display = "none";
  const transactionArea = document.getElementById("transaction-area");
  transactionArea.style.display = "block";
});

// deposit button event handler
const depositAdd = document.getElementById("addDeposit");
depositAdd.addEventListener("click", function() {
  const depositAmountNumber = inputValue("depositCurrent");

  // const depositedMoney = document.getElementById("depositedAmount")
  //   .innerText;
  // const depositedMoneyNumber = parseFloat(depositedMoney);
  // const totalDeposit = depositAmountNumber + depositedMoneyNumber;
  // document.getElementById("depositedAmount").innerText = totalDeposit;

  updateSpanText("depositedAmount", depositAmountNumber);
  updateSpanText("currentBalance", depositAmountNumber);
  document.getElementById("depositCurrent").value = "";
});

//withdrow button event handler
const withdrowBtn = document.getElementById("withdrowMoney");
withdrowBtn.addEventListener("click", function() {
  //to get value from withdrow input text by a user
  const withdrowAmountNumber = inputValue("withdrowAmount");

  //to putting the value from user to withdrow area
  updateSpanText("withdrowAfter", withdrowAmountNumber);

  // showing final balance after withdrowing money
  updateSpanText("currentBalance", -1 * withdrowAmountNumber);

  // to make input field empty after taking value from user once
  document.getElementById("withdrowAmount").value = "";
});

// It takes the user input and makes the string to float and return final value.
function inputValue(id) {
  const stringValue = document.getElementById(id).value;
  const value = parseFloat(stringValue);
  return value;
}
// the function that take id from the place where it needs to change its value/innertext and makes string value to float and finally put the value to the place of id.
function updateSpanText(id, data) {
  const valueOfId = document.getElementById(id).innerText;
  const value = parseFloat(valueOfId);
  const totalValue = value + data;
  document.getElementById(id).innerText = totalValue;
}
