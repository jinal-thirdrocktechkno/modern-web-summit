import React from 'react'

const SponsorText = (props: SponsorTextProps) => {
  const { title, parentClass, textClass, isImage, image } = props
  return (
    <div className={parentClass}>
      {isImage ?
        <a href="https://www.google.co.in/">
          <img className="inline" src={image} />
        </a> :
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
