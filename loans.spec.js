const getLoans = require("./loans");
const products = require("./loans.fixture.js")

describe("Quiz!", () => {
  it("Returns the correct loans", () => {
    const loanAmount = 15000;
    const maxInterest = 0.6;
    const months = 12;
    const loans = getLoans(products, loanAmount, maxInterest, months);

    expect(loans).toEqual([
      {
        interest: 0.55,
        monthlyPayment: 1256.875,
        provider: "HSBC",
        totalToRepay: 15082.5
      },
      {
        interest: 0.3,
        monthlyPayment: 1253.75,
        provider: "Natwest",
        totalToRepay: 15045
      },
      {
        interest: 0.5,
        monthlyPayment: 1256.25,
        provider: "TSB",
        totalToRepay: 15075
      }
    ]);
  });

  it("Returns the correct loans", () => {
    const loanAmount = 26000;
    const maxInterest = 0.5;
    const months = 20;
    const loans = getLoans(products, loanAmount, maxInterest, months);

    expect(loans).toEqual([
      {
        interest: 0.3,
        monthlyPayment: 1303.9,
        provider: "Natwest",
        totalToRepay: 26078
      }
    ]);
  });
});
