import React from 'react';
import { storiesOf, action } from '@kadira/storybook';

import Note from '../Note.jsx';

storiesOf('Note', module)

  .add('default', () => {
    
    return(<Note />);
  })