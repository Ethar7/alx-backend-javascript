"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _utils3 = require("./utils");
var _node$parent;
const isTestFn = ((_node$parent = node.parent) === null || _node$parent === void 0 ? void 0 : _node$parent.type) !== _utils.AST_NODE_TYPES.CallExpression || (0, _utils2.isTypeOfJestFnCall)(node.parent, context, ['test']);
function handleProfileSignup() {
  return Promise.all([(0, _utils3.uploadPhoto)(), (0, _utils3.createUser)()]).then(data => {
    console.log(`${data[0].body} ${data[1].firstName} ${data[1].lastName}`);
  }).catch(() => console.log('Signup system offline'));
}
var _default = exports.default = handleProfileSignup;
