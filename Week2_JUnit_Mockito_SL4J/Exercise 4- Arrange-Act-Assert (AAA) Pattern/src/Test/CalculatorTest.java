package Test;

import static org.junit.Assert.*;
import org.junit.Before;
import org.junit.After;
import org.junit.Test;

import Main.Calculator;

public class CalculatorTest {

    private Calculator calculator;

    @Before
    public void setUp() {
        System.out.println(" Setting up test case...");
        calculator = new Calculator(); 
    }

    @After
    public void tearDown() {
        System.out.println(" Cleaning up after test case...");
        calculator = null;
    }

    @Test
    public void testAddition() {
        // Act
        int result = calculator.add(4, 3);

        // Assert
        assertEquals(7, result);
        System.out.println(" testAddition passed.");
    }

    @Test
    public void testSubtraction() {
        // Act
        int result = calculator.subtract(10, 5);

        // Assert
        assertEquals(5, result);
        System.out.println(" testSubtraction passed.");
    }
}
