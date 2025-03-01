const express = require("express");
const app = express();

// Define a constant number for calculations
const NUMBER = 5;
const PRINCIPAL = 1000;
const RATE = 5;
const TIME = 2;

// Check if the constant number is odd or even
app.get("/check", (req, res) => {
	const result = NUMBER % 2 === 0 ? "Even" : "Odd";
	res.json({ number: NUMBER, result: result });
});

// Calculate factorial of the constant number
app.get("/factorial", (req, res) => {
	let factorial = 1;
	for (let i = 1; i <= NUMBER; i++) {
		factorial *= i;
	}
	res.json({ number: NUMBER, factorial: factorial });
});

// Check if the constant number is prime
app.get("/prime", (req, res) => {
	let isPrime = true;
	if (NUMBER < 2) isPrime = false;
	for (let i = 2; i <= Math.sqrt(NUMBER); i++) {
		if (NUMBER % i === 0) {
			isPrime = false;
			break;
		}
	}
	res.json({ number: NUMBER, isPrime: isPrime });
});

// Calculate simple interest using constant values
app.get("/simple-interest", (req, res) => {
	const SI = (PRINCIPAL * RATE * TIME) / 100;
	res.json({
		principal: PRINCIPAL,
		rate: RATE,
		time: TIME,
		simpleInterest: SI,
	});
});

// Calculate compound interest using constant values
app.get("/compound-interest", (req, res) => {
	const CI = PRINCIPAL * Math.pow(1 + RATE / 100, TIME) - PRINCIPAL;
	res.json({
		principal: PRINCIPAL,
		rate: RATE,
		time: TIME,
		compoundInterest: CI,
	});
});

// Default route
app.get("/", (req, res) => {
	res.send(
		"Welcome to Math API! Available routes: /check, /factorial, /prime, /simple-interest, /compound-interest"
	);
});

// Start the server
const PORT = 5000;
app.listen(PORT, () => {
	console.log(`Server running on http://localhost:${PORT}`);
});
