export default function guardrail(mathFunction) {
  const queue = [];
  var res;
  try {
    res = mathFunction();
  } catch (error) {
    res = `Error: ${error.message}`;
  }
  queue.push(res);
  queue.push('Guardrail was processed');

  return queue;
}  
