import React, { PropTypes } from "react";
import { Divider } from "material-ui";

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
        connector: {
            height: "28px"
        },
        wrapperVerticalLine: {
            flex: "1 1 auto",
            marginLeft: "86px",
            float: "left"
        },
        verticalLine: {
            display: "block",
            borderColor: muiTheme.stepper.connectorLineColor,
            borderLeftStyle: "solid",
            borderLeftWidth: "1px",
            minHeight: "28px"
        },
        wrapperHorizontalLine: {
            float: "right",
            width: "calc(100% - 116px)",
            paddingTop: "12px"
        },
        horizontalLine: {
            borderColor: muiTheme.stepper.connectorLineColor,
            borderTopStyle: "solid",
            borderTopWidth: "1px"
        }
    };

    // styles.wrapper.marginLeft = 86;
    // styles.line.borderLeftStyle = "solid";
    // styles.line.borderLeftWidth = 1;
    // styles.line.minHeight = 28;


    const {prepareStyles} = muiTheme;

    return (
        <div style={prepareStyles(styles.connector)}>
            <div style={prepareStyles(styles.wrapperVerticalLine)}>
                <span style={prepareStyles(styles.verticalLine)}></span>
            </div>
            <div style={prepareStyles(styles.wrapperHorizontalLine)}>
                <div style={prepareStyles(styles.horizontalLine)}></div>
            </div>
        </div>
    );
};

StepConnector.propTypes = propTypes;
StepConnector.contextTypes = contextTypes;

export default StepConnector;