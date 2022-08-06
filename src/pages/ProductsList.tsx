import { IonCard, IonCol, IonGrid, IonPage, IonRow, IonTitle } from '@ionic/react'
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
                return (
                  <IonCol sizeMd='3' sizeSm='12' key={item.id}>
                    <Link to={`/product-details/${item.id}`} >
                      <IonCard class='ion-text-center ion-align-items-center ion-jutify-content-center'>
                        <img src={item.images[0]} style={{ minWidth: '250px', height: '250px', maxWidth: '250px', width: '250px' }} />
                        <IonTitle class='text-setting'>{item.title}</IonTitle>
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
