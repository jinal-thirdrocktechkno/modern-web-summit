import CuratorsComponent from './curators'
import TrackVisibility from 'react-on-screen';

const Curators = () => {
  return (
    <TrackVisibility>
      {({ isVisible }) => (
        <CuratorsComponent isVisible={isVisible} />
      )}
    </TrackVisibility>
  )
}
export default Curators