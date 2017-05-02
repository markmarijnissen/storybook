import React from "react";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import theme from "../lib/theme";
import Slider from "../lib/Slider/Slider.js"

const SliderComponent = React.createClass({

    render() {
        const {value, min, max, step, drop} = this.props;
        return (
            <MuiThemeProvider muiTheme={theme}>
                <Slider min={min} max={max} step={step} value={value} drop={drop} />
            </MuiThemeProvider>        
        );
    }
});

export default SliderComponent;