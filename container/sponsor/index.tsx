import React from 'react'
import Title from '../../components/title'
import SponsorDescription from '../../components/sponsorDescription'
import SponsorText from '../../components/sponsorText'
import { sponsorList } from '../../utility/constants'

const Sponsor = () => {
  return (
    <div className="bg-white shadow-xs">
      <div className="flex">
        <div className="bg-black w-23 flex-23 h-32 flex items-end self-start justify-center">
          <h4 className="text-5xl text-white leading-7">SPONSOR</h4>
        </div>
        <div className="flex flex-col p-6">
          <h5 className="text-2xl font-extrabold uppercase" >{"Innovation at its Finest"}</h5>
          <p className="text-gray-300 font-medium text-base">{"APIs & tools that improve the developer experience. Platforms for streamlined collaborative work. Technologies that empower every member of your organization, and make for a better user experience. Sponsors of the Modern Web Summit are building interesting, sustainable, and forward-thinking ideas and services. In addition to providing financial support of the event, Sponsors have their own track for Expo sessions that dive deep into these ideas. From presentations and panels to breakout discussions & workshops, you can get up close with the companies, products, and tools that most interest you."}</p>
        </div>
      </div>

      <div className="p-10">
        <Title title="Presenting sponsor" parentClass="flex justify-center border-solid border" />
        <SponsorDescription
          descriptionClass=""
          innerClass="w-1/2 pt-10 pb-20"
          title='flexport'
          description={
            'APIs & tools that improve the developer experience. Platforms for streamlined collaborative work. Technologies that empower every member of your organization, and make for a better user experience. Sponsors of the Modern Web Summit are building interesting, sustainable, and forward-thinking products and services. In addition to providing financial support of the event, Sponsors have their own track.'}
          parentClass="flex justify-center text-center"
          image="/images/flexport.svg"
        />

        <Title title="Diamond sponsors" parentClass="flex justify-center border-solid border" />
        <div className="flex pt-10 pb-20 justify-around">
          <SponsorDescription
            descriptionClass=""
            innerClass="text-center"
            title='flexport'
            description={
              'APIs & tools that improve the developer experience. Platforms for streamlined collaborative work. Technologies that empower every member of your organization, and make for a better user experience. '}
            parentClass="w-1/4"
            image="/images/course-hero.svg"
          />
          <SponsorDescription
            descriptionClass=""
            innerClass="text-center"
            title='flexport'
            description={
              'APIs & tools that improve the developer experience. Platforms for streamlined collaborative work. Technologies that empower every member of your organization, and make for a better user experience. '}
            parentClass="w-1/4"
            image="/images/facebook.svg"
          />
        </div>

        {sponsorList.map(({ list, parentClass, textClass, title }, index) => {
          return (
            <div key={index}>
              <Title title={title} parentClass="flex justify-center border-solid border" />
              <div className={parentClass}>
                {list.map(({ isImage, image, title }, index) => {
                  return (
                    <SponsorText
                      key={index}
                      isImage={true}
                      image={'/images/flexport.svg'}
                      title={title}
                      parentClass="w-1/4 mb-3 text-center"
                      textClass={textClass}
                    />
                  )
                })}
              </div>
            </div>
          )
        })}

        <div>
          <Title title="Event organizer" parentClass="flex justify-center border-solid border" />
          <SponsorDescription
            descriptionClass=""
            innerClass="w-1/2 pt-10 pb-20"
            title='Event Loop'
            description={
              'APIs & tools that improve the developer experience. Platforms for streamlined collaborative work. Technologies that empower every member of your organization, and make for a better user experience. Sponsors of the Modern Web Summit are building interesting, sustainable, and forward-thinking products and services. In addition to providing financial support of the event, Sponsors have their own track.'}
            parentClass="flex justify-center text-center"
            image="/images/eventloop.svg"
          />
        </div>
      </div>
    </div>
  )
}
export default Sponsor
