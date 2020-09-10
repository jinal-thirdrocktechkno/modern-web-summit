import SpeakerComponent from './speaker'
import TrackVisibility from 'react-on-screen';
import VisibilitySensor from 'react-visibility-sensor'
import { useState } from 'react';


const Speaker = () => {
  const [isVisible, setVisible] = useState(false)
  return (
    <VisibilitySensor
      partialVisibility
      onChange={(visible) => setVisible(visible)}
      active={!isVisible} >
      <SpeakerComponent
        isVisible={isVisible} />
    </VisibilitySensor>
  )
}
export default Speaker
