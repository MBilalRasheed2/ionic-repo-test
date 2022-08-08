import { IonButton, IonButtons, IonContent, IonIcon, IonItem, IonLabel, IonPopover, IonSearchbar, IonToolbar } from '@ionic/react'

import React from 'react'
import down from '../icons//chevron-down-outline.svg';
import './SecondHeader.css'
const SecondHeader : React.FC = () => {
    const headerComponent = [
        {
            id: 'electronics', name: 'Electronics',
        },
        {
            id: ' TVs&Appliances', name: 'TVs & Appliances',
        },
        {
            id: 'Men', name: 'Men',
        },
        {
            id: 'Women', name: 'Women',
        },
        {
            id: 'baby&kids', name: 'Baby & Kids'
        },
        {
            id: 'home&furniture', name: 'Home & Furniture'
        },
        {
            id:'sports,books&more',name:'Sports, Books & More'
        },
        {
            id: 'flights', name: 'Flights',
        },
        {
            id: 'offerzone', name: 'Offer Zone',
        }
    ]
    const childCategories = [
        { id: 1, name: 'Mobiles' },
        { id: 2, name: 'Laptops' },
        { id: 3, name: 'Cameras' },
        { id: 4, name: 'Watches' },
    ]
    return (
        <IonToolbar>
            <IonButtons class={'header-items'}>
                {
                    headerComponent.map(item => {
                        return (<>
                            <div key={item.id} color={'primary'} className='align-item-center' id={`${item.id}`}>
                                <IonLabel class='padding-item'>{item.name}</IonLabel>
                                <IonIcon src={down} ></IonIcon>
                            </div>
                            <IonPopover trigger={`${item.id}`}  arrow={true} side='bottom'  alignment='start' trigger-action="click">
                                {childCategories.map(child => {
                                    return (
                                        <IonContent  key={child.id} offset-x='10px' class="ion-padding offClass">
                                            <IonLabel >{child.name}</IonLabel>
                                            <IonIcon src={down} ></IonIcon>
                                        </IonContent>)
                                })}
                            </IonPopover>
                        </>)
                    })
                }
               
            </IonButtons>
        </IonToolbar>
    )
}

export default SecondHeader
