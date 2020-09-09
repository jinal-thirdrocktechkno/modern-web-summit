import FinancesComponent from './finances'
import TrackVisibility from 'react-on-screen';

const Finances = () => {
  return (
    <TrackVisibility partialVisibility once throttleInterval={0}>
      {({ isVisible }) => (
        <FinancesComponent isVisible={isVisible} />
      )}
    </TrackVisibility>
  )
}
export default Finances
