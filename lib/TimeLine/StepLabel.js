import React, {Component, PropTypes} from 'react';
import {IconButton} from "material-ui";

import HeartIcon from "material-ui/svg-icons/action/favorite";
import QuestionIcon from "material-ui/svg-icons/action/help";
import StarIcon from "material-ui/svg-icons/toggle/star";
import ExperimentIcon from "material-ui/svg-icons/content/content-paste";

const getStyles = ({datum}, {muiTheme, stepper}) => {
    const {
        textColor,
        iconColor,
    } = muiTheme.stepper;
    const {orientation} = stepper;

    const styles = {
        root: {
            height: 64,
            color: textColor,
            display: 'flex',
            alignItems: 'center',
            fontSize: 14,
            paddingLeft: 14,
            paddingRight: 14,
        },
        iconButton: {
            background: iconColor,
            borderRadius: 30,
            marginRight: 24,
        },
        textLeft: {
            width: 50,
            minWidth: 50,
            display: "inherit"
        },
        greyDot: {
            stroke: "#bdbdbd", 
            width: "35", 
            height: "35", 
            strokeWidth: "3.5"
        }
    };

    if (datum) {
        styles.root.fontWeight = "bold";
    }
    return styles;
};

const propTypes = {
    /**
     * The label text node
     */
    children: PropTypes.node,
    /**
     * The icon displayed by the step label.
     */
    type: PropTypes.string,
    /**
     * Override the inline-style of the root element.
     */
    style: PropTypes.object,

    textLeft: PropTypes.string.isRequired,
    datum: PropTypes.bool
};

const contextTypes = {
    muiTheme: PropTypes.object.isRequired,
    stepper: PropTypes.object,
};

class StepLabel extends Component {
    renderIcon(type, datum) {
        const {greyDot, iconButton} = getStyles(this.props, this.context);;
        const {iconColor} = this.props;
        if (!datum) {
            var icon = [
                <StarIcon color="#fff"/>
            ];
            if (type === "heart") {
                iconButton.background = "#f44336";
                icon = [
                    <HeartIcon color="#fff"/>
                ];
            } else if (type === "question") {
                icon = [
                    <QuestionIcon color="#fff"/>
                ];
            } else if (type === "experiment") {
                iconButton.background = "#4CAF50";
                icon = [
                    <ExperimentIcon color="#fff"/>
                ];
            }

            return (
                <IconButton style={iconButton}>
                    {icon}
                </IconButton>
            );
        }
        
        return (
            <svg style={greyDot}>
                <circle cx="23" cy="23" r="8" fill="none" />
            </svg>
        );
    }

    render() {
        const {
            children,
            type,
            textLeft,
            datum,
            iconColor,
            ...other, 
        } = this.props;

        const {prepareStyles} = this.context.muiTheme;
        var styles = getStyles(this.props, this.context);
        const iconComponent = this.renderIcon( type, datum);
        
        return (
            <span style={prepareStyles(Object.assign(styles.root)) } {...other}>
                <span style={styles.textLeft}>{textLeft}</span>
                {iconComponent}
                {children}
            </span>
        );
    }
}
StepLabel.propTypes = propTypes;
StepLabel.contextTypes = contextTypes;

export default StepLabel;