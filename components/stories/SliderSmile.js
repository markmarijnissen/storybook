import React from 'react';
import SliderSmile from '../SliderSmile.jsx';
import { storiesOf, action } from '@kadira/storybook';

storiesOf('SliderSmile', module)

  .add('forward-popUp', () => {
      const min = 0;
      const max = 5;
      const startValue = 2.5;
      const step = 0.001;
      const reverse = false;
      const popUp = true;
      return(<SliderSmile min={min} max={max} startValue={startValue} step={step} reverse={reverse} popUp={popUp}/>);
  })

  .add('reverse-popUp', () => {
      const min = 0;
      const max = 10;
      const startValue = 5;
      const step = 0.001;
      const reverse = true;
      const popUp = true;
      return(<SliderSmile min={min} max={max} startValue={startValue} step={step} reverse={reverse} popUp={popUp}/>);
  })

  .add('forward', () => {
      const min = 0;
      const max = 5;
      const startValue = 2.5;
      const step = 0.001;
      const reverse = false;
      const popUp = false;
      return(<SliderSmile min={min} max={max} startValue={startValue} step={step} reverse={reverse} popUp={popUp}/>);
  })

  .add('reverse', () => {
      const min = 0;
      const max = 5;
      const startValue = 2.5;
      const step = 0.001;
      const reverse = true;
      const popUp = false;
      return(<SliderSmile min={min} max={max} startValue={startValue} step={step} reverse={reverse} popUp={popUp}/>);
  });