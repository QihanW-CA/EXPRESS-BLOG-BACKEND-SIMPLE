class ErrorModel {
  constructor(message, status, type) {
    this.obj = {
      message: message,
      status_code: status,
      type: type,
    };
  }
}
module.exports = ErrorModel;
