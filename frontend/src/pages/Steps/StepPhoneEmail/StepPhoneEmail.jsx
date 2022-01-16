import React from 'react'

const stepPhoneEmail = ({ onNext }) => {
    return (
        <>  
            <div>phone or email</div>
            <button onClick={onNext}>next</button>
        </>
    )
}

export default stepPhoneEmail
