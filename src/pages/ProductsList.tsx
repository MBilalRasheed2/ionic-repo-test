import { IonCard, IonCol, IonGrid, IonHeader, IonPage, IonRow, IonTitle, IonToolbar } from '@ionic/react'
import React from 'react'
import Layout from '../components/Layout'
import { productlist } from '../components/Layout/dummyData'

const ProductsList: React.FC = () => {
  return (
    <IonPage>
      <Layout>
        <IonGrid>
          <IonRow>
            {
              productlist.map(item => {
                return (
                  <IonCol sizeMd='3' sizeSm='12' >
                    <IonCard class='ion-text-center ion-align-items-center ion-jutify-content-center'>
                      <img src={item.images[0]} style={{ minWidth: '250px', height: '250px', maxWidth: '250px', width: '250px' }} />

                      <IonTitle class='text-setting'>{item.title}</IonTitle>
                    </IonCard>
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
