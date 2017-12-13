// @flow
import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import Alert from './Alert';

storiesOf('Alert', module)
  .add('default', () => (
    <Alert onClose={action('close-alert')}>
      This is the default alert type
    </Alert>
  ))
  .add('success', () => (
    <Alert type="success" onClose={action('close-alert')}>
      Yay something great has happened :)
    </Alert>
  ))
  .add('error', () => (
    <Alert type="error" onClose={action('close-alert')}>
      Whoa something bad has happened :(
    </Alert>
  ))
  .add('long alert text', () => (
    <Alert type="error" onClose={action('close-alert')}>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Maecenas accumsan
      lacus vel facilisis volutpat est velit egestas dui. Augue mauris augue
      neque gravida in.
    </Alert>
  ));
