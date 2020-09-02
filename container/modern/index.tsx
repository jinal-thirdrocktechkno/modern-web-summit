import React, { useEffect, useState, useRef } from 'react'
import Typist from 'react-typist';
import { typistConfig, typistConfigDelay } from '../../utility/config';


const Modern = (props) => {

  const [key, setKey] = useState(new Date().getTime())
  const [firstTime, setFirstTime] = useState(true)
  const [secondKey, setSecondKey] = useState(new Date().getTime())
  const [dataVisible, setVisible] = useState(false)
  const [typistVisible, setTypistVisible] = useState(false)
  useEffect(() => {
    const { isVisible } = props
    if (isVisible && firstTime) {
      setFirstTime(false)
      setTypistVisible(true)
      handleOnPageVisible()
    }
  })

  const handleOnPageVisible = () => {
    setKey(new Date().getTime())
    setSecondKey(new Date().getTime())
    setVisible(true)
  }
  return (

    <div className="" id="modern" >
      {/* <button onClick={() => setOnclick()}>Click</button> */}
      <div className="flex justify-center mb-2">
        <p className="gsapDemo text-white text-xl font-menlo mr-3 ">modern_web_summit$</p>
        {typistVisible && <Typist key={key} cursor={typistConfig}>
          <Typist.Delay ms={200} />
          <p className="text-white text-xl font-menlo">git pull</p>
        </Typist>}
      </div>
      {dataVisible && <h5 className="text-lightGreen text-4xl font-menlo animated delay fadeIn">WEB COMMUNITIES TOGETHER</h5>}
      <div className="flex justify-center mb-2 mt-10">
        {dataVisible && <p className="text-white text-xl font-menlo mr-3 animated delay fadeIn">modern_web_summit$  </p>}
        {typistVisible && <Typist key={secondKey} cursor={typistConfig}>
          <Typist.Delay ms={1200} />
          <p className="text-white text-xl font-menlo">git push</p>
        </Typist>}
      </div>
      {dataVisible && <h5 className="text-lightGreen text-4xl font-menlo animated delay1 fadeIn">THE BOUNDS OF POSSIBILITY</h5>}
    </div >
  )
}
export default Modern