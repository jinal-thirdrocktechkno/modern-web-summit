import React from 'react'
import Typist from 'react-typist';
import { typistConfig, typistConfigDelay } from '../../utility/config';
import ScrollAnimation from 'react-animate-on-scroll';

const Modern = () => {
  return (
    <div className="" >
      <div className="flex justify-center mb-2">
        <p className="text-white text-xl font-menlo mr-3">modern_web_summit$</p>
        {/* <Typist cursor={typistConfig}>
          <Typist.Delay ms={typistConfigDelay} />
          <p className="text-white text-xl font-menlo">git pull</p>
        </Typist> */}
        <ScrollAnimation delay={200}
          animateIn="fadeIn">
          <p className="text-white text-xl font-menlo">g</p>
        </ScrollAnimation>
        <ScrollAnimation delay={400}
          animateIn="fadeIn">
          <p className="text-white text-xl font-menlo">i</p>
        </ScrollAnimation>
        <ScrollAnimation delay={600}
          animateIn="fadeIn">
          <p className="text-white text-xl font-menlo">t</p>
        </ScrollAnimation>
        <ScrollAnimation delay={800}
          animateIn="fadeIn">
          <p className="text-white text-xl font-menlo ml-2">p</p>
        </ScrollAnimation>
        <ScrollAnimation delay={1000}
          animateIn="fadeIn">
          <p className="text-white text-xl font-menlo">u</p>
        </ScrollAnimation>
        <ScrollAnimation delay={1200}
          animateIn="fadeIn">
          <p className="text-white text-xl font-menlo">l</p>
        </ScrollAnimation>
        <ScrollAnimation delay={1400}
          animateIn="fadeIn">
          <p className="text-white text-xl font-menlo">l</p>
        </ScrollAnimation>
      </div>
      <h5 className="text-lightGreen text-4xl font-menlo">WEB COMMUNITIES TOGETHER</h5>

      <div className="flex justify-center mb-2 mt-10">
        <p className="text-white text-xl font-menlo mr-3">modern_web_summit$  </p>
        {/* <Typist cursor={typistConfig}>
          <Typist.Delay ms={typistConfigDelay} />
          <p className="text-white text-xl font-menlo">git push</p>
        </Typist> */}
        <ScrollAnimation delay={200}
          animateIn="fadeIn">
          <p className="text-white text-xl font-menlo">g</p>
        </ScrollAnimation>
        <ScrollAnimation delay={400}
          animateIn="fadeIn">
          <p className="text-white text-xl font-menlo">i</p>
        </ScrollAnimation>
        <ScrollAnimation delay={600}
          animateIn="fadeIn">
          <p className="text-white text-xl font-menlo">t</p>
        </ScrollAnimation>
        <ScrollAnimation delay={800}
          animateIn="fadeIn">
          <p className="text-white text-xl font-menlo ml-2">p</p>
        </ScrollAnimation>
        <ScrollAnimation delay={1000}
          animateIn="fadeIn">
          <p className="text-white text-xl font-menlo">u</p>
        </ScrollAnimation>
        <ScrollAnimation delay={1200}
          animateIn="fadeIn">
          <p className="text-white text-xl font-menlo">s</p>
        </ScrollAnimation>
        <ScrollAnimation delay={1400}
          animateIn="fadeIn">
          <p className="text-white text-xl font-menlo">h</p>
        </ScrollAnimation>
      </div>
      <h5 className="text-lightGreen text-4xl font-menlo">THE BOUNDS OF POSSIBILITY</h5>
    </div>
  )
}

export default Modern
