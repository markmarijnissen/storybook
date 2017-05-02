import React, { Component } from "react";
import PropTypes from "prop-types";
import { Slider as SliderUI } from "material-ui";

const getStyles = () => {
    return {
        root: {
            marginLeft: 10,
            marginRight: 10
        },

        slider: { },

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

const propTypes = {
    children: PropTypes.node,
    value: PropTypes.number,
    min: PropTypes.number,
    max: PropTypes.number,
    step: PropTypes.number,
    style: PropTypes.object,
    drop: PropTypes.bool
};

class Slider extends Component {

    constructor(props, context) {
        super(props, context);
        
        const { value = 0, min = 0, max = 1 } = props;
        const dropValue = Math.round(value * 10) / 10;
        const marginLeft = (value / (max - min) * 100).toString().concat("%");

        this.state = { dropValue, marginLeft, value };
    }

    onChange(value) {
        const { min, max } = this.props;
        const dropValue = Math.round(value * 10) / 10;
        var marginLeft = (value / (max - min) * 100).toString().concat("%");

        this.setState({ dropValue, marginLeft, value });
    }

    render() {
        const { drop } = this.props;
        const { dropValue, marginLeft } = this.state;

        const sliderProps = Object.assign({}, this.props);
        const styles = getStyles(this.props, this.context);

        delete sliderProps.drop;

        var dropElem;
        if (drop) {
            styles.drop.marginLeft = marginLeft;
            styles.slider.marginTop = 10;

            dropElem = (<div style={styles.drop}>
                <div style={styles.dropValue}>{dropValue}</div>
            </div>)
        }

        return (
            <div style={styles.root}>
                {dropElem}
                <SliderUI
                    {...sliderProps}
                    onChange={(event, value) => this.onChange(value)}
                    onDragStart={null}
                    value={this.state.value}
                    sliderStyle={styles.slider} />
            </div>
        );
    }
};

Slider.propTypes = propTypes;

export default Slider;