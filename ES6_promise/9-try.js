export default function guardrail(mathFunction) {
  // creates and returns an array named queue
  const queue = []; // create queue array

  try {
    queue.push(mathFunction()); // execute func and appends result to queue
  } catch (error) { // if error, append err msg to queue
    queue.push(error.message);
  } finally {
    queue.push('Guardrail was processed'); // add message in every case 
  } 
  return queue; // return queue array
}