import SponsorComponent from './sponsor'
import TrackVisibility from 'react-on-screen';

const Sponsor = () => {
  return (
    <TrackVisibility partialVisibility once throttleInterval={0}>
      {({ isVisible }) => (
        <SponsorComponent isVisible={isVisible} />
      )}
    </TrackVisibility>
  )
}
export default Sponsor
