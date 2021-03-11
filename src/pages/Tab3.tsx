import React, { useState } from 'react';

import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonSelect,
  IonLabel,
  IonItem,
  IonSelectOption,
  IonToggle,
  IonInput,
  IonCard,
  IonPopover,
  IonText,
  IonItemDivider,
  IonIcon,
} from '@ionic/react';
import {
  school,
  medkit,
  navigateCircle,
  body,
  medkitOutline,
  ribbonOutline,
  time,
  timeOutline,
  eye,
  filterOutline,
  backspaceOutline,
  star,
  caretDownOutline,
  caretUpOutline,
  peopleOutline,
  bagAddOutline,
  bicycleOutline,
} from 'ionicons/icons';
import PreguntaDrop from '../components/PreguntaDrop';
import './Tab2.css';
import { State } from 'ionicons/dist/types/stencil-public-runtime';

const Tab3: React.FC = () => {
  // const [afam, setAfam] = useState<string>();
  // const [checked, setChecked] = useState(false);
  // const [checked2, setChecked2] = useState(false);
  // const [dataDM, setDataDM] = useState<string>();
  // const [dataHAS, setDataHAS] = useState<string>();
  // const [show, setShow] = useState(false);
  // const [show2, setShow2] = useState(false);
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Archivos</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="color1">
        <IonCard>
          <IonItemDivider> Consultas Previas</IonItemDivider>
        </IonCard>
        <IonCard>
          <IonItemDivider> Estudios de Imágen</IonItemDivider>
        </IonCard>
        <IonCard>
          <IonItemDivider> Laboratorios</IonItemDivider>
        </IonCard>
        <IonCard>
          <IonItemDivider> Otros Estudios</IonItemDivider>
        </IonCard>
      </IonContent>
    </IonPage>
  );
};

export default Tab3;
