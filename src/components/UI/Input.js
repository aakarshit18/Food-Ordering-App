import classes from './Input.module.css';
import React from 'react';

const Input = React.forwardRef((props, ref) => {

    
    return (
        <div className={classes.input}>
            <label htmlFor={props.item.id}>Amount</label>
            <input ref={ref} {...props.item} />
        </div>
    );
})
export default Input;