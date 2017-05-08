import React from "react";
import {AppBar} from "material-ui";


const MijnKwikAppBar = React.createClass({
    
    propTypes: {
        title: React.PropTypes.string,
        toggleDrawer: React.PropTypes.func,
        nav: React.PropTypes.node,
        actions: React.PropTypes.node,
        style: React.PropTypes.object,
        menuHidden: React.PropTypes.bool
    },
    
    contextTypes: {
        muiTheme: React.PropTypes.object.isRequired
    },
    childContextTypes: {
        appBarStyle: React.PropTypes.object
    },
    getChildContext() {
        const {appBar, button: {iconButtonSize}} = this.context.muiTheme;
        const flatButtonSize = 36;
        return {
            appBarStyle: {
                iconButtonStyle: {
                    marginTop: (appBar.height - iconButtonSize) / 2,
                    marginRight: 8,
                    marginLeft: -16
                },
                iconButtonIconStyle: {
                    fill: appBar.textColor,
                    color: appBar.textColor
                },
                flatButton: {
                    color: appBar.textColor,
                    marginTop: (iconButtonSize - flatButtonSize) / 2 + 1
                }
            } 
        }
    },

    render() {
        const {
            title,
            toggleDrawer,
            nav,
            actions,
            style            
        } = this.props;
        const {appBar} = this.context.muiTheme;debugger
        const mergedStyle = Object.assign({
            position: "fixed",
            top: 0,
            background: appBar.color
        }, style);      
        
        return (
            <AppBar
                title={title}
                onLeftIconButtonTouchTap={toggleDrawer}
                iconElementLeft={nav}
                iconElementRight={actions}
                style={mergedStyle}/>
        );
    } 

});

export default MijnKwikAppBar;