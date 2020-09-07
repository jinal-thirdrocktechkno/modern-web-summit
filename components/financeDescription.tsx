import React from 'react'

const FinanceDescription = (props: FinanceDescriptionProps) => {
  const {
    image,
    parentClass,
    description,
    title,
    url,
    linkText,
    percentage,
    financeImage
  } = props

  return (
    <div className={parentClass}>
      <div className="flex">
        <img src={image} />
        <p className="text-4xl pl-4">{percentage}</p>
      </div>
      <p className="text-2xl uppercase text-black font-extrabold mb-2" >{title}</p>
      {financeImage && <img src={financeImage} className="my-6 opacity-50" />}
      <p className="text-gray-300 font-medium text-base sm:w-full mb-8">{description}</p>
      {linkText && <a href={url} className="sm:mt-5 md:mt-0 md:self-start sm:self-center text-lg font-bold border-l-4 border-lightGreen pl-2 uppercase">{linkText}</a>}
    </div>
  )

}
export default FinanceDescription

type FinanceDescriptionProps = {
  financeImage: string,
  percentage: string
  title: string
  image: string,
  parentClass: string,
  description: string,
  linkText: string,
  url: string
}
