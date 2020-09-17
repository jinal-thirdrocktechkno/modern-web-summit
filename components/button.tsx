import React from 'react'

const Button = (props) => {
    const buttonClass = "menu-btn border-2 mb-5 p-6 border-gray-400 text-xl font-extrabold uppercase text-gray-400 hover:bg-gray-400 focus:outline-none hover:text-white"
    return <button
    onClick={() => props.handleButtonClick()}
    className={buttonClass}
    type="button" >
    {props.text}
    </button>
}

export default Button