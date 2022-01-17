import React, { useState } from 'react'
import Card from '../../../../components/shared/Card/Card'
import Button from '../../../../components/shared/Button/Button'
import TextInput from '../../../../components/shared/TextInput/TextInput'
import style from '../StepPhoneEmail.module.css'

const Email = ({onNext}) => {
    const [email, setEmail] = useState('')

    return (
        <Card title="Enter your Email address" icon="email-emoji">
            <TextInput value={email} onchange={(e) => setEmail(e.traget.value)}/>
            <div>
                <div className={style.actionButtonWrap}>
                    <Button onClick={onNext} text="Next"/>   
                </div>
                <p className={style.bottomParagraph}>
                    By entering your email, you are agreeing to out Terms of Service and Privacy Policy. Thanks !
                </p>
            </div>

        </Card>
    )
}

export default Email
