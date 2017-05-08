import React from "react";
import AppBar from './AppBar';

import {IconButton, TextField} from 'material-ui';
import ArrowBackIcon from "material-ui/svg-icons/navigation/arrow-back";
import DoneIcon from "material-ui/svg-icons/action/done";


const Note = React.createClass({

    styles: {
        contentContainer: {
            minHeight: "100%",
            height: "1px",
            paddingTop: 56,
            boxSizing: "border-box",
            paddingLeft: "15px",
            paddingRight: "15px",
            paddingBottom: "15px"
        }
    },

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
            <div>
                <AppBar title={title} nav={backButton} actions={submitButton}/>
                <div style={this.styles.contentContainer}>
                    <TextField
                        hintText="Voeg een notitie toe"
                        multiLine={true}
                        rows={1}
                        rowsMax={6}
                        fullWidth={true}
                    />
                </div>
            </div>
        )
    }
});

export default Note;