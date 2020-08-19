import React from 'react'

const SponsorDescription = (props: SponsorDescriptionProps) => {
  const {
    title,
    description,
    image,
    parentClass,
    descriptionClass
  } = props

  return (
    <div className={parentClass}>
      <div className="flex flex-row" >
        <img className="inline" src={image} />
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
  descriptionClass: string
}
