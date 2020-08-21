import React from 'react'

const SponsorText = (props: SponsorTextProps) => {
  const { title, parentClass, image, imageClass } = props
  return (
    <div className={parentClass}>
      <img src={image} className={`m-5 ${imageClass} `} />
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
