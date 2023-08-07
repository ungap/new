require('../index.js');

console.assert(Date.new(0) instanceof Date);

let constructTrap = false;
let result = (new Proxy(Date, {
  construct(target, args) {
    constructTrap = true;
    return new target(...args);
  }
})).new();

console.assert(constructTrap);
console.assert(result instanceof Date);
