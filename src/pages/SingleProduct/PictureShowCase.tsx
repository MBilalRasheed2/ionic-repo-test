import React, { useState } from 'react'
import { IonCheckbox, IonCol, IonItem, IonLabel, IonList, IonRow } from '@ionic/react'

import './SingleProduct.css';

interface Props {
    images: string[];

}
const PictureShowCase: React.FC<React.PropsWithChildren<Props>> = (props) => {
    const [defaultImage, setDefaultImage] = useState('')
    const { images } = props;
    return (
        <IonRow>
            <IonCol size='3'>
                <IonList class='verticalImageStack'>
                    {
                        images.map((item: any) => {
                            return (<IonItem
                                class='thumbnail'
                                onClick={() => setDefaultImage(item)}
                                key={item}>
                                <img src={item} />
                            </IonItem>)
                        })
                    }
                </IonList>
            </IonCol>
            <IonCol size='9'>
                <div className='productDescImgContainer'>
                    <img
                        src={defaultImage !== "" ? defaultImage : images[0]}
                    />
                </div>
            </IonCol>
        </IonRow>
    )
}

export default PictureShowCase;
