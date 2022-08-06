import { IonIcon, IonLabel } from '@ionic/react'
import React from 'react'
interface Props {
    iconName: string,
    label: string
}
const IconWithLabel: React.FC<React.PropsWithChildren<Props>> = (props) => {
    const { iconName, label } = props
    return (
        <div color={'primary'} style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'start', padding: '0px 14px' }} >
            <IonIcon src={iconName}></IonIcon>
            <IonLabel class='ion-padding-right'>{label}</IonLabel>
        </div>
    )
}

export default IconWithLabel
