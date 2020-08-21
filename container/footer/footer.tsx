import React from 'react'
import NotifyForm from '../../components/notify'
import FooterLink from '../../components/footerLinks'

const Footer = () => {
  return (
    <div className="bg-gray-400 p-10 flex">
      <div className="w-2/5 justify-center text-center flex flex-col">
        <img className="h-20" src="/images/mws-logo.svg" />
        <NotifyForm buttonClass="mt-10" />
      </div>
      <div className="w-3/5 flex flex-col">
        <FooterLink />
        <div className="items-end flex flex-col mt-10 mr-12">
          <img className="h-10" src="/images/event-loop-footer.svg" />
          <p className="mt-5 text-gray-200 text-sm">Copyright 2020 Event Loop, Inc.</p>
        </div>
      </div>
    </div>
  )
}

export default Footer
