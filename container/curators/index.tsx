import React, { useState, useEffect } from 'react'
import Title from '../../components/title'
import ProfileCard from '../../components/profileCard'
import AnimationWrapper from '../../components/animationWrapper'
import { VisibleProps } from '../sponsor'

const Curators = (props: VisibleProps) => {
  const { isVisible } = props
  const [className, setClass] = useState('')
  useEffect(() => {
    if (isVisible) {
      setClass('animated fadeInUp opacity-1')
    }
  })
  return (
    <div className={`bg-white shadow-xs opacity-0  ${className} md:pb-10 `}>
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
          <AnimationWrapper parentClass="" >
            <Title title="serverless" parentClass="flex justify-center border-solid border" />
            <div className="flex pt-10 sm:flex-wrap md:flex-no-wrap justify-center">
              <div className="md:w-1/3 sm:w-3/4">
                <ProfileCard
                  isForDescription={true}
                  imageClass="border border-2 filter-none"
                  isLast={false}
                  key={1}
                  imageUrl="/images/curator1.svg"
                  name="Soham Steward"
                  designation="Co-founder & CTO"
                  companyName="Begin"
                  locationFull="San Francisco / Vancouver"
                  locationSort="San Francisco / Vancouver"
                />
              </div>
              <div className="flex justify-between flex-col md:w-2/3 sm:w-full md:pl-10 sm:pl-0 md:text-left sm:text-center">
                <p className="text-gray-300 text-base font-medium">{'Brian has been working in the Serverless space for over 7 years. He’s the cofounder and CTO of Begin.com, the fastest and easiest way to setup CI/CD gitops for serverless web apps on AWS. He is the creator and maintainer of OpenJS Architect, an open-source framework for generating and deploying AWS standard SAM/CloudFormation, coined the term FASTstack. He has been keeping a close eye on Deno since its earliest moments and is already using it in production today. You can catch him @brianleroux on Twitter where he talks about open source, JavaScript, serverless, faststack, Deno, and other developer-related stuff.'}</p>
                <a href="https://www.google.co.in/" className="mt-5 md:self-start sm:self-center text-lg font-bold border-l-4 border-lightGreen-200 pl-2 uppercase arrow-link leading-6 hover:text-blue-100">{'See all the Serverless Speakers '}<span className="arrow">{' > '}</span> </a>
              </div>
            </div>
          </AnimationWrapper>
        </div>
        <div className="md:w-1/2 sm:w-full md:p-10 sm:p-5">
          <AnimationWrapper parentClass="">
            <Title title="CSS" parentClass="flex justify-center border-solid border" />
            <div className="flex pt-10 sm:flex-wrap md:flex-no-wrap justify-center">
              <div className="md:w-1/3 sm:w-3/4">
                <ProfileCard
                  isForDescription={true}
                  imageClass="border border-2 filter-none"
                  isLast={false}
                  key={1}
                  imageUrl="/images/curator2.svg"
                  name="Stephanie eckles"
                  designation="Lead design systems dev"
                  companyName="Facebook"
                  locationFull="San Francisco"
                  locationSort="San Francisco"
                />
              </div>
              <div className="flex justify-between flex-col md:w-2/3 sm:w-full md:pl-10 sm:pl-0 md:text-left sm:text-center">
                <p className="text-gray-300 text-base font-medium">{'Brian has been working in the Serverless space for over 7 years. He’s the cofounder and CTO of Begin.com, the fastest and easiest way to setup CI/CD gitops for serverless web apps on AWS. He is the creator and maintainer of OpenJS Architect, an open-source framework for generating and deploying AWS standard SAM/CloudFormation, coined the term FASTstack. He has been keeping a close eye on Deno since its earliest moments and is already using it in production today. You can catch him @brianleroux on Twitter where he talks about open source, JavaScript, serverless, faststack, Deno, and other developer-related stuff.'}</p>
                <a href="https://www.google.co.in/" className="sm:mt-5 md:mt-0 md:self-start sm:self-center text-lg font-bold border-l-4 border-lightGreen-200 pl-2 uppercase arrow-link leading-6 md:mt-5 hover:text-blue-100">{'See all the CSS Speakers '}<span className="arrow">{' > '}</span> </a>
              </div>
            </div>
          </AnimationWrapper>
        </div>
        <div className="md:w-1/2 sm:w-full md:p-10 sm:p-5">
          <AnimationWrapper parentClass="" >
            <Title title="Svelte" parentClass="flex justify-center border-solid border" />
            <div className="flex pt-10 sm:flex-wrap md:flex-no-wrap justify-center">
              <div className="md:w-1/3 sm:w-3/4">
                <ProfileCard
                  isForDescription={true}
                  imageClass="border border-2 filter-none"
                  isLast={false}
                  key={1}
                  imageUrl="/images/curator3.svg"
                  name="Soham Steward"
                  designation="Senior Developer Advocate"
                  companyName="AWS"
                  locationFull="San Francisco, California"
                  locationSort="San Francisco, CA"
                />
              </div>
              <div className="flex justify-between flex-col md:w-2/3 sm:w-full md:pl-10 sm:pl-0 md:text-left sm:text-center">
                <p className="text-gray-300 text-base font-medium">{'Brian has been working in the Serverless space for over 7 years. He’s the cofounder and CTO of Begin.com, the fastest and easiest way to setup CI/CD gitops for serverless web apps on AWS. He is the creator and maintainer of OpenJS Architect, an open-source framework for generating and deploying AWS standard SAM/CloudFormation, coined the term FASTstack. He has been keeping a close eye on Deno since its earliest moments and is already using it in production today. You can catch him @brianleroux on Twitter where he talks about open source, JavaScript, serverless, faststack, Deno, and other developer-related stuff.'}</p>
                <a href="https://www.google.co.in/" className="sm:mt-5 md:mt-0 md:self-start sm:self-center text-lg font-bold border-l-4 border-lightGreen-200 pl-2 uppercase arrow-link leading-6 md:mt-5 hover:text-blue-100">{'See all the Svelte Speakers '}<span className="arrow">{' > '}</span> </a>
              </div>
            </div>
          </AnimationWrapper>
        </div>
        <div className="md:w-1/2 sm:w-full md:p-10 sm:p-5">
          <AnimationWrapper parentClass="" >
            <Title title="Open source" parentClass="flex justify-center border-solid border" />
            <div className="flex pt-10 sm:flex-wrap md:flex-no-wrap justify-center">
              <div className="md:w-1/3 sm:w-3/4">
                <ProfileCard
                  isForDescription={true}
                  imageClass="border border-2 filter-none"
                  isLast={false}
                  key={1}
                  imageUrl="/images/curator4.svg"
                  name="Brian douglas"
                  designation="Developer Advocate"
                  companyName="GitHub"
                  locationFull="Oakland, CA"
                  locationSort="Oakland, CA"
                />
              </div>
              <div className="flex justify-between flex-col md:w-2/3 sm:w-full md:pl-10 sm:pl-0 md:text-left sm:text-center">
                <p className="text-gray-300 text-base font-medium">{`Brian Douglas is a Developer Advocate at GitHub where he works on increasing use of the GitHub’s platform specific features (Ask him about GitHub Actions!) through technical content distributed on the internet. In addition to that, Brian has a passion open source and loves mentoring new contributors through Open Sauced community.`}</p>
                <a href="https://www.google.co.in/" className="sm:mt-5 md:mt-0 md:self-start sm:self-center text-lg font-bold border-l-4 border-lightGreen-200 pl-2 uppercase arrow-link leading-6 md:mt-5 hover:text-blue-100">{'See all the open source Speakers '}<span className="arrow">{' > '}</span> </a>
              </div>
            </div>
          </AnimationWrapper>
        </div>
        <div className="md:w-1/2 sm:w-full md:p-10 sm:p-5">
          <AnimationWrapper parentClass="">
            <Title title="Jamstack" parentClass="flex justify-center border-solid border" />
            <div className="flex pt-10 sm:flex-wrap md:flex-no-wrap justify-center">
              <div className="md:w-1/3 sm:w-3/4">
                <ProfileCard
                  isForDescription={true}
                  imageClass="border border-2 filter-none"
                  isLast={false}
                  key={1}
                  imageUrl="/images/curator5.svg"
                  name="Tessa Mero"
                  designation="Developer Advocate"
                  companyName="Cloudinary"
                  locationFull="Seattle, WA"
                  locationSort="Seattle, WA"
                />
              </div>
              <div className="flex justify-between flex-col md:w-2/3 sm:w-full md:pl-10 sm:pl-0 md:text-left sm:text-center">
                <p className="text-gray-300 text-base font-medium">{`Tessa Mero is a Developer Advocate at Cloudinary. She regularly organizes meetups, such as APIs, Vue.js, JAMStack, and Developer Relations.  In the past, she has contributed to a leadership team for the open source Joomla! Project for 5 years, including the board of directors, leading the production team, as well as evangelizing Joomla as a public speaker. She organized a PHP conference and founded the API City Conference. She also is an avid career mentor and has helped countless developers become successful. In her free time, she enjoys cooking, camping, playing video games, fitness, and eating KBBQ.`}</p>
                <a href="https://www.google.co.in/" className="sm:mt-5 md:mt-0 md:self-start sm:self-center text-lg font-bold border-l-4 border-lightGreen-200 pl-2 uppercase arrow-link leading-6 md:mt-5 hover:text-blue-100">{'See all the jamstack Speakers '}<span className="arrow">{' > '}</span> </a>
              </div>
            </div>
          </AnimationWrapper>
        </div>
        <div className="md:w-1/2 sm:w-full md:p-10 sm:p-5">
          <AnimationWrapper parentClass="" >
            <Title title="GraphQL" parentClass="flex justify-center border-solid border" />
            <div className="flex pt-10 sm:flex-wrap md:flex-no-wrap justify-center">
              <div className="md:w-1/3 sm:w-3/4">
                <ProfileCard
                  isForDescription={true}
                  imageClass="border border-2 filter-none"
                  isLast={false}
                  key={1}
                  imageUrl="/images/curator6.svg"
                  name="Jon Wong"
                  designation="Developer Experience Engineer"
                  companyName="Coursera"
                  locationFull="San Francisco, CA"
                  locationSort="San Francisco, CA"
                />
              </div>
              <div className="flex justify-between flex-col md:w-2/3 sm:w-full md:pl-10 sm:pl-0 md:text-left sm:text-center">
                <p className="text-gray-300 text-base font-medium">{`Brian has been working in the Serverless space for over 7 years. He’s the cofounder and CTO of Begin.com, the fastest and easiest way to setup CI/CD gitops for serverless web apps on AWS. He is the creator and maintainer of OpenJS Architect, an open-source framework for generating and deploying AWS standard SAM/CloudFormation, coined the term FASTstack. He has been keeping a close eye on Deno since its earliest moments and is already using it in production today. You can catch him @brianleroux on Twitter where he talks about open source, JavaScript, serverless, faststack, Deno, and other developer-related stuff.`}</p>
                <a href="https://www.google.co.in/" className="sm:mt-5 md:mt-0 md:self-start sm:self-center text-lg font-bold border-l-4 border-lightGreen-200 pl-2 uppercase arrow-link leading-6 md:mt-5 hover:text-blue-100">{'See all the graphql Speakers '}<span className="arrow">{' > '}</span> </a>
              </div>
            </div>
          </AnimationWrapper>
        </div>
        <div className="md:w-1/2 sm:w-full md:p-10 sm:p-5">
          <AnimationWrapper parentClass="" >
            <Title title="Vue" parentClass="flex justify-center border-solid border" />
            <div className="flex pt-10 sm:flex-wrap md:flex-no-wrap justify-center">
              <div className="md:w-1/3 sm:w-3/4">
                <ProfileCard
                  isForDescription={true}
                  imageClass="border border-2 filter-none"
                  isLast={false}
                  key={1}
                  imageUrl="/images/curator7.svg"
                  name="Jen Looper"
                  designation="Developer Advocate"
                  companyName="Microsoft"
                  locationFull="Wellesley, MA"
                  locationSort="Wellesley, MA"
                />
              </div>
              <div className="flex justify-between flex-col md:w-2/3 sm:w-full md:pl-10 sm:pl-0 md:text-left sm:text-center">
                <p className="text-gray-300 text-base font-medium">{`Tessa Mero is a Developer Advocate at Cloudinary. She regularly organizes meetups, such as APIs, Vue.js, JAMStack, and Developer Relations.  In the past, she has contributed to a leadership team for the open source Joomla! Project for 5 years, including the board of directors, leading the production team, as well as evangelizing Joomla as a public speaker. She organized a PHP conference and founded the API City Conference. She also is an avid career mentor and has helped countless developers become successful. In her free time, she enjoys cooking, camping, playing video games, fitness, and eating KBBQ.`}</p>
                <a href="https://www.google.co.in/" className="sm:mt-5 md:mt-0 md:self-start sm:self-center text-lg font-bold border-l-4 border-lightGreen-200 pl-2 uppercase arrow-link leading-6 md:mt-5 hover:text-blue-100">{'See all the Vue Speakers '}<span className="arrow">{' > '}</span> </a>
              </div>
            </div>
          </AnimationWrapper>
        </div>
        <div className="md:w-1/2 sm:w-full md:p-10 sm:p-5">
          <AnimationWrapper parentClass="" >
            <Title title="Accessibility" parentClass="flex justify-center border-solid border" />
            <div className="flex pt-10 sm:flex-wrap md:flex-no-wrap justify-center">
              <div className="md:w-1/3 sm:w-3/4">
                <ProfileCard
                  isForDescription={true}
                  imageClass="border border-2 filter-none"
                  isLast={false}
                  key={1}
                  imageUrl="/images/curator8.svg"
                  name="Maria lamardo"
                  designation="Sr. Accessibility Designer"
                  companyName="CVS Health"
                  locationFull="North Carolina, USA"
                  locationSort="North Carolina, USA"
                />
              </div>
              <div className="flex justify-between flex-col md:w-2/3 sm:w-full md:pl-10 sm:pl-0 md:text-left sm:text-center">
                <p className="text-gray-300 text-base font-medium">{`Brian has been working in the Serverless space for over 7 years. He’s the cofounder and CTO of Begin.com, the fastest and easiest way to setup CI/CD gitops for serverless web apps on AWS. He is the creator and maintainer of OpenJS Architect, an open-source framework for generating and deploying AWS standard SAM/CloudFormation, coined the term FASTstack. He has been keeping a close eye on Deno since its earliest moments and is already using it in production today. You can catch him @brianleroux on Twitter where he talks about open source, JavaScript, serverless, faststack, Deno, and other developer-related stuff.`}</p>
                <a href="https://www.google.co.in/" className="sm:mt-5 md:mt-0 md:self-start sm:self-center text-lg font-bold border-l-4 border-lightGreen-200 pl-2 uppercase arrow-link leading-6 md:mt-5 hover:text-blue-100">{'See all the graphql Speakers '}<span className="arrow">{' > '}</span> </a>
              </div>
            </div>
          </AnimationWrapper>
        </div>
      </div>
    </div>
  )
}

export default Curators
