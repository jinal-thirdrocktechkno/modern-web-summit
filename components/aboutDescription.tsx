import React from 'react'

const AboutDescription: React.FC<AboutDescriptionProps> = (props: AboutDescriptionProps) => {
  const {
    image,
    parentClass,
    firstDescription,
    secondDescription,
    title,
    url,
    linkText
  } = props

  return (
    <div className={parentClass}>
      <img src={image} />
      <p className="text-2xl uppercase text-black font-extrabold mb-2" >{title}</p>
      <p className="text-gray-300 font-medium text-base sm:w-full mb-8">{firstDescription}</p>
      {secondDescription && <p className="text-gray-300 font-medium text-base sm:w-full mb-8">{secondDescription}</p>}
      {linkText && <a href={url} className="sm:mt-5 md:mt-0 md:self-start sm:self-center text-lg font-bold border-l-4 border-lightGreen-200 pl-2 uppercase arrow-link leading-6 hover:text-blue-100 ">{linkText} <span className="arrow">{' > '}</span> </a>}
    </div>
  )

}
export default AboutDescription

type AboutDescriptionProps = {
  title: string
  image: string,
  parentClass: string,
  firstDescription: string,
  secondDescription: string,
  linkText: string,
  url: string
}
