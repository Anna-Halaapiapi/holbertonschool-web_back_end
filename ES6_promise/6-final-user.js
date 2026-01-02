import { uploadPhoto } from "./utils";
import signUpUser from "./4-user-promise";

export default function handleProfileSignup(firstName, lastName, fileName) {
  // settles promises from called functions, and returns array in required format
  return Promise.allSettled([uploadPhoto(fileName), signUpUser(firstName, lastName)])
}
