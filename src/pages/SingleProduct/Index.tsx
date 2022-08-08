import { IonButton, IonCol, IonGrid, IonIcon, IonPage, IonRow } from '@ionic/react'
import React, { useEffect, useState } from 'react'
import { RouteComponentProps } from 'react-router-dom'
import Layout from '../../components/Layout'
import PictureShowCase from './PictureShowCase'
import ProductRelatedDetails from './ProductRelatedDetails'
import { productlist } from '../../components/Layout/dummyData'
import cart from '../../components/icons/cart.svg';
import flash from '../../components/icons/flash.svg';

interface GroupDetailProps
    extends RouteComponentProps<{
        id: string;
    }> {

}
const SingleProduct: React.FC<GroupDetailProps> = ({ match, }, props) => {
    // let { id } = useParams();

    const [productData, setProductData] = useState<any | null>(null);
    const { id } = match?.params
    console.log("id", match?.params?.id)
    useEffect(() => {
        const getProduct = productlist.find(f => f.id.toString() === id.toString())
        console.log(getProduct, getProduct)
        setProductData(getProduct);
    }, [id])

    if (productData) {
        return (
            <IonPage>
                <Layout>
                    <IonGrid>
                        <IonRow>
                            <IonCol sizeMd='4' sizeSm='12' >
                                <PictureShowCase images={productData.images} />
                                <IonRow class='ion-align-items-center ion-justify-content-between '>
                                    <IonCol size='6'>
                                        <IonButton size="large" strong={true} expand="full" color="success">Add To Cart
                                            <IonIcon slot="end" icon={cart} />
                                        </IonButton>
                                    </IonCol>
                                    <IonCol size='6'>
                                        <IonButton size="large" strong={true} expand="full" color="danger">Buy Now
                                            <IonIcon slot="end" icon={flash} />
                                        </IonButton>
                                    </IonCol>
                                </IonRow>
                            </IonCol>
                            <IonCol sizeMd='8' sizeSm='12'>
                                <ProductRelatedDetails productData={productData} />
                            </IonCol>
                        </IonRow>

                    </IonGrid>
                </Layout>
            </IonPage>
        )
    } else {
        return <div>loading...</div>
    }
}

export default SingleProduct
