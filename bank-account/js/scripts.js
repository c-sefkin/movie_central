function BankAccount(fullName, balanceAmount, bankType) {
  this.fullName = fullName;
  this.balanceAmount = balanceAmount;
  this.bankType = bankType;
}

BankAccount.prototype.deposit = function() {
  var inputtedDeposit = parseInt($("input#new-deposit").val())
  this.balanceAmount += inputtedDeposit;
}

BankAccount.prototype.withdraw = function() {
  var inputtedwithdrawal = parseInt($("input#new-withdrawal").val())
  this.balanceAmount -= inputtedwithdrawal;
}

function resetFields() {
  $("input#new-deposit").val("");
  $("input#new-withdrawal").val("");
}

function bankAccountInfo() {
  $("h1#title").append( "<ul>" + "<li>Acount Owner:  " + newBankAccount.fullName + "</li>" +
                        "<li>Account Type:  " + newBankAccount.bankType + "</li>" +
                        "</ul>");
}

$(document).ready(function(){

  $("form#new-account").submit(function(event){
    event.preventDefault();
    var inputtedFullName = $(this).find("input#new-account-owner").val();
    var inputtedAccountType = $(this).find("input#new-account-type").val();
    var inputtedStartingBalance = parseInt($(this).find("input#new-starting-balance").val());
    var newBankAccount = new BankAccount(inputtedFullName, inputtedStartingBalance, inputtedAccountType);
    $("h3#accountBalance").text(newBankAccount.balanceAmount);
    $("div#new-account").hide();
    $("h1#title").append( "<ul>" + "<li>Acount Owner:  " + newBankAccount.fullName + "</li>" +
                          "<li>Account Type:  " + newBankAccount.bankType + "</li>" +
                          "</ul>");
    $("form#new-deposit").submit(function(event){
      event.preventDefault();
      var inputtedDeposit = $(this).find("input#new-deposit").val();
      newBankAccount.deposit();
      $("h3#accountBalance").text(newBankAccount.balanceAmount);
      resetFields()
    });
    $("form#new-withdrawal").submit(function(event){
      event.preventDefault();
      var inputtedWithdrawal = $(this).find("input#new-withdrawal").val();
      newBankAccount.withdraw();
      $("h3#accountBalance").text(newBankAccount.balanceAmount);
      resetFields()
    });
  });
});
