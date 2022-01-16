import React, {useState} from 'react'
import styles from './Login.module.css'
import stepPhoneEmail from '../Steps/StepPhoneEmail/StepPhoneEmail'
import stepOtp from '../Steps/StepOtp/StepOtp'

const steps = {
    1: stepPhoneEmail,
    2: stepOtp,
}

const Login = () => {

    const [step, setStep] = useState(1);
    const Step = steps[step]

    function onNext() {
        setStep(step + 1);
    }

    return (
        <div>
            <Step onNext={onNext} />
        </div>
    )
}

export default Login
