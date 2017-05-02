"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _StepConnector = require("./StepConnector");

var _StepConnector2 = _interopRequireDefault(_StepConnector);

var _TimeLineEnd = require("./TimeLineEnd");

var _TimeLineEnd2 = _interopRequireDefault(_TimeLineEnd);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var getStyles = function getStyles() {
    return {
        root: {
            display: "flex",
            flexDirection: "column",
            alignContent: "center",
            alignItems: "stretch",
            justifyContent: "space-between"
        }
    };
};

var TimeLine = function (_Component) {
    _inherits(TimeLine, _Component);

    function TimeLine(props, context) {
        _classCallCheck(this, TimeLine);

        return _possibleConstructorReturn(this, (TimeLine.__proto__ || Object.getPrototypeOf(TimeLine)).call(this, props, context));
    }

    _createClass(TimeLine, [{
        key: "getChildContext",
        value: function getChildContext() {
            return { stepper: {} };
        }
    }, {
        key: "render",
        value: function render() {
            var children = this.props.children;


            var styles = getStyles(this.props, this.context);

            /**
             * One day, we may be able to use real CSS tools
             * For now, we need to create our own "pseudo" elements
             * and nth child selectors, etc
             * That"s what some of this garbage is for :)
             */
            var steps = _react2.default.Children.map(children, function (step, index) {
                var controlProps = { index: index };

                return [index > 0 && _react2.default.createElement(_StepConnector2.default, null), _react2.default.cloneElement(step, Object.assign(controlProps, step.props))];
            });

            return _react2.default.createElement(
                "div",
                { style: styles.root },
                steps,
                _react2.default.createElement(_TimeLineEnd2.default, null)
            );
        }
    }]);

    return TimeLine;
}(_react.Component);

TimeLine.propTypes = {
    /**
     * Should be two or more `<Step />` components
     */
    children: _react.PropTypes.any
};

TimeLine.contextTypes = { muiTheme: _react.PropTypes.object.isRequired };
TimeLine.childContextTypes = { stepper: _react.PropTypes.object };

exports.default = TimeLine;