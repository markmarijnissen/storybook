import React from "react";
import AppBar from './AppBar';

import {IconButton, TextField, Dialog, FlatButton} from 'material-ui';
import ArrowBackIcon from "material-ui/svg-icons/navigation/arrow-back";
import DoneIcon from "material-ui/svg-icons/action/done";


const Note = React.createClass({

    propTypes: {
        onSubmit: React.PropTypes.func.isRequired
    },

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

    getInitialState() {
        return {
            noteSend: false,
            value: ''
        }
    },

    handleChange(event) {
        this.setState({
            value: event.target.value
        })
    },

    handleSubmit() {
        this.props.onSubmit({
            text: this.state.value
        }).then(() => {
            this.setState({
                noteSend: true
            })
        })
    },

    handleDialogClose() {
        this.setState({
            noteSend: false,
            text: ''
        });
    },

    render() {
        let dialog;
        if(this.state.noteSend) {
            dialog = (
                <Dialog
                    title="Notitie toegevoegd"
                    actions={[<FlatButton
                        label="OK"
                        primary={true}
                        onClick={this.handleDialogClose}/>]}
                    modal={false}
                    open={true}
                    >
                    
                </Dialog>
            );
        }
        const title = "Notitie toevoegen";
        const backButton = (
            <IconButton>
                <ArrowBackIcon/>
            </IconButton>
        );
        const submitButton = (
            <IconButton onClick={this.handleSubmit}> 
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
                        value={this.state.value}
                        onChange={this.handleChange}
                    />
                </div>
                {dialog}
            </div>
        )
    }
});

export default Note;