//
//
//
//
//
//________ 58. Error Handler Middleware ________
//
//
//
//
//
//

// 12: class ErrorHandler extends Error {
class ErrorHandler extends Error {
  // 12: constructor(message, statusCode) {
  constructor(message, statusCode) {
    // 12: super(message);
    super(message);

    // 12: this.statusCode = statusCode;
    this.statusCode = statusCode;
  }
}

//N 12: export default ErrorHandler;   IDEMO u user.js(controllers)
export default ErrorHandler;
