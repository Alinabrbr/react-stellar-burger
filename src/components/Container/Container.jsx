import React from "react";
import PropTypes from "prop-types";

function Container (props) {
    return (
        <div>
            {props.children}
        </div>
    )
}

export default Container;

Container.propTypes = {
    children: PropTypes.element
};