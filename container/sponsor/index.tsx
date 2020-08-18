import React from 'react'
import Title from '../../components/title'
import SponsorDescription from '../../components/sponsorDescription'
import SponsorText from '../../components/sponsorText'
import { silverSponsor, goldSponsor, platinumSponsor } from '../../utility/constants'

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
          isImage={true}
          title='flexport'
          description={
            'APIs & tools that improve the developer experience. Platforms for streamlined collaborative work. Technologies that empower every member of your organization, and make for a better user experience. Sponsors of the Modern Web Summit are building interesting, sustainable, and forward-thinking products and services. In addition to providing financial support of the event, Sponsors have their own track.'}
          parentClass="description"
          titleClass=" text-5xl "
          image="/images/flexport.svg"
        />
      </div>
      <div>
        <Title title="Diamond sponsors" />
        <div className=" flex flex-row">
          <SponsorDescription
            descriptionClass="w-3/5 mt-5"
            isImage={true}
            title='flexport'
            description={
              'APIs & tools that improve the developer experience. Platforms for streamlined collaborative work. Technologies that empower every member of your organization, and make for a better user experience. '}
            parentClass=" description"
            titleClass="text-5xl"
            image="/images/course-hero.svg"
          />
          <SponsorDescription
            descriptionClass="w-3/5 mt-8"
            isImage={true}
            title='flexport'
            description={
              'APIs & tools that improve the developer experience. Platforms for streamlined collaborative work. Technologies that empower every member of your organization, and make for a better user experience. '}
            parentClass="description"
            titleClass="text-5xl"
            image="/images/facebook.svg"
          />
        </div>
      </div>
      <div>
        <Title title="Platinum sponsors" />
        <div className="flex flex-row justify-center">
          {platinumSponsor.map(item => {
            return (
              <SponsorText
                isImage={item.isImage}
                image={item.image}
                title={item.title}
                parentClass=""
                textClass="m-5 text-5xl "
              />
            )
          })}
        </div>
      </div>
      <div>
        <Title title="GOLD sponsors" />
        <div className="flex flex-row justify-center">
          {goldSponsor.map(item => {
            return (
              <SponsorText
                isImage={item.isImage}
                image={item.image}
                title={item.title}
                parentClass=""
                textClass="m-5 text-4xl "
              />
            )
          })}
        </div>
      </div>
      <div>
        <Title title="Silver sponsors" />
        <div className="flex flex-row justify-center flex-wrap mx-40">
          {silverSponsor.map(item => {
            return (
              <SponsorText
                isImage={item.isImage}
                image={item.image}
                title={item.title}
                parentClass=""
                textClass="m-5 text-4xl"
              />
            )
          })}
        </div>
      </div>
      <div>
        <Title title="Event organizer" />
        <SponsorDescription
          descriptionClass="w-2/4 my-8 mt-10"
          isImage={true}
          title='Event Loop'
          description={
            'APIs & tools that improve the developer experience. Platforms for streamlined collaborative work. Technologies that empower every member of your organization, and make for a better user experience. Sponsors of the Modern Web Summit are building interesting, sustainable, and forward-thinking products and services. In addition to providing financial support of the event, Sponsors have their own track.'}
          parentClass="description"
          titleClass="text-5xl"
          image="/images/eventloop.svg"
        />
      </div>
    </div>
  )
}
export default Sponsor
