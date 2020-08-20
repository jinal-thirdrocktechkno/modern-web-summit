import React from 'react'
import LabelText from '../../components/labelText'
import Typist from 'react-typist';


const Modern = () => {
  return (
    <div className="" >
      <div className="flex justify-center mb-2">
        <p className="text-white text-xl font-menlo mr-3">modern_web_summit$</p>
        <Typist cursor={{
          show: false,
          blink: true,
          element: '|',
          hideWhenDone: true,
          hideWhenDoneDelay: 1000,
        }}>
          <Typist.Delay ms={500} />
          <p className="text-white text-xl font-menlo">git pull</p>
        </Typist>
      </div>
      <h5 className="text-lightGreen text-4xl font-menlo">WEB COMMUNITIES TOGETHER</h5>

      <div className="flex justify-center mb-2 mt-10">
        <p className="text-white text-xl font-menlo mr-3">modern_web_summit$  </p>
        <Typist cursor={{
          show: false,
          blink: true,
          element: '|',
          hideWhenDone: true,
          hideWhenDoneDelay: 1000,
        }}>
          <Typist.Delay ms={500} />
          <p className="text-white text-xl font-menlo">git push</p>
        </Typist>
      </div>
      <h5 className="text-lightGreen text-4xl font-menlo">THE BOUNDS OF POSSIBILITY</h5>

      {/* <LabelText title="modern_web_summit$ git pull" label="WEB COMMUNITIES TOGETHER" />
      <LabelText title="modern_web_summit$ git push" label="THE BOUNDS OF POSSIBILITY" /> */}
    </div>
  )
}

export default Modern
