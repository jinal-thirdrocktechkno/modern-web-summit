import React from 'react'
import Title from '../../components/title'
import SponsorDescription from '../../components/sponsorDescription'
import SponsorText from '../../components/sponsorText'
import { sponsorList } from '../../utility/constants'

const Sponsor = () => {
  return (
    <div className="bg-white mt-10" >
      <div className="flex flex-row flex-1">
        <div className="bg-black w-3/4 h-32 relative w-full bottom-0">
          <h4 className=" text-4xl text-white absolute">SPONSOR</h4>
        </div>
        <div className="flex flex-col mt-5">
          <p className="text-2xl font-bold text-left pl-10 uppercase" >{"Innovation at its Finest"}</p>
          <div className="text-justify mx-10">
            <p>{"APIs & tools that improve the developer experience. Platforms for streamlined collaborative work. Technologies that empower every member of your organization, and make for a better user experience. Sponsors of the Modern Web Summit are building interesting, sustainable, and forward-thinking ideas and services. In addition to providing financial support of the event, Sponsors have their own track for Expo sessions that dive deep into these ideas. From presentations and panels to breakout discussions & workshops, you can get up close with the companies, products, and tools that most interest you."}</p>
          </div>
        </div>
      </div>
      <div>
        <Title title="Presenting sponsor" />
        <SponsorDescription
          descriptionClass="w-2/4 my-6"
          title='flexport'
          description={
            'APIs & tools that improve the developer experience. Platforms for streamlined collaborative work. Technologies that empower every member of your organization, and make for a better user experience. Sponsors of the Modern Web Summit are building interesting, sustainable, and forward-thinking products and services. In addition to providing financial support of the event, Sponsors have their own track.'}
          parentClass="description"
          image="/images/flexport.svg"
        />
      </div>
      <div>
        <Title title="Diamond sponsors" />
        <div className=" flex flex-row">
          <SponsorDescription
            descriptionClass="w-3/5 mt-5"
            title='flexport'
            description={
              'APIs & tools that improve the developer experience. Platforms for streamlined collaborative work. Technologies that empower every member of your organization, and make for a better user experience. '}
            parentClass=" description"
            image="/images/course-hero.svg"
          />
          <SponsorDescription
            descriptionClass="w-3/5 mt-8"
            title='flexport'
            description={
              'APIs & tools that improve the developer experience. Platforms for streamlined collaborative work. Technologies that empower every member of your organization, and make for a better user experience. '}
            parentClass="description"
            image="/images/facebook.svg"
          />
        </div>
      </div>
      {sponsorList.map(({ list, parentClass, textClass, title }, index) => {
        return (
          <div key={index}>
            <Title title={title} />
            <div className={parentClass}>
              {list.map(({ isImage, image, title }, index) => {
                return (
                  <SponsorText
                    key={index}
                    isImage={isImage}
                    image={image}
                    title={title}
                    parentClass=""
                    textClass={textClass}
                  />
                )
              })}
            </div>
          </div>
        )
      })}
      <div>
        <Title title="Event organizer" />
        <SponsorDescription
          descriptionClass="w-2/4 my-8 mt-10"
          title='Event Loop'
          description={
            'APIs & tools that improve the developer experience. Platforms for streamlined collaborative work. Technologies that empower every member of your organization, and make for a better user experience. Sponsors of the Modern Web Summit are building interesting, sustainable, and forward-thinking products and services. In addition to providing financial support of the event, Sponsors have their own track.'}
          parentClass="description"
          image="/images/eventloop.svg"
        />
      </div>
    </div>
  )
}
export default Sponsor
