import getMuiTheme from "material-ui/styles/getMuiTheme";
import {cyan500, cyan700, lightBlack, pinkA200, grey100, grey500, darkBlack, white, grey300, black} from "material-ui/styles/colors";
// import ColorManipulator from "material-ui/utils/color-manipulator";
import spacing from "material-ui/styles/spacing";
import zIndex from "material-ui/styles/zIndex";

export default getMuiTheme({
    spacing: {
        desktopKeylineIncrement: 56
    },
    zIndex: zIndex,
    fontFamily: "Roboto, sans-serif",
    palette: {
        primary1Color: cyan500,
        primary2Color: cyan700,
        primary3Color: lightBlack,
        accent1Color: pinkA200,
        accent2Color: grey100,
        accent3Color: grey500,
        textColor: darkBlack,
        alternateTextColor: white,
        canvasColor: white,
        borderColor: grey300,
        // disabledColor: ColorManipulator.fade(darkBlack, 0.3),
        pickerHeaderColor: cyan500
    },
    navDrawer: {        
        width: 56 * 5
    }
});