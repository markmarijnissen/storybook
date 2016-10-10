import React, {Component, PropTypes} from "react";
import StepConnector from "./StepConnector";
import TimeLineEnd from "./TimeLineEnd";

const getStyles = () => {
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


class TimeLine extends Component {
    
    constructor(props, context) {
        super(props, context);
    }

    getChildContext() {
        return { stepper: {  } };
    }

    render() {
        const {
            children
        } = this.props;

        const styles = getStyles(this.props, this.context);

        /**
         * One day, we may be able to use real CSS tools
         * For now, we need to create our own "pseudo" elements
         * and nth child selectors, etc
         * That"s what some of this garbage is for :)
         */
        const steps = React.Children.map(children, (step, index) => {
            const controlProps = { index };
            
            return [
                index > 0 && <StepConnector />,
                React.cloneElement(step, Object.assign(controlProps, step.props)),
            ];
        });

        return (
            <div style={styles.root}>
                {steps}
                <TimeLineEnd />
            </div>
        );
    }
}

TimeLine.propTypes = {
    /**
     * Should be two or more `<Step />` components
     */
    children: PropTypes.any
};

TimeLine.contextTypes = { muiTheme: PropTypes.object.isRequired };
TimeLine.childContextTypes = { stepper: PropTypes.object };

export default TimeLine;