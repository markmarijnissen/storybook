import React, {Component, PropTypes} from 'react';
import StepConnector from './StepConnector';
import TimeLineEnd from './TimeLineEnd';
import theme from "../theme";

const getStyles = (props) => {
    return {
        root: {
            display: 'flex',
            flexDirection: 'column',
            alignContent: 'center',
            alignItems: 'stretch',
            justifyContent: 'space-between',
        },
    };
};


class TimeLine extends Component {
    
    constructor(props, context) {
        super(props, context)
    }

    getChildContext() {
        return { stepper: {  } };
    }

    render() {
        const {
            children,
            style,
        } = this.props;

        const {prepareStyles} = theme;
        const styles = getStyles(this.props, this.context);

        /**
         * One day, we may be able to use real CSS tools
         * For now, we need to create our own "pseudo" elements
         * and nth child selectors, etc
         * That's what some of this garbage is for :)
         */
        const steps = React.Children.map(children, (step, index) => {
            const controlProps = { index };
            
            return [
                index > 0 && <StepConnector />,
                React.cloneElement(step, Object.assign(controlProps, step.props)),
            ];
        });

        return (
            <div style={prepareStyles(Object.assign(styles.root, style)) }>
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
    children: PropTypes.any,
    /**
     * Override the inline-style of the root element.
     */
    style: PropTypes.object
}

TimeLine.contextTypes = { muiTheme: PropTypes.object.isRequired };
TimeLine.childContextTypes = { stepper: PropTypes.object };

export default TimeLine;