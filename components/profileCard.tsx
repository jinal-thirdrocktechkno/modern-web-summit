import React from 'react'

const ProfileCard = (props: ProfileCardProps) => {

  const { imageUrl, name, designation, companyName, locationFull, locationSort, isLast, imageClass } = props
  return (
    <div className="md:mb-2 sm:mb-5 profile-card cursor-pointer">
      <img src={imageUrl} alt="image" className={`w-full ${imageClass}`} />
      {isLast ?
        <div className="h-32 flex items-center justify-center cursor-pointer bg-lightGreen-200 hover:bg-lightGreen-100">
          <p className="text-lg text-black font-bold tracking-wide uppercase">See all speakers {'>'}</p>
        </div>
        :
        <>
          <div className="bg-gray-400 p-5">
            <h5 className="text-white uppercase text-base">{name}</h5>
            <p className="capitalize text-white text-opacity-75 text-xs">{designation}</p>
            <p className="text-white text-opacity-75 text-xs italic mt-2"><img className="inline mr-1" src="/images/office.svg" alt="office" /> {companyName}</p>
            <p className="text-white text-opacity-75 text-xs italic md:block sm:hidden"><img className="inline mr-1" src="/images/map-pin.svg" alt="address" /> {locationFull}</p>
            <p className="text-white text-opacity-75 text-xs italic md:hidden sm:block"><img className="inline mr-1" src="/images/map-pin.svg" alt="address" /> {locationSort}</p>
          </div>
        </>
      }
    </div>
  )
}

export default ProfileCard

type ProfileCardProps = {
  imageUrl: string,
  name: string,
  designation: string,
  companyName: string,
  locationFull: string,
  locationSort: string,
  isLast: boolean,
  imageClass: string
}
