import React from 'react'
import { links } from '../utility/constants'

const FooterLink = () => {
  return (
    <div className="flex">
      {links.map((item, index) => {
        return (
          <div key={index} className="w-1/4">
            {item.link.map((linkData, i) => {
              return (
                <div key={i}>
                  <a href="https://www.google.com/" className="capitalize text-white hover:text-purple-200 text-opacity-50 text-base font-medium">
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
