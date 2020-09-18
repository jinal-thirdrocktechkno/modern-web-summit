import React from 'react'
import AnimationWrapper from './animationWrapper'

const SponsorDescription = (props: SponsorDescriptionProps) => {
  const {
    description,
    image,
    parentClass,
    descriptionClass,
    innerClass,
    imageClass
  } = props

  return (
    <div className={parentClass}>
      <div className={innerClass} >
        <a href="https://www.google.co.in/">
          <img className={`inline mb-5 opacity-75 hover:opacity-100 ${imageClass}`} src={image} />
        </a>
        <AnimationWrapper parentClass="" effect={"fadeIn"}>
          {image === '/images/eventloop.svg' && <img className={`inline mb-5 opacity-100 hover:opacity-100}`} src={"/images/eventloopText.svg"} />}
        <p className={descriptionClass}>{description}</p>
        </AnimationWrapper>
      </div>
    </div>
  )

}
export default SponsorDescription

type SponsorDescriptionProps = {
  description: string,
  image: string,
  parentClass: string,
  descriptionClass: string,
  innerClass: string,
  imageClass: string,
}
