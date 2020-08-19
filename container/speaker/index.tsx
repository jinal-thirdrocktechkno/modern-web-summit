import React from 'react'
import ProfileCard from '../../components/profileCard'

const Speaker = () => {
  return (
    <div className="bg-white">
      <div className="flex">
        <div className="bg-black w-23 flex items-end justify-center">
          <h4 className="text-5xl text-white leading-7">SPEAKER</h4>
        </div>
        <div className="flex flex-col p-6">
          <h5 className="text-2xl font-extrabold uppercase" >{"5 days, 100+ sessions, workshops, & Discussions"}</h5>
          <p className="text-typography font-medium text-base">{"Whether you’re interested in learning a new technology or advancing your skills in a familiar stack, there’s something for everyone at the Modern Web Summit."}</p>
        </div>
      </div>

      <div className="flex pl-48 p-10">
        <div className="mr-2 w-1/5">
          {[1, 2, 3, 4,].map((item, index) => {
            return (
              <ProfileCard
                isLast={false}
                key={index}
                imageUrl="https://st2.depositphotos.com/1006318/5909/v/450/depositphotos_59094701-stock-illustration-businessman-profile-icon.jpg"
                name="Soham Steward"
                designation="Senior Developer Advocate"
                companyName="Facebook"
                location="San Francisco, California"
              />
            )
          })}
        </div>
        <div className="mr-2 w-1/5">
          {[1, 2, 3, 4,].map((item, index) => {
            return (
              <ProfileCard
                isLast={false}
                key={index}
                imageUrl="https://st2.depositphotos.com/1006318/5909/v/450/depositphotos_59094701-stock-illustration-businessman-profile-icon.jpg"
                name="Soham Steward"
                designation="Senior Developer Advocate"
                companyName="Facebook"
                location="San Francisco, California"
              />
            )
          })}
        </div>
        <div className="mr-2 w-1/5">
          {[1, 2, 3, 4,].map((item, index) => {
            return (
              <ProfileCard
                isLast={false}
                key={index}
                imageUrl="https://st2.depositphotos.com/1006318/5909/v/450/depositphotos_59094701-stock-illustration-businessman-profile-icon.jpg"
                name="Soham Steward"
                designation="Senior Developer Advocate"
                companyName="Facebook"
                location="San Francisco, California"
              />
            )
          })}
        </div>
        <div className="mr-2 w-1/5">
          {[1, 2, 3, 4,].map((item, index) => {
            return (
              <ProfileCard
                isLast={index === 3}
                key={index}
                imageUrl="https://st2.depositphotos.com/1006318/5909/v/450/depositphotos_59094701-stock-illustration-businessman-profile-icon.jpg"
                name="Soham Steward"
                designation="Senior Developer Advocate"
                companyName="Facebook"
                location="San Francisco, California"
              />
            )
          })}
        </div>
        <div className="self-end mb-2 w-1/5">
          <p className="uppercase">Interested in speaking?</p>
          <button type="button" className="border-black border-2 py-4 px-6 text-lg mt-1" >Submit your talk here</button>
        </div>
      </div>
    </div >)
}
export default Speaker
