import React, { PropsWithChildren, ReactNode } from 'react'
import { IonCol, IonContent, IonGrid, IonRow } from '@ionic/react';
import Header from '../Header';
import LeftSide from '../LeftSide';
import './index.css'
interface Props {
    showProps?: boolean;
    children: ReactNode
  }
  
const Layout: React.FC<PropsWithChildren<Props>>= (props) => {
    return (
        <>
            <Header />
            <IonContent>
                <IonGrid>
                    <IonRow>
                        <IonCol sizeMd='2.5' sizeSm='12'>
                           {props.showProps && <LeftSide />} 
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
