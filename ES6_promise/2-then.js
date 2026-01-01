export default function handleResponseFromAPI(promise) {
  // uses three handlers to handle promise
    return promise
      .then(() => { // handles resolved promise
        return {status: 200, body: 'success'};
      })
      .catch(error => { // handles rejected promise
        return Error();
      })
      .finally(() => { // for every resolution, logs msg to console
        console.log('Got a response from the API');
      });
}