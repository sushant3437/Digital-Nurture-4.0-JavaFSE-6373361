
public class Main {
    public static void main(String[] args) {
       
        Logger logger1 = Logger.getInstance();
        logger1.log("Starting the application...");

        
        Logger logger2 = Logger.getInstance();
        logger2.log("Continuing the application...");

       
        if (logger1 == logger2) {
            System.out.println("Both logger1 and logger2 refer to the same instance.Singeleton Verified");
        } else {
            System.out.println("Different instances exist. Singleton pattern is NOT working.Singeleton Failed");
        }
    }
}
