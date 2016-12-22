import React from 'react';
import SliderSmile from '../SliderSmile.jsx';
import { storiesOf, action } from '@kadira/storybook';

storiesOf('SliderSmile', module)

  .add('test', () => {

      return(<SliderSmile/>);
  });