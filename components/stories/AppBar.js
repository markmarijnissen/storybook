import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import AppBar from '../AppBar';
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import theme from "../../lib/theme";
import {IconButton} from 'material-ui';
import ArrowBackIcon from "material-ui/svg-icons/navigation/arrow-back";


storiesOf('AppBar', module)
    .add('menu', () => {
        const title = "Mijn Kwik";
        return (
        <MuiThemeProvider muiTheme={theme}>
            <AppBar title={title} />
        </MuiThemeProvider>) 
    })

    .add('back', () => {
        const title = "Mijn Kwik";
        const backButton = (
            <IconButton>
                <ArrowBackIcon/>
            </IconButton>
        );
        return (
        <MuiThemeProvider muiTheme={theme}>
            <AppBar title={title} nav={backButton}/>
        </MuiThemeProvider>) 
    })