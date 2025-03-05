// src/LoanCalculator.js
import './App.css';
import React, { useState } from 'react';

const LoanCalculator = () => {
  const [loanAmount, setLoanAmount] = useState('');
  const [interestRate, setInterestRate] = useState('');
  const [loanTerm, setLoanTerm] = useState('');
  const [monthlyPayment, setMonthlyPayment] = useState(null);

  // Formula for calculating monthly payment
  const calculateMonthlyPayment = () => {
    const principal = parseFloat(loanAmount);
    const calculatedInterest = parseFloat(interestRate) / 100 / 12;
    const calculatedPayments = parseFloat(loanTerm) * 12;

    // Monthly payment formula
    const x = Math.pow(1 + calculatedInterest, calculatedPayments);
    const monthly = (principal*x*calculatedInterest)/(x-1);

    if (isNaN(monthly) || (monthly === Infinity)) {
      setMonthlyPayment('Invalid Input');
    } else {
      setMonthlyPayment(monthly.toFixed(2));
    }
  };

  return (
    <div>
      <h1>Loan Calculator</h1>
      <div>
        <label>Loan Amount:</label>
        <input
          type="number"
          value={loanAmount}
          onChange={(e) => setLoanAmount(e.target.value)}
          placeholder="Enter loan amount"
        />
      </div>
      <div>
        <label>Interest Rate (%) :</label>
        <input
          type="number"
          value={interestRate}
          onChange={(e) => setInterestRate(e.target.value)}
          placeholder="Enter interest rate"
        />
      </div>
      <div>
        <label>Loan Term (years):</label>
        <input
          type="number"
          value={loanTerm}
          onChange={(e) => setLoanTerm(e.target.value)}
          placeholder="Enter loan term in years"
        />
      </div>
      <div>
        <button onClick={calculateMonthlyPayment}>Calculate</button>
      </div>
      {monthlyPayment && (
        <div>
          <h2>Monthly Payment: Rs.{monthlyPayment}</h2>
        </div>
      )}
    </div>
  );
};

export default LoanCalculator;
