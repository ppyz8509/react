import React from "react";

export default Comment = (props) => {
    return (
        <div className="diaalogbox">
            <div className="body">
                <span className="tip tip-up">
                </span>
                <div className="message">
                    <span>
                        <b>{props.userId}</b> : 
                        {props.message}
                    </span>
                </div>
            </div>
        </div>
    )
}