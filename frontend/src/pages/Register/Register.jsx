import React, {useState} from 'react'
import styles from './Register.module.css'
import stepPhoneEmail from '../Steps/StepPhoneEmail/StepPhoneEmail'
import stepOtp from '../Steps/StepOtp/StepOtp'
import stepName from '../Steps/StepName/StepName'
import stepAvatar from '../Steps/StepAvatar/StepAvatar'
import stepUsername from '../Steps/StepUsername/StepUsername'

const steps = {
    1: stepPhoneEmail,
    2: stepOtp,
    3: stepName,
    4: stepAvatar,
    5: stepUsername
}


const Register = () => {
    const [step, setStep] = useState(1);
    const Step = steps[step]

    function onNext() {
        setStep(step + 1);
    }

    return (
        <div>
            <Step onNext={onNext}/>
        </div>
    )
}

export default Register
