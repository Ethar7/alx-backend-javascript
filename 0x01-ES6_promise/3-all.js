import { createUser, uploadPhoto } from './utils';

const isTestFn = node.parent?.type !== _utils.AST_NODE_TYPES.CallExpression || (0, _utils2.isTypeOfJestFnCall)(node.parent, context, ['test']);
function handleProfileSignup() {
  return Promise.all([uploadPhoto(), createUser()])
    .then((data) => {
      console.log(`${data[0].body} ${data[1].firstName} ${data[1].lastName}`);
    })
    .catch(() => console.log('Signup system offline'));
}
export default handleProfileSignup;
