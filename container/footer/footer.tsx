import React from 'react'
import NotifyForm from '../../components/notify'
import FooterLink from '../../components/footerLinks'

const Footer = () => {
  return (
    <div className="bg-black p-10 flex flex-row">
      <div className="w-1/3 justify-center text-center flex flex-col">
        <img src="/images/mws-logo.svg" />
        <NotifyForm buttonClass="footer-button mt-5" />
      </div>
      <div className="w-2/3 flex flex-col mr-16">
        <FooterLink />
        <div className="items-end flex flex-col m-5 ">
          <img src="/images/event-loop-footer.svg" />
          <p className="copyright-text mt-5 ">Copyright 2020 Event Loop, Inc.</p>
        </div>
      </div>
    </div>
  )
}

export default Footer