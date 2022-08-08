import { IonIcon, IonLabel } from '@ionic/react'
import React from 'react';
import './ComHelper.css'
interface Props {
    iconName: string,
    label: string
    color?: string
}
const IconWithLabel: React.FC<React.PropsWithChildren<Props>> = (props) => {
    const { iconName, label, color } = props
    return (
        <div color={'primary'} style={{
            width: 'auto',
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'start',
            padding: '0px 14px'
        }} >
            <IonIcon src={iconName} class='label-icon'></IonIcon>
            <IonLabel class='label-setting'>{label}</IonLabel>
        </div>
    )
}

export default IconWithLabel
