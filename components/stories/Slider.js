import React from 'react';
import Slider from "../Slider.jsx"
import { storiesOf, action } from '@kadira/storybook';

storiesOf('Slider', module)

  .add('default', () => {
    return (<Slider />);
  })
  .add('without drop', () => {
    return (<Slider min={0} max={10} step={0.001} value={5} drop={false} />);
  })
  .add('with drop', () => {
    return (<Slider min={0} max={5} step={0.001} value={2.5} drop={true} />);
  });