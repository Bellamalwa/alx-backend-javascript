export default function guardrail(mathFunction) {
  const array = []; // create an empty array

  try { // try to run the function and push the result to the array
    array.push(mathFunction());
  } catch (err) { // if the function throws an error, push the error to the array
    array.push(err.toString());
  } finally { // always push the finally result to the array
    array.push('Guardrail was processed');
  }
  return array; // return the array
}
