CREATE TABLE Customers (
    CustomerID NUMBER PRIMARY KEY,
    Name VARCHAR2(100),
    Age NUMBER,
    LoanInterestRate NUMBER,
    Balance NUMBER,
    IsVIP CHAR(1)
);

CREATE TABLE Loans (
    LoanID NUMBER PRIMARY KEY,
    CustomerID NUMBER,
    DueDate DATE,
    FOREIGN KEY (CustomerID) REFERENCES Customers(CustomerID)
);

INSERT INTO Customers VALUES (1, 'Sushnat', 65, 9.5, 15000, 'N');
INSERT INTO Customers VALUES (2, 'Amruta', 45, 10.0, 8000, 'N');
INSERT INTO Customers VALUES (3, 'Anirud', 70, 8.5, 11000, 'N');
INSERT INTO Customers VALUES (4, 'Abhishek', 30, 11.0, 9500, 'N');

INSERT INTO Loans VALUES (101, 1, SYSDATE + 10);
INSERT INTO Loans VALUES (102, 2, SYSDATE + 40);
INSERT INTO Loans VALUES (103, 3, SYSDATE + 5); 
INSERT INTO Loans VALUES (104, 4, SYSDATE + 20); 

-- Scenario 1: Apply 1% Discount for Age > 60
BEGIN
  FOR rec IN (SELECT CustomerID, Age FROM Customers) LOOP
    IF rec.Age > 60 THEN
      UPDATE Customers
      SET LoanInterestRate = LoanInterestRate - 1
      WHERE CustomerID = rec.CustomerID;
    END IF;
  END LOOP;
  COMMIT;
END;

-- Scenario 2: Promote Customers to VIP
BEGIN
  FOR rec IN (SELECT CustomerID, Balance FROM Customers) LOOP
    IF rec.Balance > 10000 THEN
      UPDATE Customers
      SET IsVIP = 'Y'
      WHERE CustomerID = rec.CustomerID;
    END IF;
  END LOOP;
  COMMIT;
END;

-- Scenario 3: Reminders for Loans Due in 30 Days
BEGIN
  FOR rec IN (
    SELECT LoanID, CustomerID, DueDate
    FROM Loans
    WHERE DueDate BETWEEN SYSDATE AND SYSDATE + 30
  ) LOOP
    DBMS_OUTPUT.PUT_LINE('Reminder: Loan ID ' || rec.LoanID ||
                         ' for Customer ' || rec.CustomerID ||
                         ' is due on ' || TO_CHAR(rec.DueDate, 'DD-Mon-YYYY'));
  END LOOP;
END;


SELECT * FROM Customers;

SELECT * FROM Loans;