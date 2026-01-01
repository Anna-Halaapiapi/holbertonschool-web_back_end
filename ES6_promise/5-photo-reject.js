export default function uploadPhoto(fileName) {
  // returns Promise rejecting with Error
  return Promise.reject(new Error(`${fileName} cannot be processed`));
}