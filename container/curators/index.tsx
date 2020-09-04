import CuratorsComponent from './curators'
import TrackVisibility from 'react-on-screen';

const Curators = () => {
  return (
    <TrackVisibility partialVisibility once throttleInterval={0}>
      {({ isVisible }) => (
        <CuratorsComponent isVisible={isVisible} />
      )}
    </TrackVisibility>
  )
}
export default Curators