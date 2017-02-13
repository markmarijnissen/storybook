import React from "react";
import {Step, Subheader, FloatingActionButton} from "material-ui";
import TimeLine from "../lib/TimeLine/TimeLine.js";
import StepLabel from "../lib/TimeLine/StepLabel.js";
import ContentAdd from 'material-ui/svg-icons/content/add';

import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import theme from "../lib/theme";

const TimeLineComponent = React.createClass({
    propTypes: {
        dag: React.PropTypes.object,
        clickedLabelHandler: React.PropTypes.func
    },

    render() {
        const {dag, clickedLabelHandler} = this.props;
        console.log("rneder timeline", clickedLabelHandler);
        const styles = {
            body: {
                margin: 0,
                width: "100%",
                height: "100%",
                fontFamily: "'Roboto', sans-serif",
                fontSize: "14px",
            },
            fab: {
                position: "relative",
                left: "100%",
                transform: "translate(-100%,0)",
                marginRight: 20
            }
        };

        if (dag && dag.metingen) {
            return (
                <MuiThemeProvider muiTheme={theme}>
                    <div style={styles.body}>
                        <TimeLine>
                            <Step>
                                <StepLabel textLeft={dag.datum} datum={true}></StepLabel>
                            </Step>

                            {dag.metingen.map((meting, i) => (
                                <div key={i}>{this.renderMeetMoment(meting, clickedLabelHandler) }</div>
                            )) }
                        </TimeLine>
                        <FloatingActionButton mini={true} secondary={true} style={styles.fab}>
                            <ContentAdd />
                        </FloatingActionButton>
                    </div>

                </MuiThemeProvider>
            );
        } else {
            return (
                <MuiThemeProvider muiTheme={theme}>
                    <div style={styles.body}>
                        <Subheader>U heeft nog geen metingen ...</Subheader>
                    </div>
                </MuiThemeProvider>
            );
        }
    },

    renderMeetMoment(meting, clickedLabelHandler) {
        return (
            <Step>
                <StepLabel textLeft={meting.moment} type={meting.type} onClick={clickedLabelHandler.bind(null, meting.type)}>{meting.omschrijving}</StepLabel>
            </Step>
        );
    }
});

export default TimeLineComponent;