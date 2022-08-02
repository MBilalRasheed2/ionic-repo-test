import { IonAccordion, IonAccordionGroup, IonCard, IonCardContent, IonCardHeader, IonCardTitle, IonCheckbox, IonCol, IonContent, IonIcon, IonItem, IonLabel, IonList, IonRange, IonRow, IonSelect, IonSelectOption, IonText } from '@ionic/react'
import React, { useEffect } from 'react'
import CheckBoxAndLabelList from './CheckBoxAndLabelList';
import backOutline from './chevron-back-outline.svg';
import './LeftSide.css'

const LeftSide: React.FC = () => {
    const categoriesList = [
        "Footwear", "Kids' & Infant Footwear", "Boys Footwear", "Sandals"
    ]
    const List = [
        { id: 1, name: '10% and below', value: false },
        { id: 2, name: '10% or more', value: false },
        { id: 3, name: '20% or more', value: false },
        { id: 4, name: '30% or more', value: false },
        { id: 5, name: '40% or more', value: false },
        { id: 6, name: '50% or more', value: false },
        { id: 7, name: '60% or more', value: false },
        { id: 8, name: '70% or more', value: false },
        { id: 9, name: '80% or more', value: false },
    ]
    const Genders = [
        { id: 1, name: 'Male', value: false },
        { id: 2, name: 'Female', value: false },
       
    ]
    return (
        <IonContent>
            <IonCard>
                <IonCardHeader>
                    Categories
                </IonCardHeader>
                <IonCardContent>
                    <IonList lines='none'>
                        {
                            categoriesList.map(item => {
                                return (<IonItem>
                                    <IonIcon src={backOutline} size='small'></IonIcon>
                                    <p className='padding-item'>{item}</p>
                                </IonItem>)
                            })
                        }
                    </IonList>
                    <IonAccordionGroup>
                    <CheckBoxAndLabelList List={Genders} title={'Gender'} />

                    </IonAccordionGroup>

                </IonCardContent>
                <IonCardHeader>
                    Price
                </IonCardHeader>
                <IonCardContent>
                    <IonRange></IonRange>
                    <IonRow class='ion-justify-content-center ion-align-items-center'>
                        <IonCol size='4'>
                            <IonSelect interface="popover" placeholder='min'>
                                <IonSelectOption value="apples">Apples</IonSelectOption>
                                <IonSelectOption value="oranges">Oranges</IonSelectOption>
                                <IonSelectOption value="bananas">Bananas</IonSelectOption>
                            </IonSelect>
                        </IonCol>
                        <IonCol size='4' class='ion-text-center'>
                            <IonLabel >to</IonLabel>
                        </IonCol>
                        <IonCol size='4'>
                            <IonSelect interface="popover" placeholder='max'>
                                <IonSelectOption value="apples">Apples</IonSelectOption>
                                <IonSelectOption value="oranges">Oranges</IonSelectOption>
                                <IonSelectOption value="bananas">Bananas</IonSelectOption>
                            </IonSelect>
                        </IonCol>
                    </IonRow>
                    <IonAccordionGroup>
                        <CheckBoxAndLabelList List={List} title={'Discount'} />
                        <CheckBoxAndLabelList List={List} title={'Size'} />
                        <CheckBoxAndLabelList List={List} title={'Brand'} />
                        <CheckBoxAndLabelList List={List} title={'Customer Rating'} />
                    </IonAccordionGroup>





                </IonCardContent>
            </IonCard>
        </IonContent>
    )
}

export default LeftSide
