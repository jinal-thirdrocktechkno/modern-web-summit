import React from 'react'
import ProfileCard from '../../components/profileCard'

const Speaker = () => {
  const abc = [1, 2, 3, 4];
  return (
    <div className="bg-white shadow-xs">
      <div className="flex sm:flex-wrap md:flex-no-wrap">
        <div className="bg-black md:w-23 sm:w-full sm:flex-none md:flex-23 h-32 flex items-end self-start justify-center">
          <h4 className="text-5xl text-white leading-7">SPEAKER</h4>
        </div>
        <div className="flex flex-col p-6 sm:text-center md:text-left">
          <h5 className="text-2xl font-extrabold uppercase" >{"5 days, 100+ sessions, workshops, & Discussions"}</h5>
          <p className="text-gray-300 font-medium text-base">{"Whether you’re interested in learning a new technology or advancing your skills in a familiar stack, there’s something for everyone at the Modern Web Summit."}</p>
        </div>
      </div>

      <div className="flex sm:flex-wrap md:flex-no-wrap md:pl-48 md:p-10 sm:p-0">
        <div className="md:mr-2 sm:mr-0 md:w-1/5 sm:w-1/2 sm:pl-5 md:pl-0 sm:pr-2 md:pr-0">
          {abc.map((item, index) => {
            return (
              <ProfileCard
                imageClass="blend-luminosity"
                isLast={false}
                key={index}
                imageUrl="/images/speaker.png"
                name="Soham Steward"
                designation="Senior Developer Advocate"
                companyName="Facebook"
                location="San Francisco, California"
              />
            )
          })}
        </div>
        <div className="md:mr-2 sm:mr-0 md:w-1/5 sm:w-1/2 mt-16 sm:pr-5 md:pr-0 sm:pl-2 md:pl-0">
          {abc.map((item, index) => {
            return (
              <ProfileCard
                imageClass="blend-luminosity"
                isLast={false}
                key={index}
                imageUrl="/images/speaker.png"
                name="Soham Steward"
                designation="Senior Developer Advocate"
                companyName="Facebook"
                location="San Francisco, California"
              />
            )
          })}
        </div>
        <div className="md:mr-2 sm:mr-0 md:w-1/5 sm:w-1/2 mt-32 sm:pl-5 md:pl-0 sm:pr-2 md:pr-0 sm:hidden md:block">
          {abc.map((item, index) => {
            return (
              <ProfileCard
                imageClass="blend-luminosity"
                isLast={false}
                key={index}
                imageUrl="/images/speaker.png"
                name="Soham Steward"
                designation="Senior Developer Advocate"
                companyName="Facebook"
                location="San Francisco, California"
              />
            )
          })}
        </div>
        <div className="md:mr-2 sm:mr-0 md:w-1/5 sm:w-1/2 mt-48 sm:pr-5 md:pr-0 sm:pl-2 md:pl-0 sm:hidden md:block">
          {abc.map((item, index) => {
            return (
              <ProfileCard
                imageClass="blend-luminosity"
                isLast={index === 3}
                key={index}
                imageUrl="/images/speaker.png"
                name="Soham Steward"
                designation="Senior Developer Advocate"
                companyName="Facebook"
                location="San Francisco, California"
              />
            )
          })}
        </div>
        <div className="md:flex sm:hidden justify-end flex-col items-end self-end mb-2 w-1/5">
          <div className="text-center">
            <p className="uppercase text-xs text-gray-400 font-extrabold">Interested in speaking?</p>
            <button type="button" className="uppercase border-gray-400 text-gray-400 hover:bg-gray-400 hover:text-white font-black border-2 py-3 px-4 text-lg mt-1 focus:outline-none">Submit your talk here</button>
          </div>
        </div>
        <div className="sm:block md:hidden p-4">
          <button type="button" className="w-full uppercase border-purple-100 rounded-md text-purple-100 font-black border-2 p-4 text-lg mt-1 focus:outline-none">see all speakers</button>
          <button type="button" className="w-full mt-5 custom-btn focus:outline-none">Submit your talk here</button>
        </div>
      </div>
    </div >)
}
export default Speaker
