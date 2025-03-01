public class MathOperations {
    // Constants
    static final int NUMBER = 5;
    static final double PRINCIPAL = 1000;
    static final double RATE = 5;
    static final int TIME = 2;

    // Function to check if a number is odd or even
    static String checkOddEven(int num) {
        return (num % 2 == 0) ? "Even" : "Odd";
    }

    // Function to calculate factorial
    static long factorial(int num) {
        long fact = 1;
        for (int i = 1; i <= num; i++) {
            fact *= i;
        }
        return fact;
    }

    // Function to check if a number is prime
    static boolean isPrime(int num) {
        if (num < 2) return false;
        for (int i = 2; i <= Math.sqrt(num); i++) {
            if (num % i == 0) {
                return false;
            }
        }
        return true;
    }

    // Function to calculate simple interest
    static double simpleInterest(double p, double r, int t) {
        return (p * r * t) / 100;
    }

    // Function to calculate compound interest
    static double compoundInterest(double p, double r, int t) {
        return p * Math.pow(1 + r / 100, t) - p;
    }

    // Main method
    public static void main(String[] args) {
        System.out.println("Number: " + NUMBER);
        System.out.println("Odd or Even: " + checkOddEven(NUMBER));
        System.out.println("Factorial: " + factorial(NUMBER));
        System.out.println("Is Prime: " + (isPrime(NUMBER) ? "Yes" : "No"));
        System.out.println("Simple Interest: " + simpleInterest(PRINCIPAL, RATE, TIME));
        System.out.println("Compound Interest: " + compoundInterest(PRINCIPAL, RATE, TIME));
    }
}
