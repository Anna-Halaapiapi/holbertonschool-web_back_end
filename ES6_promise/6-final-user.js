import uploadPhoto from "./5-photo-reject";
import signUpUser from "./4-user-promise";

export default function handleProfileSignup(firstName, lastName, fileName) {
  // settles promises from called functions, and returns array in required format
  return Promise.allSettled([signUpUser(firstName, lastName), uploadPhoto(fileName)])
    .then((results) => {
      return results.map((result) => {
        if (result.status === 'rejected') { // for rejected status - change reason to value
          return {status: result.status, value: result.reason.toString()};
      } else { // for fulfilled status - keep same as obj in results arr
          return {status: result.status, value: result.value};
      }
    });
  });
}
