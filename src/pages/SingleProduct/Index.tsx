import { IonButton, IonCol, IonGrid, IonPage, IonRow } from '@ionic/react'
import React from 'react'
import Layout from '../../components/Layout'
import PictureShowCase from './PictureShowCase'
import ProductRelatedDetails from './ProductRelatedDetails'

const SingleProduct: React.FC = () => {
    return (
        <IonPage>
            <Layout>
                <IonGrid>
                    <IonRow>
                        <IonCol sizeMd='4' sizeSm='12' >
                            <PictureShowCase />
                            <IonRow class='ion-align-items-center ion-justify-content-between '>
                                <IonCol size='6'>
                                    <IonButton size="large" strong={true} expand="full"  color="success">Primary</IonButton>
                                </IonCol>
                                <IonCol size='6'>
                                    <IonButton size="large" strong={true} expand="full" color="danger">Secondary</IonButton>
                                </IonCol>
                            </IonRow>
                        </IonCol>
                        <IonCol sizeMd='8' sizeSm='12'>
                            <ProductRelatedDetails />
                        </IonCol>
                    </IonRow>

                </IonGrid>
            </Layout>
        </IonPage>
    )
}

export default SingleProduct
