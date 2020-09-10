import SponsorComponent from './sponsor'
import VisibilitySensor from 'react-visibility-sensor'
import { useState } from 'react';

const Sponsor = () => {
  const [isVisible, setVisible] = useState(false)
  return (
    <VisibilitySensor
      partialVisibility
      onChange={(visible) => setVisible(visible)}
      active={!isVisible} >
      <SponsorComponent
        isVisible={isVisible} />
    </VisibilitySensor>
  )
}
export default Sponsor
