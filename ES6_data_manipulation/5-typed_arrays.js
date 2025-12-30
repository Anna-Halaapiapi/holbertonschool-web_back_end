export default function createInt8TypedArray (length, position, value) {
  // returns a new ArrayBuffer with an Int8 value at a specific position
  const buffer = new ArrayBuffer(length); //create array buffer/memory
  const view = new DataView(buffer); // create a Dataview to access buffer
  try {
  view.setInt8(position, value); // write to the buffer using the dataview
  } catch (error) {
    throw new Error('Position outside range');
  }
  return view;
}
