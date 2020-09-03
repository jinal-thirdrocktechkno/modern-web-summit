import React from 'react'
import Title from '../../components/title'
import ProfileCard from '../../components/profileCard'


const Curators = () => {
  return (
    <div className="bg-white shadow-xs" >
      <div className="flex sm:flex-wrap md:flex-no-wrap">
        <div className="bg-black md:w-23 sm:w-full sm:flex-none md:flex-23 h-32 flex items-end self-start justify-center">
          <h4 className="text-5xl text-white leading-7 uppercase">Curators</h4>
        </div>
        <div className="flex flex-col p-6 sm:text-center md:text-left">
          <h5 className="text-2xl font-extrabold uppercase" >{"expert talk selection"}</h5>
          <p className="text-gray-300 font-medium text-base md:w-4/6 sm:w-full">{"We’ve assembled a team of experts well-known for their knowledge in and contributions to their industry & specialization. Track curators also work together to select the general session keynotes!"}</p>
        </div>
      </div>

      <div className="flex flex-wrap md:mt-6">
        <div className="md:w-1/2 sm:w-full md:p-10 sm:p-5">
          <Title title="serverless" parentClass="flex justify-center border-solid border" />
          <div className="flex pt-10 sm:flex-wrap md:flex-no-wrap justify-center">
            <div className="md:w-1/3 sm:w-3/4">
              <ProfileCard
                imageClass="border border-2"
                isLast={false}
                key={1}
                imageUrl="/images/curator1.svg"
                name="Soham Steward"
                designation="Senior Developer Advocate"
                companyName="Facebook"
                location="San Francisco, California"
              />
            </div>
            <div className="flex justify-between flex-col md:w-2/3 sm:w-full md:pl-10 sm:pl-0 md:text-left sm:text-center">
              <p className="text-gray-300 text-base font-medium">{'Brian has been working in the Serverless space for over 7 years. He’s the cofounder and CTO of Begin.com, the fastest and easiest way to setup CI/CD gitops for serverless web apps on AWS. He is the creator and maintainer of OpenJS Architect, an open-source framework for generating and deploying AWS standard SAM/CloudFormation, coined the term FASTstack. He has been keeping a close eye on Deno since its earliest moments and is already using it in production today. You can catch him @brianleroux on Twitter where he talks about open source, JavaScript, serverless, faststack, Deno, and other developer-related stuff.'}</p>
              <a href="https://www.google.co.in/" className="sm:mt-5 md:mt-0 md:self-start sm:self-center text-lg font-bold underline text-purple-200 hover:text-purple-100">{'See all the Serverless Speakers >'}</a>
            </div>
          </div>
        </div>
        <div className="md:w-1/2 sm:w-full md:p-10 sm:p-5">
          <Title title="React" parentClass="flex justify-center border-solid border" />
          <div className="flex pt-10 sm:flex-wrap md:flex-no-wrap justify-center">
            <div className="md:w-1/3 sm:w-3/4">
              <ProfileCard
                imageClass="border border-2"
                isLast={false}
                key={1}
                imageUrl="/images/curator2.svg"
                name="Soham Steward"
                designation="Senior Developer Advocate"
                companyName="Facebook"
                location="San Francisco, California"
              />
            </div>
            <div className="flex justify-between flex-col md:w-2/3 sm:w-full md:pl-10 sm:pl-0 md:text-left sm:text-center">
              <p className="text-gray-300 text-base font-medium">{'Brian has been working in the Serverless space for over 7 years. He’s the cofounder and CTO of Begin.com, the fastest and easiest way to setup CI/CD gitops for serverless web apps on AWS. He is the creator and maintainer of OpenJS Architect, an open-source framework for generating and deploying AWS standard SAM/CloudFormation, coined the term FASTstack. He has been keeping a close eye on Deno since its earliest moments and is already using it in production today. You can catch him @brianleroux on Twitter where he talks about open source, JavaScript, serverless, faststack, Deno, and other developer-related stuff.'}</p>
              <a href="https://www.google.co.in/" className="sm:mt-5 md:mt-0 md:self-start sm:self-center text-lg font-bold underline text-purple-200 hover:text-purple-100">{'See all the React Speakers >'}</a>
            </div>
          </div>
        </div>
        <div className="md:w-1/2 sm:w-full md:p-10 sm:p-5">
          <Title title="Svelte" parentClass="flex justify-center border-solid border" />
          <div className="flex pt-10 sm:flex-wrap md:flex-no-wrap justify-center">
            <div className="md:w-1/3 sm:w-3/4">
              <ProfileCard
                imageClass="border border-2"
                isLast={false}
                key={1}
                imageUrl="/images/curator3.svg"
                name="Soham Steward"
                designation="Senior Developer Advocate"
                companyName="Facebook"
                location="San Francisco, California"
              />
            </div>
            <div className="flex justify-between flex-col md:w-2/3 sm:w-full md:pl-10 sm:pl-0 md:text-left sm:text-center">
              <p className="text-gray-300 text-base font-medium">{'Brian has been working in the Serverless space for over 7 years. He’s the cofounder and CTO of Begin.com, the fastest and easiest way to setup CI/CD gitops for serverless web apps on AWS. He is the creator and maintainer of OpenJS Architect, an open-source framework for generating and deploying AWS standard SAM/CloudFormation, coined the term FASTstack. He has been keeping a close eye on Deno since its earliest moments and is already using it in production today. You can catch him @brianleroux on Twitter where he talks about open source, JavaScript, serverless, faststack, Deno, and other developer-related stuff.'}</p>
              <a href="https://www.google.co.in/" className="sm:mt-5 md:mt-0 md:self-start sm:self-center text-lg font-bold underline text-purple-200 hover:text-purple-100">{'See all the Svelte Speakers >'}</a>
            </div>
          </div>
        </div>
        <div className="md:w-1/2 sm:w-full md:p-10 sm:p-5">
          <Title title="CSS" parentClass="flex justify-center border-solid border" />
          <div className="flex pt-10 sm:flex-wrap md:flex-no-wrap justify-center">
            <div className="md:w-1/3 sm:w-3/4">
              <ProfileCard
                imageClass="border border-2"
                isLast={false}
                key={1}
                imageUrl="/images/curator4.svg"
                name="Soham Steward"
                designation="Senior Developer Advocate"
                companyName="Facebook"
                location="San Francisco, California"
              />
            </div>
            <div className="flex justify-between flex-col md:w-2/3 sm:w-full md:pl-10 sm:pl-0 md:text-left sm:text-center">
              <p className="text-gray-300 text-base font-medium">{`Stephanie Eckles is the author of ModernCSS.dev which provides modern solutions to old CSS problems as in-depth tutorials. She's also the creator of StyleStage.dev which encourages contributors to restyle the same HTML to practice their modern CSS and web design skills. Steph has over 13 years of webdev experience, and currently leads the design system development for a large fintech enterprise and is an egghead instructor. She's an advocate for accessibility, scalable CSS, site performance, and Eleventy. Offline, she's mom to two girls and a cowboy corgi, and enjoys baking.`}</p>
              <a href="https://www.google.co.in/" className="sm:mt-5 md:mt-0 md:self-start sm:self-center text-lg font-bold underline text-purple-200 hover:text-purple-100">{'See all the CSS Speakers >'}</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Curators
