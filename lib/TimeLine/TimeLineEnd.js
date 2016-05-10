import React, {PropTypes} from "react";
import StepConnector from './StepConnector';

const propTypes = {
    /**
     * Override the inline-style of the root element.
     */
    style: PropTypes.object,
};

const contextTypes = {
    muiTheme: PropTypes.object.isRequired,
    stepper: PropTypes.object,
};

const TimeLineEnd = (props, context) => {
    const {muiTheme, stepper} = context;
    const styles = {
        greyDot: {
            fill:"#bdbdbd", 
            paddingLeft: "75", 
            height: "24",
        }
    }

    return (
        <div>
            <StepConnector />
            <svg style={styles.greyDot}>
                <circle cx="12" cy="12" r="5" />
            </svg>
        </div>
    );
};

TimeLineEnd.propTypes = propTypes;
TimeLineEnd.contextTypes = contextTypes;

export default TimeLineEnd;