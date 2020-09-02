import React from 'react'

const ShareSocial = () => {
  return (
    <div className="flex items-center sm:justify-evenly md:justify-center">
      <p className="uppercase font-extrabold text-gray-400 text-opacity-25 tracking-widest sm:hidden md:block">share</p>
      <a href="https://www.google.co.in/">
        <img className="inline p-2 sm:h-8 md:h-auto" src="/images/Twitter.svg" alt="logo" />
      </a>
      <a href="https://www.google.co.in/">
        <img className="inline p-2 sm:h-8 md:h-auto" src="/images/LinkedIn.svg" alt="logo" />
      </a>
      <a href="https://www.google.co.in/">
        <img className="inline p-2 sm:h-8 md:h-auto" src="/images/github.svg" alt="logo" />
      </a>
    </div>
  )
}
export default ShareSocial
