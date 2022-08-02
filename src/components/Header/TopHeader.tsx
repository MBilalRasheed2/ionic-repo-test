import React from 'react'
import './TopHeader.css'
import { IonButton, IonButtons, IonContent, IonIcon, IonItem, IonLabel, IonPopover, IonSearchbar, IonToolbar } from '@ionic/react'
import iconName from './cart.svg';
import down from './chevron-down-outline.svg';

const TopHeader : React.FC = () => {
    return (
        <IonToolbar color='primary'>
            <IonButtons class={'header-items'}>
                <IonButton>FlipKart</IonButton>
                <IonSearchbar placeholder="Search Favorites" class='search-bar-width' />
                <IonButton class='button-color'>Login</IonButton>
                <IonButton>Become a seller</IonButton>
                <div color={'primary'} className='align-item-center' id="click-trigger">
                    <IonLabel class='padding-item'>More</IonLabel>
                    <IonIcon src={down} ></IonIcon>
                </div>
                <IonPopover trigger="click-trigger" trigger-action="click">
                    <IonContent class="ion-padding">Hello World!</IonContent>
                </IonPopover>
                <div color={'primary'} className='align-item-center' >
                    <IonIcon src={iconName} ></IonIcon>
                    <IonLabel class='padding-item'>Cart</IonLabel>
                </div>
            </IonButtons>
        </IonToolbar>
    )
}

export default TopHeader
