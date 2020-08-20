import React from 'react'
import Title from '../../components/title'
import ProfileCard from '../../components/profileCard'


const Curators = () => {

  const profileImage = 'https://st2.depositphotos.com/1006318/5909/v/450/depositphotos_59094701-stock-illustration-businessman-profile-icon.jpg'

  return (
    <div className="bg-white mt-10 pb-10" >
      <div className="flex">
        <div className="bg-black w-23 flex items-end justify-center">
          <h4 className=" text-5xl text-white leading-7">Curators</h4>
        </div>
        <div className="flex flex-col mt-5">
          <p className="text-2xl font-bold text-left pl-10 uppercase" >{"expert talk selection"}</p>
          <div className="text-justify mx-10">
            <p>{"We’ve assembled a team of experts well-known for their knowledge in and contributions to their industry & specialization. Track curators also work together to select the general session keynotes!"}</p>
          </div>
        </div>
      </div>
      <div className="flex flex-col">
        <div className="flex flex-row px-10 flex-1">
          <div className="flex flex-col mr-6 ">
            <Title title="serverless" parentClass="my-10" />
            <div className="flex flex-row">
              <div className="w-2/5">
                <ProfileCard
                  imageClass=""
                  isLast={false}
                  key={1}
                  imageUrl="/images/curator1.png"
                  name="Soham Steward"
                  designation="Senior Developer Advocate"
                  companyName="Facebook"
                  location="San Francisco, California"
                />
              </div>
              <div className="flex flex-col w-3/5">
                <p className="text-justify pt-4 pl-5 font-16 line-20">{'Brian has been working in the Serverless space for over 7 years. He’s the cofounder and CTO of Begin.com, the fastest and easiest way to setup CI/CD gitops for serverless web apps on AWS. He is the creator and maintainer of OpenJS Architect, an open-source framework for generating and deploying AWS standard SAM/CloudFormation, coined the term FASTstack. He has been keeping a close eye on Deno since its earliest moments and is already using it in production today. You can catch him @brianleroux on Twitter where he talks about open source, JavaScript, serverless, faststack, Deno, and other developer-related stuff.'}</p>
                <p className="underline text-left pl-5 color-purple">{'See all the Serverless Speakers >'}</p>
              </div>
            </div>
          </div>
          <div className="flex flex-col">
            <Title title="serverless" parentClass="my-10" />
            <div className="flex flex-row">
              <div className="w-2/5">
                <ProfileCard
                  imageClass=""
                  isLast={false}
                  key={1}
                  imageUrl={profileImage}
                  name="Soham Steward"
                  designation="Senior Developer Advocate"
                  companyName="Facebook"
                  location="San Francisco, California"
                />
              </div>
              <div className="flex flex-col w-3/5">
                <p className="text-justify pt-4 pl-5 font-16 line-20">{'Brian has been working in the Serverless space for over 7 years. He’s the cofounder and CTO of Begin.com, the fastest and easiest way to setup CI/CD gitops for serverless web apps on AWS. He is the creator and maintainer of OpenJS Architect, an open-source framework for generating and deploying AWS standard SAM/CloudFormation, coined the term FASTstack. He has been keeping a close eye on Deno since its earliest moments and is already using it in production today. You can catch him @brianleroux on Twitter where he talks about open source, JavaScript, serverless, faststack, Deno, and other developer-related stuff.'}</p>
                <p className="underline text-left pl-5 color-purple">{'See all the Serverless Speakers >'}</p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-row px-10 flex-1">
          <div className="flex flex-col mr-6 ">
            <Title title="serverless" parentClass="my-10" />
            <div className="flex flex-row">
              <div className="w-2/5">
                <ProfileCard
                  imageClass=""
                  isLast={false}
                  key={1}
                  imageUrl="/images/curator3.png"
                  name="Soham Steward"
                  designation="Senior Developer Advocate"
                  companyName="Facebook"
                  location="San Francisco, California"
                />
              </div>
              <div className="flex flex-col w-3/5">
                <p className="text-justify pt-4 pl-5 font-16 line-20">{'Brian has been working in the Serverless space for over 7 years. He’s the cofounder and CTO of Begin.com, the fastest and easiest way to setup CI/CD gitops for serverless web apps on AWS. He is the creator and maintainer of OpenJS Architect, an open-source framework for generating and deploying AWS standard SAM/CloudFormation, coined the term FASTstack. He has been keeping a close eye on Deno since its earliest moments and is already using it in production today. You can catch him @brianleroux on Twitter where he talks about open source, JavaScript, serverless, faststack, Deno, and other developer-related stuff.'}</p>
                <p className="underline text-left pl-5 color-purple">{'See all the Serverless Speakers >'}</p>
              </div>
            </div>
          </div>
          <div className="flex flex-col">
            <Title title="serverless" parentClass="my-10" />
            <div className="flex flex-row">
              <div className="w-2/5">
                <ProfileCard
                  imageClass=""
                  isLast={false}
                  key={1}
                  imageUrl="/images/curator4.png"
                  name="Soham Steward"
                  designation="Senior Developer Advocate"
                  companyName="Facebook"
                  location="San Francisco, California"
                />
              </div>
              <div className="flex flex-col w-3/5">
                <p className="text-justify pt-4 pl-5 font-16 line-20">{'Brian has been working in the Serverless space for over 7 years. He’s the cofounder and CTO of Begin.com, the fastest and easiest way to setup CI/CD gitops for serverless web apps on AWS. He is the creator and maintainer of OpenJS Architect, an open-source framework for generating and deploying AWS standard SAM/CloudFormation, coined the term FASTstack. He has been keeping a close eye on Deno since its earliest moments and is already using it in production today. You can catch him @brianleroux on Twitter where he talks about open source, JavaScript, serverless, faststack, Deno, and other developer-related stuff.'}</p>
                <p className="underline text-left pl-5 color-purple">{'See all the Serverless Speakers >'}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Curators
