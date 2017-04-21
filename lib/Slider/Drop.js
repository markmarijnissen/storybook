import React, {PropTypes, Component} from "react";

class Drop extends Component {
    render() {

        return (
            <div style={{position: "relative",
                    transform: "rotate(135deg)",
                    backgroundColor: "rgb(0, 188, 212)",
                    width: 30,
                    height: 30,
                    borderTopLeftRadius: "50%",
                    borderBottomLeftRadius: "50%",
                    borderBottomRightRadius: "50%",
                    zIndex: -5}}> </div>
        );
    }
};


export default Drop;