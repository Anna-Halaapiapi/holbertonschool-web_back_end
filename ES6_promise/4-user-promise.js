export default function signUpUser(firstName, lastName) {
  // returns a resolved promise with specified object
    return Promise.resolve({
    firstName: firstName,
    lastName: lastName,
  });
}