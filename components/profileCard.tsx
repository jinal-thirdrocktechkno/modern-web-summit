import React from 'react'

const ProfileCard = (props: ProfileCardProps) => {

  const { imageUrl, name, designation, companyName, location, isLast } = props
  return (
    <div className="border-black border-2 mb-2">
      <img src={imageUrl} alt="image" />
      {isLast ?
        <div className="last-card flex justify-center">
          <p className="leading-5 uppercase text-lg self-center " >See all speakers {'>'}</p>
        </div>
        :
        <>
          <div className="bg-black pt-4 px-4">
            <p className="text-white font-16 line-20 text-left">{name}</p>
            <p className="text-white font-12 line-20 text-left">{designation}</p>
          </div>
          <div className="bg-black pt-3  px-1 px-4">
            <i></i>
            <p className="text-white font-12 line-14 text-left italic">{location}</p>
          </div>
          <div className="bg-black  px-1 pt-1 px-4 pb-4">
            <i></i>
            <p className="text-white font-12 line-14 text-left italic">{companyName}</p>
          </div>
        </>
      }
    </div>
  )
}

export default ProfileCard

export type ProfileCardProps = {
  imageUrl: string,
  name: string,
  designation: string,
  companyName: string,
  location: string,
  isLast: boolean
}
