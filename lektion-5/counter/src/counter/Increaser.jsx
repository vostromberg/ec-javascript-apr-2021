import React from 'react';

const Increaser = (props) => {
    const increase = () => {
        const newValue = props.count + props.amount;
        if(props.onIncrease){
            props.onIncrease(newValue);
        }
    }

    return <button onClick={increase}>Increase by {props.amount}</button>
}

export default Increaser;