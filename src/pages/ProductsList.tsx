import { IonCard, IonCol, IonGrid, IonPage, IonRow, IonText, IonTitle } from '@ionic/react'
import React from 'react'
import Layout from '../components/Layout'
import { productlist } from '../components/Layout/dummyData'
import { Link } from 'react-router-dom';

const ProductsList: React.FC = () => {
  return (
    <IonPage>
      <Layout showProps>
        <IonGrid>
          <IonRow>
            {
              productlist.map(item => {
                var price: number = item.price;
              const discount = (((price)/100)*(item.discountPercentage)).toPrecision(4)

                return (
                  <IonCol sizeMd='3' sizeSm='12' key={item.id}>
                    <Link to={`/product-details/${item.id}`} style={{textDecoration:'none'}} >
                      <IonCard class=' ion-align-items-center ion-jutify-content-start'>
                        <img src={item.images[0]} style={{ minWidth: '100%', height: '300px', maxWidth: '250px', width: '100%' }} />
                        <IonTitle class='ion-text-start'>{item.brand}</IonTitle>
                        <IonTitle class='ion-text-start'>{item.title}</IonTitle>
                        <IonRow class='ion-padding'>
                        <IonCol>
                            <IonText class='strong-text-class'>₹{item.price}</IonText>
                            <IonText class='danger-custom-text2'><del>₹{discount}</del></IonText>
                            <IonText class='danger-custom-text2'> {item.discountPercentage}%</IonText>
                        </IonCol>
                    </IonRow>

                      </IonCard>
                    </Link>
                  </IonCol>
                )
              })
            }
          </IonRow>
        </IonGrid>
      </Layout>

    </IonPage>
  )
}

export default ProductsList
