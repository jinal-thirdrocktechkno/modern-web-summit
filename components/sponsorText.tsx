import React from 'react'

const SponsorText = (props: SponsorTextProps) => {
  const { image, imageClass } = props
  return (
    <div>
      <img src={image} className={`m-5 ${imageClass} `} />
    </div>
  )
}
export default SponsorText

type SponsorTextProps = {
  imageClass: string,
  image: string
}
