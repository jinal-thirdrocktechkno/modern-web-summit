import React from 'react'

const SponsorDescription = (props: SponsorDescriptionProps) => {
  const {
    title,
    description,
    image,
    parentClass,
    titleClass,
    isImage,
    descriptionClass
  } = props

  return (
    <div className={parentClass}>
      <div className="flex flex-row" >
        {isImage ?
          <img className="inline" src={image} /> :
          <h3 className={titleClass} >{title}</h3>}
      </div>
      <p className={descriptionClass}>{description}</p>
    </div>
  )

}
export default SponsorDescription
export type SponsorDescriptionProps = {
  title: string,
  description: string,
  image: string,
  parentClass: string,
  titleClass: string,
  isImage: boolean,
  descriptionClass: string
}