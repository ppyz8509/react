import React, { useState } from 'react';

const StateInFunction = (props) => {
    const [dataState, setDataState] = useState({
        id: props.id || "1",
        name: props.name || "Naphat",
        counter: 0
    });
    
    const userClickPlus = () => {
        setDataState({
            ...dataState,
            counter: dataState.counter + 1,
        });
    };

    const userClickMinus = () => {
        setDataState({
            ...dataState,
            counter: dataState.counter - 1,
        });
    };

    return (
        <div>
            <h1>State in Function Component</h1>
            <p>
                <strong>Name</strong>: {dataState.name}
            </p>
            <p>
                <strong>Counter</strong>: {dataState.counter}
            </p>
            <div>
                <button onClick={userClickPlus}>+</button>
                <button onClick={userClickMinus}>-</button>
            </div>
        </div>
    );
};

export default StateInFunction;
