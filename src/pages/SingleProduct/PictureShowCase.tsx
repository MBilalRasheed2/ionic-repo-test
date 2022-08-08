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
                <IonList>
                    {
                        images.map((item: any) => {
                            return (<IonItem
                                lines='none'
                                onClick={() => setDefaultImage(item)}
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
                        src={defaultImage !== "" ? defaultImage : images[0]}
                        className='picture-settings'
                    />
                </div>
            </IonCol>
        </IonRow>
    )
}

export default PictureShowCase;
