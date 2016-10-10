import React from "react";
import {Step, Subheader} from "material-ui";
import TimeLine from "../lib/TimeLine/TimeLine.js";
import StepLabel from "../lib/TimeLine/StepLabel.js";

import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import theme from "../lib/theme";

const TimeLineComponent = React.createClass({
    propTypes: {
        dag: React.PropTypes.object
    },

    render() {
        const {dag} = this.props;
        const styles = {
            body: {
                margin: 0,
                width: "100%",
                height: "100%",
                fontFamily: "'Roboto', sans-serif",
                fontSize: "14px"
            },
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
                                <div key={i}>{this.renderMeetMoment(meting) }</div>
                            )) }
                        </TimeLine>
                    </div>
                </MuiThemeProvider>
            );
        } else {
            return (
                <MuiThemeProvider muiTheme={theme}>
                    <Subheader>U heeft nog geen metingen ...</Subheader>
                </MuiThemeProvider>
            );
        }
    },

    renderMeetMoment(meting) {
        return (
            <Step>
                <StepLabel textLeft={meting.moment} type={meting.type}>{meting.omschrijving}</StepLabel>
            </Step>
        );
    }
});

export default TimeLineComponent;