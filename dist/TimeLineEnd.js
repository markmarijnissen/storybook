"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _StepConnector = require("./StepConnector");

var _StepConnector2 = _interopRequireDefault(_StepConnector);

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

var TimeLineEnd = function TimeLineEnd() {
    var styles = {
        greyDot: {
            fill: "#bdbdbd",
            paddingLeft: 75,
            height: 24,
            width: 24
        }
    };

    return _react2.default.createElement(
        "div",
        null,
        _react2.default.createElement(_StepConnector2.default, null),
        _react2.default.createElement(
            "svg",
            { style: styles.greyDot },
            _react2.default.createElement("circle", { cx: "12", cy: "12", r: "5" })
        )
    );
};

TimeLineEnd.propTypes = propTypes;
TimeLineEnd.contextTypes = contextTypes;

exports.default = TimeLineEnd;