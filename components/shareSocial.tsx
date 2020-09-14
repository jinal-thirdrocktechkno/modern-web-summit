import React from 'react'

const ShareSocial: React.FC = () => {
  return (
    <div className="flex items-center sm:justify-evenly md:justify-center">
      <a href="https://www.google.co.in/">
        <img className="inline p-2 sm:h-8 md:h-10" src="/images/Twitter.svg" alt="logo" />
      </a>
      <a href="https://www.google.co.in/">
        <img className="inline p-2 sm:h-8 md:h-10 md:px-10" src="/images/LinkedIn.svg" alt="logo" />
      </a>
      <a href="https://www.google.co.in/">
        <img className="inline p-2 sm:h-8 md:h-10" src="/images/github.svg" alt="logo" />
      </a>
    </div>
  )
}
export default ShareSocial
