var _init_a, _init_b, _computedKey, _init_computedKey, _class;
const dec = () => {};
_computedKey = 'c';
class Foo {
  constructor() {
    babelHelpers.defineProperty(this, "a", _init_a(this));
    babelHelpers.defineProperty(this, "b", _init_b(this, 123));
    babelHelpers.defineProperty(this, _computedKey, _init_computedKey(this, 456));
  }
}
_class = Foo;
[_init_a, _init_b, _init_computedKey] = babelHelpers.applyDecs2305(_class, [[dec, 0, "a"], [dec, 0, "b"], [dec, 0, _computedKey]], []).e;
