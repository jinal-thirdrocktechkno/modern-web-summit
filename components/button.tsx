import React from 'react'

const Button = (props) => {
    const buttonClass = "animate-btn w-full"
    return <button
        onClick={() => props.handleButtonClick()}
        className={buttonClass}
        type="button" >
        {props.text}
    </button>
}

export default Button