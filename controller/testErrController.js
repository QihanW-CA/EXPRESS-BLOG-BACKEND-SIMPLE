export function getTestError(req, res, next) {
  throw new Error("Error from controller!");
}
