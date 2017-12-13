import React from 'react';
import logo from './logo.jpg';
import './Foo.scss';

export default function Foo() {
  return (
    <div className="Foo">
      <p>
        I'm Foo! A sample component loaded via <a href="#">ui-lib</a>
      </p>

      <img src={logo} alt="" />
    </div>
  );
}
