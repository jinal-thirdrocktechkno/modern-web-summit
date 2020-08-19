import React from 'react'
import { links } from '../utility/constants'

const FooterLink = () => {
  return (
    <div className="p-4 flex flex-row justify-around">
      {links.map(item => {
        return (
          <div className="flex flex-col pt-1">
            {item.link.map(i => {
              return (
                <div>
                  <a className="capitalize text-white font-16 line-20 link-text cursor-pointer">{i.title}</a>
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