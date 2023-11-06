import React from 'react'

const Button = (props) => {
    return (
        <button
            className={`'p-2 text-lg  text-white ${props.className}`}
            type={props.type}
            onClick={props.onClick}>
            {props.children}
        </button >
    )
}

export default Button