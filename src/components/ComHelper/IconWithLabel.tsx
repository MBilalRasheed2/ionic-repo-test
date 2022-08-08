import { IonIcon, IonLabel } from '@ionic/react'
import React from 'react'
interface Props {
    iconName: string,
    label: string
    color?: string
}
const IconWithLabel: React.FC<React.PropsWithChildren<Props>> = (props) => {
    const { iconName, label, color } = props
    return (
        <div color={'primary'} style={{ width: 'auto', display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'start', padding: '0px 14px' }} >
            <IonIcon src={iconName} color={color}></IonIcon>
            <IonLabel class='ion-padding-right'>{label}</IonLabel>
        </div>
    )
}

export default IconWithLabel
