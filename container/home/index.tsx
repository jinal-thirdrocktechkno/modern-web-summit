import React, { useState } from 'react'
import Logo from '../../components/logo'
import NotifyForm from '../../components/notify'
import SpeakerComponent from '../speaker/index'
import SponsorComponent from '../sponsor/index'


const Home = () => {
    const [showSpeaker, setShowSpeaker] = useState(false)
    const [showSponsor, setShowSponsor] = useState(false)

    return (<div>
        <Logo />
        <p>{"Connecting the world’s top designers and developers to redefine the bounds of possibility through an exciting exploration of cutting-edge technologies, lessons, & patterns"}</p>
        <NotifyForm />
        <p>{"Terms of Service • Privacy Policy • Code of Conduct"}</p>
        <h5 onClick={() => { setShowSpeaker(!showSpeaker) }}>speaker</h5>
        <h5 onClick={() => { setShowSponsor(!showSponsor) }}>Sponsor</h5>
        {showSpeaker && <SpeakerComponent />}
        {showSponsor && <SponsorComponent />}
    </div>)
}

export default Home