import { IonCard, IonCol, IonContent, IonGrid, IonPage, IonRow, IonText, IonTitle } from '@ionic/react'
import React, { useState } from 'react'
import IconWithLabel from '../components/ComHelper/IconWithLabel'
import Layout from '../components/Layout'
import { productlist } from '../components/Layout/dummyData'
import bookmark from '../components/icons/bookmark-outline.svg'

const SingleProduct: React.FC = () => {
    const [defaultImage, setDefaultImage] = useState('')
    const availableOffers = ['Available offers']
    return (
        <IonPage>
            <Layout>
                <IonGrid>
                    <IonRow>
                        <IonCol size='1'>
                            <IonRow>
                                {productlist[0].images.map(img => (
                                    <IonCol size='12' onClick={() => setDefaultImage(img)}>
                                        <img src={img} style={{ minWidth: '70px', height: '70px', maxWidth: '70px', width: '70px' }} />
                                    </IonCol>
                                ))}
                            </IonRow>
                        </IonCol>
                        <IonCol size='3' >
                            <img src={defaultImage !== "" ? defaultImage : productlist[0].images[0]} style={{ minWidth: '350px', height: '350px', maxWidth: '350px', width: '350px' }} />
                        </IonCol>
                        <IonCol size='8'>
                            <IonCard class='ion-text-start'>
                                <IonTitle>{productlist[0].title}</IonTitle>
                                <IonRow>
                                    <IonCol>
                                        <IonText class='ion-padding'>{productlist[0].rating}</IonText>
                                        <IonText class='ion-padding'>989 Ratings</IonText>
                                        <IonText class='ion-padding'>& 81 Reviews</IonText>
                                    </IonCol>
                                </IonRow>
                                <IonRow>
                                    <IonCol>
                                        <IonText class='ion-padding'>{productlist[0].price}</IonText>
                                        <IonText class='ion-padding'>₹28,990</IonText>
                                        <IonText class='ion-padding'>13% off</IonText>
                                    </IonCol>
                                </IonRow>
                                <IonRow>
                                    <IonCol>
                                        <IonText class='ion-padding'>Available offers</IonText>
                                    </IonCol>
                                </IonRow>
                                {
                                    [1, 2, 3, 4].map(offer => (
                                        <IonRow key={offer}>
                                            <IonCol>
                                                <IconWithLabel iconName={bookmark} label=' Bank Offer10% off on ICICI Bank Credit Cards (incl. EMI Txns), up to ₹1,500. On orders of ₹5,000 and aboveT&C' />
                                            </IonCol>
                                        </IonRow>
                                    ))
                                }


                                <IonTitle>{productlist[0].description}</IonTitle>

                            </IonCard>
                        </IonCol>
                    </IonRow>
                </IonGrid>
            </Layout>
        </IonPage>
    )
}

export default SingleProduct
