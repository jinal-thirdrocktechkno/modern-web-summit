import React from 'react'

const logo: React.FC = () => {
    return <div className="logo">
        <img className="inline w-450 sm:hidden md:inline mb-10" src="/images/new-logo.svg" alt="logo" />
        <img className="inline w-full sm:inline md:hidden" src="/images/logo-mobile.svg" alt="logo" />
    </div>
}

export default logo
