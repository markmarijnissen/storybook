import React, {PropTypes} from "react";


const propTypes = {
    /**
     * Override the inline-style of the root element.
     */
    style: PropTypes.object
};



const Drop = () => {
    const styles = {
            drop:{
                position: "relative",
                transform: "rotate(135deg)",
                backgroundColor: "rgb(0, 188, 212)",
                width: 30,
                height: 30,
                borderTopLeftRadius: "50%",
                borderBottomLeftRadius: "50%",
                borderBottomRightRadius: "50%",
                zIndex: -5
            }
    };

    return (
        <div style={styles.drop}> </div>
    );
};


export default Drop;