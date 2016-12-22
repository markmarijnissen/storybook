import React from 'react';
import Slider from '../Slider.jsx';
import { storiesOf, action } from '@kadira/storybook';

storiesOf('Slider', module)

  .add('without popup', () => {
    const min = 0;
    const max = 10;
    const startValue = 2.5;
    const popUp = false;
    const step = 0.5;
      return(<Slider popUp={popUp} min={min} max={max} startValue={startValue} step={step}/>);
  })
  .add('with popup', () => {
    const min = 0;
    const max = 5;
    const startValue = 2.5;
    const popUp = true;
    const step = 0.001;
     return(<Slider popUp={popUp} min={min} max={max} startValue={startValue} step={step}/>);
      
     
  });