import React from 'react';
import classes from './Button.modules.css'
import './Button.css'

const Button = props => {
    return(
        <button 
            id = "button"
            type = {props.type | "button"}
            onClick = {props.onClick}
            onSubmit = {props.submit}>
            {props.children}
        </button>

    )
};

export default Button;