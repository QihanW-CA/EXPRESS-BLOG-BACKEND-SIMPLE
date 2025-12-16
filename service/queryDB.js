import { bios } from "../model/fakeDB.json";
import { users } from "../model/fakeDB.json";
import { contentToHash as hashPassword } from "../service/hashService";

//Internal functions

//Get the password by username. WARNNING:Use as internale function.
function getPasswordByName(username) {
  return users.find((u) => u.username === username).password;
}

//Export functions

//Check username
export function checkUsername(username) {
  const result = username
    ? users.find((user) => user.username === username)
    : new Error("User is not exists");

  return result;
}

//Return hash password
export async function getHashPasswordByName(username) {
  const hash = await hashPassword(getHashPasswordByName(username));
  if (!hash) return new Error("Fail to get hash password!");

  return hash;
}
//Get the user bio by their ID.
export function getBioById(id) {
  const result = id
    ? bios.find((bio) => bio.userID === id)
    : new Error("User id required!");

  return result;
}
