import FinancesComponent from './finances'
import VisibilitySensor from 'react-visibility-sensor'
import { useState } from 'react';

const Finances = () => {
  const [isVisible, setVisible] = useState(false)
  return (
    <VisibilitySensor
      partialVisibility
      onChange={(visible) => setVisible(visible)}
      active={!isVisible} >
      <FinancesComponent
        isVisible={isVisible} />
    </VisibilitySensor>
  )
}
export default Finances
