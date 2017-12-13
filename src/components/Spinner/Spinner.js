// @flow
import React from 'react';
import spinnerImage from './spinner.png';
import './Spinner.scss';

type Props = {
  visible: boolean
};

export default function Spinner(props: Props) {
  return (
    props.visible && (
      <div className="Spinner">
        <div className="Spinner__image-wrapper">
          <img src={spinnerImage} className="Spinner__image" alt="Cargando" />
        </div>
      </div>
    )
  );
}
