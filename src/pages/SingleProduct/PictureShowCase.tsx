import React, { useState } from 'react'
import { IonCheckbox, IonCol, IonItem, IonLabel, IonList, IonRow } from '@ionic/react'
import { productlist } from '../../components/Layout/dummyData'
import './SingleProduct.css';
const PictureShowCase = () => {
    const [defaultImage, setDefaultImage] = useState('')
    return (
        <IonRow>
            <IonCol size='3'>
                <IonList>
                    {
                        productlist[0].images.map(item => {
                            return (
                                <IonItem
                                    lines='none'
                                    key={item}>
                                    <img
                                        src={item}
                                        className='small-thump' />
                                </IonItem>)
                        })
                    }
                </IonList>
            </IonCol>
            <IonCol size='9'>
                <div className='img-wrapper'>
                    <img
                        src={defaultImage !== "" ? defaultImage : productlist[0].images[0]}
                        className='picture-settings'
                    />
                </div>
            </IonCol>
        </IonRow>
    )
}

export default PictureShowCase
