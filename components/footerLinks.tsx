import React from 'react'
import { links } from '../utility/constants'

const FooterLink = () => {
  return (
    <div className="flex">
      {links.map(item => {
        return (
          <div className="w-1/4">
            {item.link.map(linkData => {
              return (
                <div>
                  <a href="https://www.google.com/" className="capitalize text-white text-opacity-50 text-base font-medium">
                    {linkData.title}
                  </a>
                </div>
              )
            })}
          </div>
        )
      })}
    </div>
  )
}

export default FooterLink
