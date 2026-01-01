export default function getFullResponseFromAPI(success) {
  // returns a promise with attributes if success is true, else raises error
  const aPromise = new Promise((resolve, reject) => {
    if (success === true) {
      resolve({status: 200, body: 'Success'});
    } else {
      reject(new Error('The fake API is not working currently'));
    }
  });
  return aPromise;
}
