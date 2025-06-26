CREATE TABLE Accounts (
    AccountID NUMBER PRIMARY KEY,
    CustomerID NUMBER,
    AccountType VARCHAR2(20), 
    Balance NUMBER
);

CREATE TABLE Employees (
    EmpID NUMBER PRIMARY KEY,
    Name VARCHAR2(100),
    Department VARCHAR2(50),
    Salary NUMBER
);

INSERT INTO Accounts VALUES (101, 1, 'Savings', 1000);
INSERT INTO Accounts VALUES (102, 2, 'Savings', 2000);
INSERT INTO Accounts VALUES (103, 3, 'Current', 3000);

INSERT INTO Employees VALUES (1, 'Sushant', 'Sales', 50000);
INSERT INTO Employees VALUES (2, 'Sanket', 'HR', 55000);
INSERT INTO Employees VALUES (3, 'Hrushi', 'Sales', 60000);



-- Scenario 1: ProcessMonthlyInterest Procedure

CREATE OR REPLACE PROCEDURE ProcessMonthlyInterest AS
BEGIN
  UPDATE Accounts
  SET Balance = Balance + (Balance * 0.01)
  WHERE AccountType = 'Savings';
  COMMIT;
END;

EXEC ProcessMonthlyInterest;



-- Scenario 2: UpdateEmployeeBonus Procedure

CREATE OR REPLACE PROCEDURE UpdateEmployeeBonus (
  p_department IN VARCHAR2,
  p_bonus_pct IN NUMBER
) AS
BEGIN
  UPDATE Employees
  SET Salary = Salary + (Salary * (p_bonus_pct / 100))
  WHERE Department = p_department;
  COMMIT;
END;

EXEC UpdateEmployeeBonus('Sales', 10);
EXEC UpdateEmployeeBonus('HR', 10);



-- Scenario 3: TransferFunds Procedure

CREATE OR REPLACE PROCEDURE TransferFunds (
  p_from_account IN NUMBER,
  p_to_account IN NUMBER,
  p_amount IN NUMBER
) AS
  v_balance NUMBER;
BEGIN
  SELECT Balance INTO v_balance FROM Accounts WHERE AccountID = p_from_account;

  IF v_balance < p_amount THEN
    RAISE_APPLICATION_ERROR(-20001, 'Insufficient balance.');
  END IF;

  UPDATE Accounts
  SET Balance = Balance - p_amount
  WHERE AccountID = p_from_account;

  UPDATE Accounts
  SET Balance = Balance + p_amount
  WHERE AccountID = p_to_account;

  COMMIT;
END;

EXEC TransferFunds(101, 102, 500);
EXEC TransferFunds(101, 102, 5000);


Select * from Accounts;

Select * from Employees;