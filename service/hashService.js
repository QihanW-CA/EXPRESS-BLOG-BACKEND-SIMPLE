import { hash as _hash } from "bcrypt";
const saltRound = 10;

//The function to hash everything you need to hash.
export async function contentToHash(content) {
  const hash = await _hash(content, saltRound);
  if (!hash) return new Error("Failed to hash content");
  return hash;
}
