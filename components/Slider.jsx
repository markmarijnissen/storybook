import React from "react";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import theme from "../lib/theme";
import {Slider as SliderUI} from "material-ui";
import Drop from "../lib/Slider/Drop.js"

const SliderComponent = React.createClass({


    propTypes: {
        popUp: React.PropTypes.boolean,
        startValue: React.PropTypes.number,
        min: React.PropTypes.number,
        max: React.PropTypes.number,
        step: React.PropTypes.number
    },


    getInitialState() {
        const {startValue, min, max}= this.props;
        var dropMove = startValue/(max - min)*100 ;
        var dropMoveString = dropMove.toString();
        var dropMovePercentage = dropMoveString.concat("%");
        return {
            sliderValue: startValue,
            dropPlacement: dropMovePercentage
        };
    },

    onChange(value){
        var roundSliderValue = Math.round( value * 10 ) / 10;
        const {min, max} = this.props;
        var dropMove = value/(max - min)*100 ;
        var dropMoveString = dropMove.toString();
        var dropMovePercentage = dropMoveString.concat("%");
         this.setState({sliderValue: roundSliderValue, dropPlacement: dropMovePercentage});
        
    },





    render() {
        const {sliderValue, dropPlacement} = this.state;
        const {popUp, startValue, min, max, step} = this.props;
        const styles = {

            //Provided for a slider with popup, some extra space is needed for the popup if the value is minimal or maximal
            sliderSpace: {
                marginLeft: 10,
                marginRight: 10
            },


            value:{
                position: "relative",
                color: "white",
                marginTop: -23,
                zIndex: 10,
                fontFamily: "'Roboto', sans-serif",
                fontSize: "14px"
                

                
            },
            label:{
                display: "inline-block",
                position: "relative",
                textAlign: "center",
                transform: "translate(-50%)",
                marginLeft: dropPlacement
            }

        };
       

        if (popUp) {
            return (
                <MuiThemeProvider muiTheme={theme}>
                    <div style = {styles.sliderSpace}> 
                        <div style= {styles.label}>
                            <Drop> </Drop>
                            <div style={styles.value}> {sliderValue}</div>
                        </div>
                        <SliderUI 
                            {...this.props}
                            value={startValue}
                            onChange={(event, value) => this.onChange(value)}
                            min={min}
                            max={max}
                            step={step} 
                            onDragStart={null} 
                            style = {styles.sliderStyle}
                        />
                    </div>
                </MuiThemeProvider>
               
            );
        } else {
            return (
                
                <MuiThemeProvider muiTheme={theme}>
                    <div style = {styles.sliderSpace}>
                        <SliderUI 
                            {...this.props}
                            value={startValue}
                            onChange={(event, value) => this.onChange(value)}
                            min={min}
                            max={max}
                            step={step} 
                            onDragStart={null}   
                        />
                    </div>
                </MuiThemeProvider>
            );
        }
    }



    


});

export default SliderComponent;