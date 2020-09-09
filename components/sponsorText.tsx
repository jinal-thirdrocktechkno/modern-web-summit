import React from 'react'
import ScrollAnimation from 'react-animate-on-scroll'

const SponsorText = (props: SponsorTextProps) => {
  const { image, imageClass, parentClass } = props
  return (
    <ScrollAnimation className={parentClass} animateIn={'fadeIn'} animateOnce>
      <a href="https://www.google.co.in/">
        <img src={image} className={`inline opacity-75 hover:opacity-100 ${imageClass} `} />
      </a>
    </ScrollAnimation>
  )
}
export default SponsorText

type SponsorTextProps = {
  imageClass: string,
  image: string,
  parentClass: string
}
