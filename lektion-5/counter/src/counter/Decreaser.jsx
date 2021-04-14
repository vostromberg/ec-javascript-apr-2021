import React from 'react';

const Decreaser = (props) => {
    const decrease = () => {
        let newValue = props.count - props.amount;
        if(newValue < 0){
            newValue = 0;
        }
        if(props.onDecrease){
            props.onDecrease(newValue);
        }
    }

    return <button disabled={props.count <= 0} onClick={decrease}>Decrease by {props.amount}</button>
}

export default Decreaser;