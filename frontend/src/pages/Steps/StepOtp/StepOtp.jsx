import React, { useState } from 'react'
import Button from '../../../components/shared/Button/Button'
import Card from '../../../components/shared/Card/Card'
import TextInput from '../../../components/shared/TextInput/TextInput'
import style from './StepOtp.module.css'

const StepOtp = ({onNext}) => {
    const [otp, setOtp] = useState('')
    function next() {

    }
    return (
        <>
        
        <div className={style.cardWrapper}>
            <Card title="Enter the code we just sent you" icon="lock-emoji">
                <TextInput value={otp} onchange={(e) => setOtp(e.traget.value)}/>
                <div>
                    <div className={style.actionButtonWrap}>
                        <Button onClick={next} text="Next"/>   
                    </div>
                    <p className={style.bottomParagraph}>
                        By entering your OTP, you are agreeing to out Terms of Service and Privacy Policy. Thanks !
                    </p>
                </div>
            </Card>
        </div>

        </>
    )
}

export default StepOtp
