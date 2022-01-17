import React, { useState } from 'react'
import Card from '../../../../components/shared/Card/Card'
import Button from '../../../../components/shared/Button/Button'
import TextInput from '../../../../components/shared/TextInput/TextInput'
import style from '../StepPhoneEmail.module.css'

const Phone = ({ onNext }) => {
    const [phoneNumber, setPhoneNumber] = useState('')

    return (
        <Card title="Enter your phone number" icon="phone">
            <TextInput value={phoneNumber} onchange={(e) => setPhoneNumber(e.traget.value)}/>
            <div>
                <div className={style.actionButtonWrap}>
                    <Button text="Next" onClick={onNext} />   
                </div>
                <p className={style.bottomParagraph}>
                    By entering your number, you are agreeing to out Terms of Service and Privacy Policy. Thanks !
                </p>
            </div>

        </Card>
    )
}

export default Phone
