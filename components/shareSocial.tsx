import React from 'react'

const ShareSocial = () => {
  return (
    <div className="flex items-center justify-center">
      <p className="uppercase font-extrabold text-gray-400 text-opacity-25 tracking-widest">share</p>
      <a href="https://www.google.co.in/">
        <img className="inline p-2" src="/images/Twitter.svg" alt="logo" />
      </a>
      <a href="https://www.google.co.in/">
        <img className="inline p-2" src="/images/LinkedIn.svg" alt="logo" />
      </a>
      <a href="https://www.google.co.in/">
        <img className="inline p-2" src="/images/github.svg" alt="logo" />
      </a>
    </div>
  )
}
export default ShareSocial
