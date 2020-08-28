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
      setAnotherKey(new Date().getTime())
    }, 800)
    setTimeout(() => {
      setVisible(true)
    }, 1000)
    setTimeout(() => {
      setWebVisible(true)
    })
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
        {/* <ScrollAnimation delay={200}
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
        </ScrollAnimation> */}
      </div>
      <ScrollAnimation delay={700}
        animateIn="fadeIn">
        <h5 className="text-lightGreen text-4xl font-menlo">WEB COMMUNITIES TOGETHER</h5>
        {/* <p className="text-white text-xl font-menlo">l</p> */}
      </ScrollAnimation>
      {webVisible}

      <div className="flex justify-center mb-2 mt-10">
        {visible && <p className="text-white text-xl font-menlo mr-3 visible">modern_web_summit$  </p>}
        <Typist key={anotherKey} cursor={typistConfig}>
          <Typist.Delay ms={700} />
          <p className="text-white text-xl font-menlo">git push</p>
        </Typist>
        {/* <ScrollAnimation delay={200}
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
        </ScrollAnimation> */}
      </div>
      <ScrollAnimation delay={1000}
        animateIn="fadeIn">
        <h5 className="text-lightGreen text-4xl font-menlo">THE BOUNDS OF POSSIBILITY</h5>
        {/* <p className="text-white text-xl font-menlo">l</p> */}
      </ScrollAnimation>
    </div>
  )
}

export default Modern
