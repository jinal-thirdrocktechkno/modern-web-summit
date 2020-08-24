import React from 'react'

const SponsorText = (props: SponsorTextProps) => {
  const { title, parentClass, image, imageClass } = props
  return (
    <div className={parentClass}>
      <a href="https://www.google.co.in/">
        <img src={image} className={`${imageClass} `} />
      </a>
    </div>
  )
}
export default SponsorText

type SponsorTextProps = {
  title: string,
  parentClass: string,
  imageClass: string,
  image: string
}
