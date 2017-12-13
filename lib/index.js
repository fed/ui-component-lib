'use strict';

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = _interopDefault(require('react'));

function example() {
  console.log('[isos-dashboard-ui] this is an example');
}

var logo = "/node_modules/isos-dashboard-ui/lib/5fea9d6a9ba0c7aa.jpg";

function Foo() {
  return React.createElement(
    'div',
    { className: 'Foo' },
    React.createElement(
      'p',
      null,
      'I\'m Foo! A sample component loaded via ',
      React.createElement(
        'a',
        { href: '#' },
        'ui-lib'
      )
    ),
    React.createElement('img', { src: logo, alt: '' })
  );
}

var closeIcon = "data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%228%22%20height%3D%228%22%20viewBox%3D%220%200%2016%2016%22%3E%20%20%3Cg%20id%3D%22Icon_NotificationClose%22%3E%20%20%20%20%3Cpath%20id%3D%22Icon%22%20fill%3D%22%23ffffff%22%20d%3D%22M254.723%2C246.693L249.417%2C252l5.275%2C5.275a1%2C1%2C0%2C1%2C1-1.416%2C1.417L248%2C253.417l-5.275%2C5.275a1%2C1%2C0%2C0%2C1-1.417-1.417L246.583%2C252l-5.306-5.307a1%2C1%2C0%2C0%2C1%2C1.416-1.416L248%2C250.583l5.307-5.306A1%2C1%2C0%2C0%2C1%2C254.723%2C246.693Z%22%20transform%3D%22translate%28-240%20-244%29%22%2F%3E%20%20%3C%2Fg%3E%3C%2Fsvg%3E";

function Alert(props) {
  return React.createElement(
    'div',
    { className: 'Alert Alert--' + props.type },
    props.children,
    React.createElement(
      'a',
      { onClick: props.onClose, className: 'Alert__close-control' },
      React.createElement('img', {
        className: 'Alert__close-icon',
        src: closeIcon,
        alt: 'Cerrar',
        title: 'Cerrar'
      })
    )
  );
}

Alert.defaultProps = {
  type: 'info'
};

var spinnerImage = "/node_modules/isos-dashboard-ui/lib/36b2bcb6229e02ed.png";

function Spinner(props) {
  return props.visible && React.createElement(
    'div',
    { className: 'Spinner' },
    React.createElement(
      'div',
      { className: 'Spinner__image-wrapper' },
      React.createElement('img', { src: spinnerImage, className: 'Spinner__image', alt: 'Cargando' })
    )
  );
}

module.exports = {
  example: example,
  Foo: Foo,
  Alert: Alert,
  Spinner: Spinner
};
