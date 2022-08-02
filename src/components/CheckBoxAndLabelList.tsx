import { IonAccordion, IonAccordionGroup, IonCheckbox, IonItem, IonLabel, IonList } from '@ionic/react'
import React from 'react'
interface CheckBoxAndLabelListProps {
    List: { id: number, name: string, value: boolean }[],
    title: string
}
const CheckBoxAndLabelList: React.FC<CheckBoxAndLabelListProps> = (props) => {
    return (
        <IonAccordion >
            <IonItem slot="header" color="light">
                <IonLabel>{props.title}</IonLabel>
            </IonItem>
            <IonList slot="content">
                {
                    props.List.map(item => {
                        return (<IonItem lines='none' key={item.id}>
                            <IonCheckbox slot="start" value={item.value} checked={item.value} />
                            <IonLabel> {item.name}</IonLabel>
                        </IonItem>)
                    })
                }
            </IonList>
        </IonAccordion>
    )
}

export default CheckBoxAndLabelList
