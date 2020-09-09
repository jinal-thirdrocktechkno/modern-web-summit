import AboutComponent from './about'
import TrackVisibility from 'react-on-screen';

const About = () => {
  return (
    <TrackVisibility partialVisibility once throttleInterval={0}>
      {({ isVisible }) => (
        <AboutComponent isVisible={isVisible} />
      )}
    </TrackVisibility>
  )
}
export default About
