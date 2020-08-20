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
      <div className="w-1/2 pt-10 pb-20" >
        <img className="inline mb-5" src={image} />
        <p className={descriptionClass}>{description}</p>
      </div>
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
