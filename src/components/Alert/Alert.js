// @flow
import React from 'react';
import classnames from 'classnames';
import closeIcon from './close.svg';
import './Alert.scss';

type Props = {
  children: string,
  type: 'success' | 'error' | 'info',
  onClose: () => void
};

export default function Alert(props: Props) {
  return (
    <div className={classnames('Alert', `Alert--${props.type}`)}>
      {props.children}

      <a onClick={props.onClose} className="Alert__close-control">
        <img
          className="Alert__close-icon"
          src={closeIcon}
          alt="Cerrar"
          title="Cerrar"
        />
      </a>
    </div>
  );
}

Alert.defaultProps = {
  type: 'info'
};
