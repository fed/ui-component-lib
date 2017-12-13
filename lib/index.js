'use strict';

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = _interopDefault(require('react'));

function example() {
  console.log('[isos-dashboard-ui] this is an example');
}

function Foo() {
  return React.createElement(
    'div',
    { className: 'Foo' },
    'I\'m Foo! A sample component loaded via ',
    React.createElement(
      'a',
      { href: '#' },
      'isos-dashboard-ui'
    )
  );
}

module.exports = {
  Foo: Foo,
  example: example
};
