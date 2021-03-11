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
import Pregunta from './Pregunta';
import './ExploreContainer.css';

const PreguntaDrop = (props: any) => {
  const [checked, setChecked] = useState(false);
  const [checked2, setChecked2] = useState(false);
  const [dataDM, setDataDM] = useState<string>();
  const [dataHAS, setDataHAS] = useState<string>();
  const [show, setShow] = useState(false);

  return (
    <IonCard>
      {show && (
        <>
          <IonItemDivider className="color2">
            <IonItem className="color2">
              <IonIcon
                className="color3"
                slot="start"
                size="medium"
                icon={props.icon}
              ></IonIcon>
              <IonLabel>{props.title}</IonLabel>
            </IonItem>
            <IonIcon
              className="color4"
              onClick={(e) => setShow(false)}
              slot="end"
              size="medium"
              icon={caretUpOutline}
            ></IonIcon>
          </IonItemDivider>
          {props.title == 'A Patológicos' && (
            <>
              <Pregunta enfer="Diabetes Mellitus"></Pregunta>
              <Pregunta enfer="Hipertensión"></Pregunta>
              <Pregunta enfer="Fracturas"></Pregunta>
              <Pregunta enfer="Transfusiones"></Pregunta>
              <Pregunta enfer="Cáncer"></Pregunta>
              <Pregunta enfer="Cirugías"></Pregunta>
              <Pregunta enfer="Hospitalizaciones Previas"></Pregunta>
              <Pregunta enfer="Otras"></Pregunta>
            </>
          )}
          {props.title == 'Antecedentes Familiares' && (
            <>
              <Pregunta enfer="Diabetes Mellitus"></Pregunta>
              <Pregunta enfer="Hipertensión"></Pregunta>
              <Pregunta enfer="Cáncer"></Pregunta>
              <Pregunta enfer="Otras"></Pregunta>
            </>
          )}
          {props.title == 'A  No Patológicos' && (
            <>
              <Pregunta enfer="Tabaquísmo"></Pregunta>
              <Pregunta enfer="Consumo de ALcohol"></Pregunta>
              <Pregunta enfer="Actividad Física"></Pregunta>
              <Pregunta enfer="Consumo de Sustancias"></Pregunta>
              <Pregunta enfer="Otras"></Pregunta>
            </>
          )}
        </>
      )}

      {!show && (
        <>
          <IonItemDivider className="color2">
            <IonItem className="color2">
              <IonIcon
                className="color3"
                slot="start"
                size="medium"
                icon={props.icon}
              ></IonIcon>
              <IonLabel>{props.title}</IonLabel>
            </IonItem>
            <IonIcon
              onClick={(e) => setShow(true)}
              className="color4"
              slot="end"
              size="medium"
              icon={caretDownOutline}
            ></IonIcon>
          </IonItemDivider>
        </>
      )}
    </IonCard>
  );
};
export default PreguntaDrop;
