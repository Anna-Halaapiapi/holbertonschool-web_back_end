export default function loadBalancer(chinaDownload, USDownload) {
  // return the value returned by the promise that resolved first
  return Promise.race([chinaDownload, USDownload])
    .then(result => {
      return result;
    });
}