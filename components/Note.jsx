import React from "react";
import AppBar from './AppBar';
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import theme from "../lib/theme";
import {IconButton} from 'material-ui';
import ArrowBackIcon from "material-ui/svg-icons/navigation/arrow-back";
import DoneIcon from "material-ui/svg-icons/action/done";

const Note = React.createClass({

    render() {
        const title = "Notitie toevoegen";
        const backButton = (
            <IconButton>
                <ArrowBackIcon/>
            </IconButton>
        );
        const submitButton = (
            <IconButton>
                <DoneIcon/>
            </IconButton>);
        return (
            <MuiThemeProvider miuTheme={theme}> 
                <AppBar title={title} nav={backButton} actions={submitButton}/>
            </MuiThemeProvider>
        )
    }
});

export default Note;