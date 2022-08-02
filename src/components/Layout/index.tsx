import React from 'react'
import { IonCol, IonContent, IonGrid, IonRow } from '@ionic/react';
import Header from '../Header';
import LeftSide from '../LeftSide';
import './index.css'
const Layout: React.FC = (props) => {

    return (
        <>
            <Header />
            <IonContent>
                <IonGrid>
                    <IonRow>
                        <IonCol sizeMd='2.5' sizeSm='12'>
                            <LeftSide />
                        </IonCol>
                        <IonCol sizeMd='9.5' sizeSm='12'>
                            {props.children}
                        </IonCol>
                    </IonRow>
                </IonGrid>
            </IonContent>
        </>
    )
}

export default Layout
