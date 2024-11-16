# HTTP Server

This project is a simple HTTP server built using Node.js and TypeScript. It handles two GET requests:

1. `/ok`: Responds with a status of 200 OK.
2. `/double`: Accepts a `number` query parameter and returns the number multiplied by two.

## Features

- Handles multiple HTTP endpoints.
- TypeScript for type safety and maintainability.
- Unit tests for verifying functionality using Jest and Supertest.

## Requirements

- Node.js (v16 or later)
- npm or yarn
- TypeScript

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/fhuisman/http-server.git
   cd http-server
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Compile TypeScript to JavaScript:
   ```bash
   npm run build
   ```
4. Start the server:
   ```bash
   npm run start
   ```
The server will start running on http://localhost:3000.

## Endpoints
### GET /ok
Returns a 200 OK status.  
Example:
   ```bash
   http://localhost:3000/ok
   ```

### GET /double?number=\<value>
Accepts a number query parameter, multiplies it by 2, and returns the result as JSON.  
Example:
  ```bash
  http://localhost:3000/double?number=5
  ```
Response:
  ```json
  { "result": 10 }
  ```
If the number query parameter is not provided or is not a valid number, it will return an error:  
Example:
  ```bash
  http://localhost:3000/double?number=abc
  ```
Response:
  ```json
  { "error": "Please provide a valid number." }
  ```

## Error Handling
### 404 Not Found
If an unknown route is requested, the server will return a 404 error with the message:
  ```json
  { "error": "Not found." }
  ```

## Running Tests
This project includes unit tests written with Jest and Supertest.
### Run the tests:
   ```bash
   npm test
   ```
Example output:
   ```bash
   PASS  test/server.test.ts
     HTTP Server
       ✓ should return 200 for /ok (30ms)
       ✓ should return 400 if number is missing in /double (10ms)
       ✓ should return the doubled number for /double (5ms)
       ✓ should return 404 for unknown paths (5ms)
   ```

## Development
### Start the TypeScript compiler in watch mode:
   ```bash
   npm run dev
   ```
Edit your files in the src folder. The compiled JavaScript will be output to the dist folder.

## Folder Structure
src/: TypeScript source files.  
dist/: Compiled JavaScript files (generated after running npm run build).  
test/: Unit test files.
