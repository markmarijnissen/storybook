import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import AppBar from '../AppBar';
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import theme from "../../lib/theme";
import {IconButton} from 'material-ui';
import ArrowBackIcon from "material-ui/svg-icons/navigation/arrow-back";


storiesOf('AppBar', module)

  .addDecorator(story => (
    <MuiThemeProvider muiTheme={theme}>
      {story()}
    </MuiThemeProvider>
  ))

    .add('menu', () => {
        const title = "Mijn Kwik";
        return (
            <AppBar title={title} />
    );
    })

    .add('back', () => {
        const title = "Mijn Kwik";
        const backButton = (
            <IconButton>
                <ArrowBackIcon/>
            </IconButton>
        );
        return (
            <AppBar title={title} nav={backButton}/>);
    })