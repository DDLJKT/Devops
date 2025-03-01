import math

# Constants
NUMBER = 5
PRINCIPAL = 1000
RATE = 5
TIME = 2

# Function to check if a number is odd or even
def check_odd_even(num):
    return "Even" if num % 2 == 0 else "Odd"

# Function to calculate factorial
def factorial(num):
    fact = 1
    for i in range(1, num + 1):
        fact *= i
    return fact

# Function to check if a number is prime
def is_prime(num):
    if num < 2:
        return False
    for i in range(2, int(math.sqrt(num)) + 1):
        if num % i == 0:
            return False
    return True

# Function to calculate simple interest
def simple_interest(p, r, t):
    return (p * r * t) / 100

# Function to calculate compound interest
def compound_interest(p, r, t):
    return p * (pow((1 + r / 100), t)) - p

# Perform all calculations and print results
print(f"Number: {NUMBER}")
print(f"Odd or Even: {check_odd_even(NUMBER)}")
print(f"Factorial: {factorial(NUMBER)}")
print(f"Is Prime: {'Yes' if is_prime(NUMBER) else 'No'}")
print(f"Simple Interest: {simple_interest(PRINCIPAL, RATE, TIME)}")
print(f"Compound Interest: {compound_interest(PRINCIPAL, RATE, TIME)}")
