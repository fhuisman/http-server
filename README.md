# HTTP Server with Node.js and TypeScript

This project is a simple HTTP server built using Node.js and TypeScript. It exposes two endpoints:

1. `/ok` - Returns a status code of 200 OK.
2. `/double` - Accepts a number as a query parameter and returns that number multiplied by two.

## How to Use

### Prerequisites
Make sure you have the following installed:
- [Node.js](https://nodejs.org/) (version 14 or above)
- [npm](https://npmjs.com/)

### Setup

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
