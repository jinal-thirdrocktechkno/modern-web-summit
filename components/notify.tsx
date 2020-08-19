import React, { useState } from 'react'

const NotifyForm = (props: NotifyFormProps) => {
    const { buttonClass } = props
    const [email, setEmail] = useState('')
    const [showForm, setShowForm] = useState(false)
    return (<div>
        {!showForm &&
            <button className={`custom-btn focus:outline-none ${buttonClass}`} type="button" onClick={() => setShowForm(!showForm)}>Notify me when tickets go on sale</button>
            || <div>
                <input className="py-2 px-6 mr-2 flex-grow border-solid border-2 text-xl border-black focus:outline-none" value={email} onChange={(e) => setEmail(e.target.value)} />
                <button className="bg-black text-white py-2 px-12 uppercase text-xl focus:outline-none" onClick={() => {
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
