# Matrix Operations Unit Testing (Mocha & Chai)

This repository contains automated unit tests for the [Mtrx](https://github.com/zhufuge/Mtrx) matrix library using Node.js, Mocha, and Chai.

## Overview

The test suite covers:
- Matrix instantiation and base properties (identity, zeros, 2D array parsing).
- Matrix arithmetic operations (addition, multiplication, dimension compatibility validation).
- Matrix transformations (transposition).

## Tech Stack

- **Runtime**: Node.js
- **Test Runner**: Mocha (`^12.0.3`)
- **Assertion Library**: Chai (`^4.5.0`, BDD `expect` interface)
- **Target Library**: Mtrx (`^0.1.6`)

## Setup & Execution

1. Clone the repository:
   ```bash
   git clone <repository_url>
   cd <repository_folder>

   Install dependencies:
   npm install

   Run the test suite:
   npm test
