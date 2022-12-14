import React from 'react'
import './TopHeader.css'
import { IonButton, IonButtons, IonContent, IonIcon, IonItem, IonLabel, IonList, IonPopover, IonSearchbar, IonToolbar } from '@ionic/react'
import iconName from '../icons/cart.svg';
import down from '../icons/chevron-down-outline.svg';
import { menus } from '../Layout/dummyData';

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
                    <IonContent class="ion-padding">
                    <IonList>
                        {
                            menus.map(item=>{
                                return (
                                    <IonItem button={true} trigger>
                                        {item.label}
                                    </IonItem>
                                )
                            })
                        }
                    </IonList>

                    </IonContent>
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
