import React from 'react'
import { IonButton, IonCard, IonCol, IonIcon, IonItem, IonRow, IonText, IonTitle } from '@ionic/react'
import IconWithLabel from '../../components/ComHelper/IconWithLabel'
import { productlist } from '../../components/Layout/dummyData'
import bookmark from '../../components/icons/bookmark-outline.svg'
import star from '../../components/icons/star-outline.svg'

import './SingleProduct.css';
const ProductRelatedDetails = () => {
    return (
        <IonRow>
            <IonCol size='12'>
                <IonCard class='ion-text-start'>
                    <IonTitle>{productlist[0].title}</IonTitle>
                    <IonRow class='ion-padding  '>
                        <IonCol>
                            <IonText class='text-styling strong-text-class '>₹{productlist[0].price}</IonText>
                            <IonText class='text-styling'><del>₹28,990</del></IonText>
                            <IonText class='strong-text-class danger-custom-text'>13% off</IonText>
                        </IonCol>
                    </IonRow>
                    <IonRow>
                        <IonCol class='ion-padding'>

                            <IonText class='text-styling danger-custom-text'>
                                <IonIcon icon={star} />
                                {productlist[0].rating}
                            </IonText>
                            <IonText class='ion-padding text-styling'>989 Ratings & 81 Reviews</IonText>
                        </IonCol>
                    </IonRow>

                    <IonRow class='ion-padding  '>
                        <IonCol>
                            <IonText class='  '>Available offers</IonText>
                        </IonCol>
                    </IonRow>
                    {
                        [1, 2, 3, 4].map(offer => (
                            <IonRow key={offer}>
                                <IonCol class='  '>
                                    <IconWithLabel color='red' iconName={bookmark} label=' Bank Offer10% off on ICICI Bank Credit Cards (incl. EMI Txns), up to ₹1,500. On orders of ₹5,000 and aboveT&C' />
                                </IonCol>
                            </IonRow>
                        ))
                    }
                    <IonTitle>{productlist[0].description}</IonTitle>
                </IonCard>
            </IonCol>
        </IonRow>
    )
}

export default ProductRelatedDetails
