import React, {PropTypes} from "react";

const propTypes = {
    /**
     * Override the inline-style of the root element.
     */
    style: PropTypes.object
};

const contextTypes = {
    muiTheme: PropTypes.object.isRequired,
    stepper: PropTypes.object
};

const StepConnector = (props, context) => {
    const {muiTheme} = context;

    const styles = {
        wrapper: {
            flex: "1 1 auto"
        },
        line: {
            display: "block",
            borderColor: muiTheme.stepper.connectorLineColor
        }
    };

    styles.wrapper.marginLeft = 86;
    styles.line.borderLeftStyle = "solid";
    styles.line.borderLeftWidth = 1;
    styles.line.minHeight = 28;


    const {prepareStyles} = muiTheme;

    return (
        <div style={prepareStyles(styles.wrapper) }>
            <span style={prepareStyles(styles.line) }></span>
        </div>
    );
};

StepConnector.propTypes = propTypes;
StepConnector.contextTypes = contextTypes;

export default StepConnector;