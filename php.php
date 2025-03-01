<?php
// Define constants
define("NUMBER", 5);
define("PRINCIPAL", 1000);
define("RATE", 5);
define("TIME", 2);

// Function to check if a number is odd or even
function checkOddEven($num) {
    return ($num % 2 === 0) ? "Even" : "Odd";
}

// Function to calculate factorial
function factorial($num) {
    $fact = 1;
    for ($i = 1; $i <= $num; $i++) {
        $fact *= $i;
    }
    return $fact;
}

// Function to check if a number is prime
function isPrime($num) {
    if ($num < 2) return false;
    for ($i = 2; $i <= sqrt($num); $i++) {
        if ($num % $i === 0) {
            return false;
        }
    }
    return true;
}

// Function to calculate simple interest
function simpleInterest($p, $r, $t) {
    return ($p * $r * $t) / 100;
}

// Function to calculate compound interest
function compoundInterest($p, $r, $t) {
    return $p * pow(1 + $r / 100, $t) - $p;
}

// Perform all calculations
echo "Odd or Even: " . checkOddEven(NUMBER) . "<br>";
echo "Factorial: " . factorial(NUMBER) . "<br>";
echo "Is Prime: " . (isPrime(NUMBER) ? "Yes" : "No") . "<br>";
echo "Simple Interest: " . simpleInterest(PRINCIPAL, RATE, TIME) . "<br>";
echo "Compound Interest: " . compoundInterest(PRINCIPAL, RATE, TIME) . "<br>";
?>
