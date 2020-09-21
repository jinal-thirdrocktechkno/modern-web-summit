import React from 'react'
import { links } from '../utility/constants'
import Link from 'next/link'
const FooterLink = (props) => {

  const linkClass = "pr-2 capitalize text-white hover:text-blue-100 md:text-opacity-50 sm:text-opacity-1 text-base font-medium"

  const onPageClick = (pageName) => {
    const pageRef = document.getElementById(pageName)
    if (props.isHomePage) {
      pageRef.scrollIntoView()
    } else {
      setTimeout(() => {
        pageRef.scrollIntoView()
      }, 1000)
    }
  }

  return (
    <div className="flex flex-wrap">
      {links.map(({ link }, index) => <div key={index} className="lg:w-1/4 sm:w-1/2 sm:mb-10 md:mb-0">
        {link.map((linkData, i) => <div key={i}>
          {linkData.pageName &&
            (props.isHomePage &&
              <a onClick={() => onPageClick(linkData.pageName)} className={linkClass}>
                {linkData.title}
              </a> ||
              <Link href={linkData.url}>
                <a onClick={() => onPageClick(linkData.pageName)} className={linkClass}>
                  {linkData.title}
                </a>
              </Link>)
            ||
            <Link href={linkData.url}>
              <a className={linkClass}>
                {linkData.title}
              </a>
            </Link>
          }
        </div>
        )}
      </div>
      )}
    </div>
  )
}

export default FooterLink
