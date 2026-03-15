# Web Calculator

A browser-based **scientific-style calculator** built with **JavaScript, HTML, and CSS**. The project implements a custom expression parser and evaluation engine capable of handling complex mathematical input beyond basic calculator functionality.

Try it:  
https://michaelgalloway404.github.io/Calculator/

## Overview

This calculator was developed to improve on a basic **stack-based Python calculator assignment** by adding a graphical interface and a more flexible expression parser. The application supports advanced mathematical input including parentheses, negative numbers, square roots, exponents, and implicit multiplication (e.g., `3(9)`).

The interface provides interactive buttons, sound feedback, and real-time expression display.

## Key Features

- **Custom expression parser** built in JavaScript
- Supports **parentheses, exponents, square roots, modulus, and negative numbers**
- Handles **implicit multiplication** (e.g., `3(9)` or `8√(3)`)
- **Graphical calculator interface**
- **Button animations and sound feedback**
- **Error handling** for invalid expressions

## Technical Highlights

- Mathematical expressions converted from **strings to token arrays**
- **Stack-based evaluation system** for computing expressions
- Operator precedence handling for:
  - Exponents
  - Modulus
  - Multiplication / Division
  - Addition / Subtraction
- Recursive evaluation of **nested parentheses**
- Dynamic UI updates through **DOM manipulation**

## Technologies Used

- JavaScript
- HTML
- CSS

## Author

Michael Galloway  
