describe('BankAccount', function() {
  it("creates a new bank account with a specified initial deposit", function() {
    var testBankAccount = new BankAccount("Jesse James", 100, "Checking");
    expect(testBankAccount.fullName).to.equal("Jesse James");
    expect(testBankAccount.depositAmount).to.equal(100);
    expect(testBankAccount.bankType).to.eql("Checking");
  });
});
