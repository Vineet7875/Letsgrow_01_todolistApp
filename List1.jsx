import React from "react";
const List1 = (props) => {
    return (<>
        {props.value !== "" ?
            <div className="child2">
                <li>{props.value}</li>
                <button className="butt"
                    onClick={() => {
                        props.fun(props.id)
                    }}>DEL</button>

            </div> : null}

    </>)
}
export default List1