import React from 'react'

const Button = (props) => {
    const buttonClass = "border-2 w-full uppercase text-lg font-bold border-gray-400 text-gray-400 py-3 px-2 mb-5 hover:bg-gray-400 hover:text-white"
    return <button
    onClick={() => props.handleButtonClick()}
    className={buttonClass}
    type="button" >
    {props.text}
    </button>
}

export default Button