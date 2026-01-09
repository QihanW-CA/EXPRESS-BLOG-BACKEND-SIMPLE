//I'm not sure if we should keep this functio cuz it seems a little stupid.
export function getCurrentTime() {
  return Date.now();
}

export function getCurrentTimeString() {
  return Date.now().toString();
}

export function stringToDate(string) {
  return Date.parse(string);
}
