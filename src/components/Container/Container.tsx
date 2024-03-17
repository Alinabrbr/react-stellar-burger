import React from "react";
import {TPropsChildren} from "../../utils/types/types";

function Container (props: TPropsChildren): JSX.Element {
    return (
        <div>
            {props.children}
        </div>
    )
}

export default Container;
