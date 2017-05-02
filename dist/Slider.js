"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _propTypes = require("prop-types");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _materialUi = require("material-ui");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var getStyles = function getStyles() {
    return {
        root: {
            marginLeft: 10,
            marginRight: 10
        },

        slider: {},

        drop: {
            position: "relative",
            transform: "rotate(135deg)",
            backgroundColor: "rgb(41, 171, 226)",
            width: 25,
            height: 25,
            borderTopLeftRadius: "50%",
            borderBottomLeftRadius: "50%",
            borderBottomRightRadius: "50%",
            right: 12.2
        },

        dropValue: {
            position: "relative",
            color: "white",
            fontFamily: "'Roboto', sans-serif",
            fontSize: "13px",
            textAlign: "center",
            top: 5,
            transform: "rotate(225deg)"
        }
    };
};

var propTypes = {
    children: _propTypes2.default.node,
    value: _propTypes2.default.number,
    min: _propTypes2.default.number,
    max: _propTypes2.default.number,
    step: _propTypes2.default.number,
    style: _propTypes2.default.object,
    drop: _propTypes2.default.bool
};

var Slider = function (_Component) {
    _inherits(Slider, _Component);

    function Slider(props, context) {
        _classCallCheck(this, Slider);

        var _this = _possibleConstructorReturn(this, (Slider.__proto__ || Object.getPrototypeOf(Slider)).call(this, props, context));

        var _props$value = props.value,
            value = _props$value === undefined ? 0 : _props$value,
            _props$min = props.min,
            min = _props$min === undefined ? 0 : _props$min,
            _props$max = props.max,
            max = _props$max === undefined ? 1 : _props$max;

        var dropValue = Math.round(value * 10) / 10;
        var marginLeft = (value / (max - min) * 100).toString().concat("%");

        _this.state = { dropValue: dropValue, marginLeft: marginLeft, value: value };
        return _this;
    }

    _createClass(Slider, [{
        key: "onChange",
        value: function onChange(value) {
            var _props = this.props,
                min = _props.min,
                max = _props.max;

            var dropValue = Math.round(value * 10) / 10;
            var marginLeft = (value / (max - min) * 100).toString().concat("%");

            this.setState({ dropValue: dropValue, marginLeft: marginLeft, value: value });
        }
    }, {
        key: "render",
        value: function render() {
            var _this2 = this;

            var drop = this.props.drop;
            var _state = this.state,
                dropValue = _state.dropValue,
                marginLeft = _state.marginLeft;


            var sliderProps = Object.assign({}, this.props);
            var styles = getStyles(this.props, this.context);

            delete sliderProps.drop;

            var dropElem;
            if (drop) {
                styles.drop.marginLeft = marginLeft;
                styles.slider.marginTop = 10;

                dropElem = _react2.default.createElement(
                    "div",
                    { style: styles.drop },
                    _react2.default.createElement(
                        "div",
                        { style: styles.dropValue },
                        dropValue
                    )
                );
            }

            return _react2.default.createElement(
                "div",
                { style: styles.root },
                dropElem,
                _react2.default.createElement(_materialUi.Slider, _extends({}, sliderProps, {
                    onChange: function onChange(event, value) {
                        return _this2.onChange(value);
                    },
                    onDragStart: null,
                    value: this.state.value,
                    sliderStyle: styles.slider }))
            );
        }
    }]);

    return Slider;
}(_react.Component);

;

Slider.propTypes = propTypes;

exports.default = Slider;