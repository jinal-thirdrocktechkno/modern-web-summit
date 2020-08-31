import React, { useEffect, useState, useRef } from 'react'
import Typist from 'react-typist';
import { typistConfig, typistConfigDelay } from '../../utility/config';
import ScrollAnimation from 'react-animate-on-scroll';

const Modern = () => {

  const [isScroll, setIsScroll] = useState(true)
  const [key, setKey] = useState(new Date().getTime())
  const [anotherKey, setAnotherKey] = useState(new Date().getTime())
  const [visible, setVisible] = useState(false)
  const [webVisible, setWebVisible] = useState(false)
  const [boundVisible, setBoundVisible] = useState(false)

  const handleScroll = () => {
    console.log(isScroll, "isscroll", key, "key")
    console.log(ref.current.offsetTop, "window", window.scrollY)
    if (isScroll && window.scrollY > ref.current.offsetTop) {
      console.log("hell")
      setIsScroll(false)
      setKey(new Date().getTime())
    }
  }

  const ref = useRef(null)

  // var tester = document.getElementById('modern');


  // const checkVisible = (elm) => {
  //   var rect = elm.getBoundingClientRect();
  //   var viewHeight = Math.max(document.documentElement.clientHeight, window.innerHeight);
  //   return !(rect.bottom < 0 || rect.top - viewHeight >= 0);
  // }

  useEffect(() => {
    window.onscroll = handleScroll
    // window.onscroll = function () {
    //   if (checkVisible(ref)) {
    //     setKey(new Date().getTime())
    //   }
    // };'
  }, [])


  const setOnclick = () => {
    setKey(new Date().getTime())
    setTimeout(() => {
      setWebVisible(true)
    }, 700)
    setTimeout(() => {
      setVisible(true)
    }, 700)
    setTimeout(() => {
      setAnotherKey(new Date().getTime())
    }, 700)
    setTimeout(() => {
      setBoundVisible(true)
    }, 1600)
  }

  return (
    <div className="" id="modern" ref={ref} >
      <button onClick={() => setOnclick()}>Click</button>
      <div className="flex justify-center mb-2">
        <p className="text-white text-xl font-menlo mr-3">modern_web_summit$</p>
        <Typist key={key} cursor={typistConfig}>
          <Typist.Delay ms={200} />
          <p className="text-white text-xl font-menlo">git pull</p>
        </Typist>
      </div>
      {webVisible && <h5 className="text-lightGreen text-4xl font-menlo visible">WEB COMMUNITIES TOGETHER</h5>}

      <div className="flex justify-center mb-2 mt-10">
        {visible && <p className="text-white text-xl font-menlo mr-3 visible">modern_web_summit$  </p>}
        <Typist key={anotherKey} cursor={typistConfig}>
          <Typist.Delay ms={200} />
          <p className="text-white text-xl font-menlo">git push</p>
        </Typist>
      </div>
      {boundVisible && <h5 className="text-lightGreen text-4xl font-menlo visible">THE BOUNDS OF POSSIBILITY</h5>}
    </div >
  )
}

export default Modern
