import React from "react";
import Slider from "./Slider.jsx";

import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import theme from "../lib/theme";

const SliderSmile = React.createClass({
    
    propTypes: {
        popUp: React.PropTypes.boolean,
        startValue: React.PropTypes.number,
        min: React.PropTypes.number,
        max: React.PropTypes.number,
        step: React.PropTypes.number,
        reverse: React.PropTypes.boolean
    },

    getInitialState() {
        return {smileMouth: "M40,130 C55,130 133,130 148,130"};
    },
    
    shouldComponentUpdate(nextState) {
        return this.state.smileMouth !== nextState.smileMouth;
    },
    
    render() {
        const {startValue, min, max, step, popUp} = this.props;
        const {smileMouth} = this.state;
        const styles = {
            smileStyle: {
                height: "200px",
                display: "block",
                margin: "auto",
                marginBottom: 10
            }
        };

        return (
            <MuiThemeProvider muiTheme={theme}>
                <div>
                    <svg viewBox="0 0 188 188" style={styles.smileStyle} >
                        <circle cx="94" cy="94" r="94" opacity="100" fill="#00afdc"/>
                        <circle cx="60" cy="67" r="13" fill="white"/>
                        <circle cx="128" cy="67" r="13" fill="white"/>
                        <path d={smileMouth} fill="none" stroke="white" strokeWidth="13" strokeLinecap="round"/>
                    </svg>
                    <Slider popUp={popUp} min={min} max={max} startValue={startValue} step={step} parentChange={this.calcSmile}/>
                </div>
            </MuiThemeProvider>
        );
    },
    
    calcSmile(value) {
        const {reverse, max} = this.props;
        var valueSmile = !isNaN(parseFloat(value)) && isFinite(value) ? (value/max*5) * 8 : 25;
        var inner = reverse ? 150 - valueSmile : 110 + valueSmile;
        var outer = reverse ? 110 + valueSmile : 150 - valueSmile;
        this.setState({smileMouth: "M40," + outer + " C55," + inner + " 133," + inner + " 148," + outer});
    }
});

export default SliderSmile;