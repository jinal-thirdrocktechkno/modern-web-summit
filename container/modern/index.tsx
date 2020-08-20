import React from 'react'
import Typist from 'react-typist';
import { typistConfig, typistConfigDelay } from '../../utility/config';

const Modern = () => {
  return (
    <div className="" >
      <div className="flex justify-center mb-2">
        <p className="text-white text-xl font-menlo mr-3">modern_web_summit$</p>
        <Typist cursor={typistConfig}>
          <Typist.Delay ms={typistConfigDelay} />
          <p className="text-white text-xl font-menlo">git pull</p>
        </Typist>
      </div>
      <h5 className="text-lightGreen text-4xl font-menlo">WEB COMMUNITIES TOGETHER</h5>

      <div className="flex justify-center mb-2 mt-10">
        <p className="text-white text-xl font-menlo mr-3">modern_web_summit$  </p>
        <Typist cursor={typistConfig}>
          <Typist.Delay ms={typistConfigDelay} />
          <p className="text-white text-xl font-menlo">git push</p>
        </Typist>
      </div>
      <h5 className="text-lightGreen text-4xl font-menlo">THE BOUNDS OF POSSIBILITY</h5>
    </div>
  )
}

export default Modern
