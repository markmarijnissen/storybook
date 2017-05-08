import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import theme from "../../lib/theme";
import Note from '../Note.jsx';

storiesOf('Note', module)
  .addDecorator(story => (
    <MuiThemeProvider muiTheme={theme}>
      {story()}
    </MuiThemeProvider>
  ))

  .add('default', () => {
    const onSubmit = (note) => {
      alert(note.text);
      return new Promise(resolve => setTimeout(resolve,2000));
    }

    return <Note onSubmit={onSubmit} />;
  })