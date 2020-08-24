import React from 'react'

const logo = () => {
    return <div>
        <img className="inline sm:hidden md:inline -mt-10 mb-10" src="/images/logo.svg" alt="logo" />
        <img className="inline w-full sm:inline md:hidden mb-10" src="/images/logo-mobile.svg" alt="logo" />
    </div>
}

export default logo
