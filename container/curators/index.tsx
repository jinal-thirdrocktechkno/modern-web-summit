import React from 'react'
import Title from '../../components/title'
import ProfileCard from '../../components/profileCard'


const Curators = () => {

  const profileImage = 'https://st2.depositphotos.com/1006318/5909/v/450/depositphotos_59094701-stock-illustration-businessman-profile-icon.jpg'

  return (
    <div className="bg-white" >
      <div className="flex">
        <div className="bg-black w-23 flex-23 h-32 flex items-end self-start justify-center">
          <h4 className="text-5xl text-white leading-7">Curators</h4>
        </div>
        <div className="flex flex-col p-6">
          <h5 className="text-2xl font-extrabold uppercase" >{"expert talk selection"}</h5>
          <p className="text-gray-300 font-medium text-base">{"We’ve assembled a team of experts well-known for their knowledge in and contributions to their industry & specialization. Track curators also work together to select the general session keynotes!"}</p>
        </div>
      </div>

      <div className="flex flex-wrap mt-6">
        <div className="w-1/2 p-10">
          <Title title="serverless" parentClass="flex justify-center border-solid border" />
          <div className="flex pt-10">
            <div className="w-1/3">
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
            <div className="flex justify-between flex-col w-2/3 pl-10">
              <p className="text-gray-300 text-base font-medium">{'Brian has been working in the Serverless space for over 7 years. He’s the cofounder and CTO of Begin.com, the fastest and easiest way to setup CI/CD gitops for serverless web apps on AWS. He is the creator and maintainer of OpenJS Architect, an open-source framework for generating and deploying AWS standard SAM/CloudFormation, coined the term FASTstack. He has been keeping a close eye on Deno since its earliest moments and is already using it in production today. You can catch him @brianleroux on Twitter where he talks about open source, JavaScript, serverless, faststack, Deno, and other developer-related stuff.'}</p>
              <a href="https://www.google.co.in/" className="self-start text-lg font-bold underline text-purple-200">{'See all the Serverless Speakers >'}</a>
            </div>
          </div>
        </div>
        <div className="w-1/2 p-10">
          <Title title="React" parentClass="flex justify-center border-solid border" />
          <div className="flex pt-10">
            <div className="w-1/3">
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
            <div className="flex justify-between flex-col w-2/3 pl-10">
              <p className="text-gray-300 text-base font-medium">{'Brian has been working in the Serverless space for over 7 years. He’s the cofounder and CTO of Begin.com, the fastest and easiest way to setup CI/CD gitops for serverless web apps on AWS. He is the creator and maintainer of OpenJS Architect, an open-source framework for generating and deploying AWS standard SAM/CloudFormation, coined the term FASTstack. He has been keeping a close eye on Deno since its earliest moments and is already using it in production today. You can catch him @brianleroux on Twitter where he talks about open source, JavaScript, serverless, faststack, Deno, and other developer-related stuff.'}</p>
              <a href="https://www.google.co.in/" className="self-start text-lg font-bold underline text-purple-200">{'See all the React Speakers >'}</a>
            </div>
          </div>
        </div>
        <div className="w-1/2 p-10">
          <Title title="Svelte" parentClass="flex justify-center border-solid border" />
          <div className="flex pt-10">
            <div className="w-1/3">
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
            <div className="flex justify-between flex-col w-2/3 pl-10">
              <p className="text-gray-300 text-base font-medium">{'Brian has been working in the Serverless space for over 7 years. He’s the cofounder and CTO of Begin.com, the fastest and easiest way to setup CI/CD gitops for serverless web apps on AWS. He is the creator and maintainer of OpenJS Architect, an open-source framework for generating and deploying AWS standard SAM/CloudFormation, coined the term FASTstack. He has been keeping a close eye on Deno since its earliest moments and is already using it in production today. You can catch him @brianleroux on Twitter where he talks about open source, JavaScript, serverless, faststack, Deno, and other developer-related stuff.'}</p>
              <a href="https://www.google.co.in/" className="self-start text-lg font-bold underline text-purple-200">{'See all the Svelte Speakers >'}</a>
            </div>
          </div>
        </div>
        <div className="w-1/2 p-10">
          <Title title="CSS" parentClass="flex justify-center border-solid border" />
          <div className="flex pt-10">
            <div className="w-1/3">
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
            <div className="flex justify-between flex-col w-2/3 pl-10">
              <p className="text-gray-300 text-base font-medium">{'Brian has been working in the Serverless space for over 7 years. He’s the cofounder and CTO of Begin.com, the fastest and easiest way to setup CI/CD gitops for serverless web apps on AWS. He is the creator and maintainer of OpenJS Architect, an open-source framework for generating and deploying AWS standard SAM/CloudFormation, coined the term FASTstack. He has been keeping a close eye on Deno since its earliest moments and is already using it in production today. You can catch him @brianleroux on Twitter where he talks about open source, JavaScript, serverless, faststack, Deno, and other developer-related stuff.'}</p>
              <a href="https://www.google.co.in/" className="self-start text-lg font-bold underline text-purple-200">{'See all the CSS Speakers >'}</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Curators
