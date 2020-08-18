import React from 'react'

const ProfileCard = (props: ProfileCardProps) => {

  const { imageUrl, name, designation, companyName, location } = props
  return (
    <div>
      <img src={imageUrl} alt="image" />
      <div>
        <p>{name}</p>
        <p>{designation}</p>
      </div>
      <div>
        <i></i>
        <p>{location}</p>
      </div>
      <div>
        <i></i>
        <p>{location}</p>
      </div>
    </div>
  )
}

export default ProfileCard

export type ProfileCardProps = {
  imageUrl: string,
  name: string,
  designation: string,
  companyName: string,
  location: string
}