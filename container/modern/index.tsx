import React from 'react'
import LabelText from '../../components/labelText'
import Typist from 'react-typist';


const Modern = () => {
  return (
    <div className="bg-white m-10 w-full" >
      <div className="flex flex-row ">
        <p>modern_web_summit$  </p>
        <Typist>
          <Typist.Delay ms={500} />
          <p>git pull</p>
        </Typist>

      </div>
      <div className="flex flex-row ">
        <p>modern_web_summit$  </p>
        <Typist>
          <Typist.Delay ms={500} />
          <p>git push</p>
        </Typist>
      </div>

      {/* <LabelText title="modern_web_summit$ git pull" label="WEB COMMUNITIES TOGETHER" />
      <LabelText title="modern_web_summit$ git push" label="THE BOUNDS OF POSSIBILITY" /> */}
    </div>
  )
}

export default Modern