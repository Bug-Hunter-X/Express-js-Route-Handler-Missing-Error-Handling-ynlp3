# Express.js Route Handler Missing Error Handling

This repository demonstrates a common error in Express.js route handlers: missing error handling for invalid input.

The `bug.js` file contains the erroneous code, which fails to handle cases where a user ID is invalid, leading to unexpected behavior.

The `bugSolution.js` file provides a corrected version with proper error handling, including sending appropriate HTTP status codes.