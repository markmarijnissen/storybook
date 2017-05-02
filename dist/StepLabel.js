"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _materialUi = require("material-ui");

var _favorite = require("material-ui/svg-icons/action/favorite");

var _favorite2 = _interopRequireDefault(_favorite);

var _help = require("material-ui/svg-icons/action/help");

var _help2 = _interopRequireDefault(_help);

var _star = require("material-ui/svg-icons/toggle/star");

var _star2 = _interopRequireDefault(_star);

var _contentPaste = require("material-ui/svg-icons/content/content-paste");

var _contentPaste2 = _interopRequireDefault(_contentPaste);

var _chevronRight = require("material-ui/svg-icons/navigation/chevron-right");

var _chevronRight2 = _interopRequireDefault(_chevronRight);

var _reactTapEventPlugin = require("react-tap-event-plugin");

var _reactTapEventPlugin2 = _interopRequireDefault(_reactTapEventPlugin);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

(0, _reactTapEventPlugin2.default)();

var getStyles = function getStyles(_ref, _ref2) {
    var datum = _ref.datum;
    var muiTheme = _ref2.muiTheme;
    var _muiTheme$stepper = muiTheme.stepper,
        textColor = _muiTheme$stepper.textColor,
        iconColor = _muiTheme$stepper.iconColor;


    var styles = {
        root: {
            height: 64,
            color: textColor,
            display: "flex",
            alignItems: "center",
            fontSize: 14,
            paddingLeft: 14,
            paddingRight: 14
        },
        iconButton: {
            background: iconColor,
            borderRadius: 30,
            marginRight: 24
        },
        textLeft: {
            width: 50,
            minWidth: 50,
            display: "inherit"
        },
        greyDot: {
            stroke: "#bdbdbd",
            width: 35,
            height: 35,
            strokeWidth: 3.5
        },
        chevron: {
            position: "absolute",
            right: 10
        }
    };

    if (datum) {
        styles.root.fontWeight = "bold";
    }
    return styles;
};

var propTypes = {
    /**
     * The label text node
     */
    children: _react.PropTypes.node,
    /**
     * The icon displayed by the step label.
     */
    type: _react.PropTypes.string,
    /**
     * Override the inline-style of the root element.
     */
    style: _react.PropTypes.object,
    // clickedLabelHandler: PropTypes.func,
    textLeft: _react.PropTypes.string.isRequired,
    datum: _react.PropTypes.bool
};

var contextTypes = {
    muiTheme: _react.PropTypes.object.isRequired,
    stepper: _react.PropTypes.object
};

var StepLabel = function (_Component) {
    _inherits(StepLabel, _Component);

    function StepLabel() {
        _classCallCheck(this, StepLabel);

        return _possibleConstructorReturn(this, (StepLabel.__proto__ || Object.getPrototypeOf(StepLabel)).apply(this, arguments));
    }

    _createClass(StepLabel, [{
        key: "renderIcon",
        value: function renderIcon(type, datum) {
            var _getStyles = getStyles(this.props, this.context),
                greyDot = _getStyles.greyDot,
                iconButton = _getStyles.iconButton;

            ;
            if (!datum) {
                var icon = [_react2.default.createElement(_star2.default, { color: "#fff" })];
                if (type === "heart") {
                    iconButton.background = "#f44336";
                    icon = [_react2.default.createElement(_favorite2.default, { color: "#fff" })];
                } else if (type === "question") {
                    icon = [_react2.default.createElement(_help2.default, { color: "#fff" })];
                } else if (type === "experiment") {
                    iconButton.background = "#4CAF50";
                    icon = [_react2.default.createElement(_contentPaste2.default, { color: "#fff" })];
                }

                return _react2.default.createElement(
                    _materialUi.IconButton,
                    { style: iconButton },
                    icon
                );
            }

            return _react2.default.createElement(
                "svg",
                { style: greyDot },
                _react2.default.createElement("circle", { cx: "23", cy: "23", r: "8", fill: "none" })
            );
        }
    }, {
        key: "renderChevron",
        value: function renderChevron(datum) {
            if (!datum) {
                return _react2.default.createElement(_chevronRight2.default, null);
            }
        }
    }, {
        key: "render",
        value: function render() {
            var _props = this.props,
                children = _props.children,
                type = _props.type,
                textLeft = _props.textLeft,
                datum = _props.datum,
                other = _objectWithoutProperties(_props, ["children", "type", "textLeft", "datum"]);

            var prepareStyles = this.context.muiTheme.prepareStyles;

            var styles = getStyles(this.props, this.context);
            var iconComponent = this.renderIcon(type, datum);
            var chevronComponent = this.renderChevron(datum);

            return _react2.default.createElement(
                "div",
                null,
                _react2.default.createElement(
                    "span",
                    _extends({ style: prepareStyles(Object.assign(styles.root)) }, other),
                    _react2.default.createElement(
                        "span",
                        { style: styles.textLeft },
                        textLeft
                    ),
                    iconComponent,
                    children,
                    _react2.default.createElement(
                        "span",
                        { style: styles.chevron },
                        chevronComponent
                    )
                )
            );
        }
    }, {
        key: "clickedLabelHandler",
        value: function clickedLabelHandler(type) {
            console.log(type);
        }
    }]);

    return StepLabel;
}(_react.Component);

StepLabel.propTypes = propTypes;
StepLabel.contextTypes = contextTypes;

exports.default = StepLabel;