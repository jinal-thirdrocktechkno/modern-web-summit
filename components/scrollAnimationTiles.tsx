import TrackVisibility from 'react-on-screen';

const ScrollAnimationTiles = (props) => {
  return (
    <TrackVisibility partialVisibility once throttleInterval={0}>
      {({ isVisible }) => (
        <div className={`${props.parentClass} ${isVisible ? 'animated fadeInUp opacity-1' : 'opacity-0'}`} >
          {props.children}
        </div>
      )}
    </TrackVisibility>
  )
}
export default ScrollAnimationTiles
