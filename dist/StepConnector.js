"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _materialUi = require("material-ui");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var propTypes = {
    /**
     * Override the inline-style of the root element.
     */
    style: _react.PropTypes.object
};

var contextTypes = {
    muiTheme: _react.PropTypes.object.isRequired,
    stepper: _react.PropTypes.object
};

var StepConnector = function StepConnector(props, context) {
    var muiTheme = context.muiTheme;


    var styles = {
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


    var prepareStyles = muiTheme.prepareStyles;


    return _react2.default.createElement(
        "div",
        { style: prepareStyles(styles.connector) },
        _react2.default.createElement(
            "div",
            { style: prepareStyles(styles.wrapperVerticalLine) },
            _react2.default.createElement("span", { style: prepareStyles(styles.verticalLine) })
        ),
        _react2.default.createElement(
            "div",
            { style: prepareStyles(styles.wrapperHorizontalLine) },
            _react2.default.createElement("div", { style: prepareStyles(styles.horizontalLine) })
        )
    );
};

StepConnector.propTypes = propTypes;
StepConnector.contextTypes = contextTypes;

exports.default = StepConnector;