import CuratorsComponent from './curators'
import VisibilitySensor from 'react-visibility-sensor'
import { useState } from 'react';

const Curators = () => {
  const [isVisible, setVisible] = useState(false)
  return (
    <VisibilitySensor
      partialVisibility
      onChange={(visible) => setVisible(visible)}
      active={!isVisible} >
      <CuratorsComponent
        isVisible={isVisible} />
    </VisibilitySensor>
  )
}
export default Curators
