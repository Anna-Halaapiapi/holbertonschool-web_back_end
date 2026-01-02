export default function divideFunction(numerator, denominator) {
  // returns numerator divided by denominator
  if (denominator === 0) {
    throw new Error('cannot divide by 0');
  }
  return numerator / denominator;
}