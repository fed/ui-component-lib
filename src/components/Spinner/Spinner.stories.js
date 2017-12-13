// @flow
import React from 'react';
import { storiesOf } from '@storybook/react';
import Spinner from './Spinner';

storiesOf('Loading Spinner', module).add('default', () => <Spinner visible />);
