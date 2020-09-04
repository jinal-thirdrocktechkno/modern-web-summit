import SponsorComponent from './sponsor'
import TrackVisibility from 'react-on-screen';

const Sponsor = () => {
  return (
    <TrackVisibility>
      {({ isVisible }) => (
        <SponsorComponent isVisible={isVisible} />
      )}
    </TrackVisibility>
  )
}
export default Sponsor