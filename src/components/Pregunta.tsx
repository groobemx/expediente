import React, { useState } from 'react';
import {
  IonIcon,
  IonButton,
  IonButtons,
  IonMenuButton,
  IonAlert,
  IonText,
  IonToolbar,
  IonTitle,
  IonItem,
  IonItemDivider,
  IonLabel,
  IonInput,
  IonToggle,
  IonCard,
  IonPage,
} from '@ionic/react';
import {
  caretDownOutline,
  caretUpOutline,
  peopleOutline,
} from 'ionicons/icons';
import './ExploreContainer.css';

const Pregunta = (props: any) => {
  const [checked, setChecked] = useState(false);

  const [dataDM, setDataDM] = useState<string>();

  return (
    <IonCard className="color1">
      <IonItem>
        <IonToggle
          checked={checked}
          onIonChange={(e) => setChecked(e.detail.checked)}
        />
        <IonLabel>{props.enfer}</IonLabel>
        {checked && (
          <IonInput
            className="in"
            value={dataDM}
            placeholder="Datos relevantes"
            onIonChange={(e) => setDataDM(e.detail.value!)}
          ></IonInput>
        )}
      </IonItem>
    </IonCard>
  );
};
export default Pregunta;
