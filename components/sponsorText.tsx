import React from 'react'

const SponsorText = (props: SponsorTextProps) => {
  const { title, parentClass, textClass, isImage, image } = props
  return (
    <div className={parentClass}>
      {isImage ?
        <img className="inline" src={image} /> :
        <p className={textClass}>{title}</p>}
    </div>
  )
}
export default SponsorText

type SponsorTextProps = {
  title: string,
  parentClass: string,
  textClass: string,
  isImage: boolean,
  image: string
}
