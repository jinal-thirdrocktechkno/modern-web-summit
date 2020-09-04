import SpeakerComponent from './speaker'
import TrackVisibility from 'react-on-screen';

const Speaker = () => {
  return (
    <TrackVisibility>
      {({ isVisible }) => (
        <SpeakerComponent isVisible={isVisible} />
      )}
    </TrackVisibility>
  )
}
export default Speaker