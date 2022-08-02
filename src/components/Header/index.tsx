import { IonHeader } from '@ionic/react'
import React from 'react'
import SecondHeader from './SecondHeader'
import TopHeader from './TopHeader'

const Header : React.FC = () =>{
    return (
        <IonHeader>
            <TopHeader />
            <SecondHeader />
        </IonHeader>
    )
}

export default Header
