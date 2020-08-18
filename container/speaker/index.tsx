import React from 'react'
import ProfileCard from '../../components/profileCard'

const Speaker = () => {
  return (
    <div className="bg-white mt-10">
      <div className="flex flex-row flex-1">
        <div className="bg-black w-3/4 h-32 relative w-full bottom-0">
          <h4 className=" text-4xl text-white absolute">SPEAKER</h4>
        </div>
        <div className="flex flex-col">
          <p className="text-2xl font-bold text-left pl-10 uppercase" >{"5 days, 100+ sessions, workshops, & Discussions"}</p>
          <div className="text-justify mx-10">
            <p>{"Whether you’re interested in learning a new technology or advancing your skills in a familiar stack, there’s something for everyone at the Modern Web Summit."}</p>
          </div>
        </div>
      </div>
      <div className="flex flex-row" >
        <div className="mt-2 mx-5">
          {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((item, index) => {
            return (
              <ProfileCard
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
        <div className="mt-5 mx-5">
          {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((item, index) => {
            return (
              <ProfileCard
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
        <div className="mt-10 mx-5">
          {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((item, index) => {
            return (
              <ProfileCard
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
        <div className="mt-20 mx-5">
          {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((item, index) => {
            return (
              <ProfileCard
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
      </div>
      <div>
        <p>Interested in speaking?</p>
        <button type="button" >Submit your talk here</button>
      </div>
    </div >)
}
export default Speaker
