package Test;

import static org.junit.Assert.assertEquals;
import org.junit.Test;
import Main.Calculator;


public class CalculatorTest {
	  @Test
	    public void testAdd() {
	        Calculator calc = new Calculator();
	        assertEquals(10, calc.add(6, 4));
	    }
	  
	  @Test
	    public void testAdd_case02() {
	        Calculator calc = new Calculator();
	        assertEquals(10, calc.add(7, 3));
	    }

	    @Test
	    public void testAdd_case03() {
	        Calculator calc = new Calculator();
	        assertEquals(1, calc.add(-2, 3));
}
}
