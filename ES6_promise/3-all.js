import { uploadPhoto, createUser } from "./utils";

export default function handleProfileSignup() {
  // collectively resolve all promises
  return Promise.all([uploadPhoto(), createUser()])
  .then((result) => {
    console.log(`${result[0].body} ${result[1].firstName} ${result[1].lastName}`);
  })
  .catch((error) => {
    console.log('Signup system offline');
  });
}
