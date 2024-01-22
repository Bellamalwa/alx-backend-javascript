// Returns a function that divides two numbers
/* When the denominator argument is equal to 0, the function should throw a new
error with the message cannot divide by 0. Otherwise it should return the
numerator divided by the denominator */
export default function divideFunction(numerator, denominator) {
  if (denominator === 0) {
    throw Error('cannot divide by 0');
  }

  const result = numerator / denominator;

  return result;
}
