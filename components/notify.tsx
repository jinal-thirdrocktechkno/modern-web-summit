import React, { useState } from 'react'

const NotifyForm = (props: NotifyFormProps) => {
    const { buttonClass } = props
    const [email, setEmail] = useState('')
    const [showForm, setShowForm] = useState(false)
    return (<div>
        {!showForm &&
            <button className={`custom-btn focus:outline-none ${buttonClass}`} type="button" onClick={() => setShowForm(!showForm)}>Notify me when tickets go on sale</button>
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

export type NotifyFormProps = {
    buttonClass: string
}
