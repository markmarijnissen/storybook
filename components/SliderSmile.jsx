import React from "react";
import {Slider as SliderUI} from "material-ui";

import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import theme from "../lib/theme";

const SliderSmile = React.createClass({
        
    propTypes: {
        onChange: React.PropTypes.func
    },
    
    styles: {
        smileStyle: {
            height: "200px",
            display: "block",
            margin: "auto"
        },
        sliderStyle: {
            marginLeft: 10,
            marginRight: 10
        }
    },

    getInitialState() {
        return {
            smileMouth: "M40,125 C55,135 133,135 148,125"
        };
    },

    shouldComponentUpdate(nextState) {
        return this.state.smileMouth !== nextState.smileMouth;
    },
    
    componentWillReceiveProps(nextProps) {
        this.calcSmile(nextProps.value);
    },

    render() {
        const {smileStyle, sliderStyle} = this.styles; 
        const {smileMouth} = this.state;
        return (
            <MuiThemeProvider muiTheme={theme}>
            <div>
                <svg viewBox="0 0 188 188" style={smileStyle} >
                    <circle cx="94" cy="94" r="94" opacity="100" fill="#00afdc"/>
                    <circle cx="60" cy="67" r="13" fill="white"/>
                    <circle cx="128" cy="67" r="13" fill="white"/>
                    <path d={smileMouth} fill="none" stroke="white" strokeWidth="13" strokeLinecap="round"/>
                </svg>
                <SliderUI
                    {...this.props}
                    value={2.5}
                    onChange={(event, value) => this.props.onChange(value)}
                    min={0}
                    max={5}
                    step={0.001} 
                    onDragStart={null}
                    style={sliderStyle} />
            </div>
            </MuiThemeProvider>
        );
    },

    calcSmile(value) {
        let valueSmile = !isNaN(parseFloat(value)) && isFinite(value) ? value * 10 : 25;
        let outer = 150 - valueSmile;
        let inner = 110 + valueSmile;

        this.setState({smileMouth: "M40," + outer + " C55," + inner + " 133," + inner + " 148," + outer});
    }
});

export default SliderSmile;