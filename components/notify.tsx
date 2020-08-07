import React, { useState } from 'react'


const NotifyForm = () => {
    const [email, setEmail] = useState('')
    const [showForm, setShowForm] = useState(false)
    return (<div>
        {!showForm &&
            <button onClick={() => setShowForm(!showForm)}>Notify me when tickets go on sale</button>
            || <div>
                <input value={email} onChange={(e) => setEmail(e.target.value)} />
                <button onClick={() => {
                    setShowForm(!showForm)
                    setEmail('')
                    }}>Submit</button>
            </div>}
    </div>)
}

export default NotifyForm