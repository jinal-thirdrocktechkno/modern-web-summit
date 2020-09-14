import React from 'react'
import VisibilitySensor from 'react-visibility-sensor'
import { useState } from 'react';

const AnimationWrapper: React.FC<AnimationWrapperProps> = (props: AnimationWrapperProps) => {
  const [isVisible, setVisible] = useState(false)
  return (
    <VisibilitySensor
      partialVisibility
      onChange={(visible) => setVisible(visible)}
      active={!isVisible} >
      <div
        className={`${props.parentClass} ${isVisible ? 'animated fadeInUp opacity-1' : 'opacity-0'}`} >
        {props.children}
      </div>
    </VisibilitySensor>
  )
}
export default AnimationWrapper

type AnimationWrapperProps = {
  parentClass: string,
  children: React.ReactNode
}