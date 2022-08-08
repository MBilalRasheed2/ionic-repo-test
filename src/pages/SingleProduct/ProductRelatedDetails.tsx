import React from 'react'
import { IonButton, IonCard, IonCol, IonIcon, IonItem, IonRow, IonText, IonTitle } from '@ionic/react'
import IconWithLabel from '../../components/ComHelper/IconWithLabel'
import bookmark from '../../components/icons/bookmark-outline.svg'
import star from '../../components/icons/star.svg'

import './SingleProduct.css';
interface Props {
    productData:any
}
const ProductRelatedDetails: React.FC<React.PropsWithChildren<Props>>= ({productData}) => {
    const discount = ((parseInt(productData.price)/100)*parseFloat(productData.discountPercentage)).toPrecision(4)
    return (
        <IonRow>
            <IonCol size='12'>
                <IonCard class='ion-text-start'>
                    <IonTitle>{productData.title}</IonTitle>
                    <IonTitle>{productData.description}</IonTitle>

                    <IonRow class='ion-padding'>
                        <IonCol>
                            <IonText class='text-styling strong-text-class '>₹{productData.price}</IonText>
                            <IonText class='text-styling danger-custom-text2'><del>₹{discount}</del></IonText>
                            <IonText class='strong-text-class danger-custom-text2'> {productData.discountPercentage}%</IonText>
                        </IonCol>
                    </IonRow>
                    <IonRow>
                        <IonCol class='ion-padding'>
                            <IonText class='danger-custom-text'>
                                {productData.rating}
                                <IonIcon icon={star} style={{ width: '14px', height: '14px' }} />
                            </IonText>
                            <IonText class='ion-padding text-style1'>989 Ratings & 81 Reviews</IonText>
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
                                <IonCol>
                                    <IconWithLabel color='red' iconName={bookmark} label=' Bank Offer10% off on ICICI Bank Credit Cards (incl. EMI Txns), up to ₹1,500. On orders of ₹5,000 and aboveT&C' />
                                </IonCol>
                            </IonRow>
                        ))
                    }
                </IonCard>
            </IonCol>
        </IonRow>
    )
}

export default ProductRelatedDetails
