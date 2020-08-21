import React from 'react'

const SponsorDescription = (props: SponsorDescriptionProps) => {
  const {
    title,
    description,
    image,
    parentClass,
    descriptionClass,
    innerClass
  } = props

  return (
    <div className={parentClass}>
      <div className={innerClass} >
        <a href="https://www.google.co.in/">
          <img className="inline mb-5" src={image} />
        </a>
        <p className={descriptionClass}>{description}</p>
      </div>
    </div>
  )

}
export default SponsorDescription

type SponsorDescriptionProps = {
  title: string,
  description: string,
  image: string,
  parentClass: string,
  descriptionClass: string,
  innerClass: string
}
