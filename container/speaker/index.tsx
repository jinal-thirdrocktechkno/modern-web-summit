import SpeakerComponent from './speaker'
import TrackVisibility from 'react-on-screen';

const Speaker = () => {
  return (
    <TrackVisibility partialVisibility once throttleInterval={0}>
      {({ isVisible }) => (
        <SpeakerComponent isVisible={isVisible} />
      )}
    </TrackVisibility>
  )
}
export default Speaker