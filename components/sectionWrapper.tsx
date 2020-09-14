import React from 'react'
import VisibilitySensor from 'react-visibility-sensor'
import { useState } from 'react';
import { VisibleProps } from '../container/sponsor';

const SectionWrapper: React.FC<SectionWrapperProps> = (props: SectionWrapperProps) => {
  const [isVisible, setVisible] = useState(false)
  const { Component } = props
  return (
    <VisibilitySensor
      partialVisibility
      onChange={(visible) => setVisible(visible)}
      active={!isVisible}>
      <Component isVisible={isVisible} />
    </VisibilitySensor>
  )
}
export default SectionWrapper

type SectionWrapperProps = {
  Component: React.FC<VisibleProps>
}