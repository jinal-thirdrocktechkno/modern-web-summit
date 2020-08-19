import React from 'react'

const SponsorText = (props: SponsorTextProps) => {
  const { title, parentClass, textClass, isImage, image } = props
  return (
    <div className={parentClass}>
      {isImage ?
        <img src={image} /> :
        <p className={textClass}>{title}</p>}
    </div>
  )
}
export default SponsorText

export type SponsorTextProps = {
  title: string,
  parentClass: string,
  textClass: string,
  isImage: boolean,
  image: string
}
