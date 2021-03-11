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

const Tab2: React.FC = () => {
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
          <IonTitle>Historia Clínica</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="color1">
        {/* <IonItem className="color2">
          <IonLabel>Antecedentes familiares</IonLabel>
        </IonItem>
        <IonCard className="color1">
          <IonItem>
            <IonToggle
              checked={checked}
              onIonChange={(e) => setChecked(e.detail.checked)}
            />
            <IonLabel>Diabetes Mellitus</IonLabel>
            {checked && (
              <IonInput
                value={dataDM}
                placeholder="Datos relevantes"
                onIonChange={(e) => setDataDM(e.detail.value!)}
              ></IonInput>
            )}
          </IonItem>
          <IonItem>
            <IonToggle
              checked={checked2}
              onIonChange={(e) => setChecked2(e.detail.checked)}
            />
            <IonLabel>Hipertensión</IonLabel>
            {checked2 && (
              <IonInput
                value={dataHAS}
                placeholder="Datos relevantes"
                onIonChange={(e) => setDataHAS(e.detail.value!)}
              ></IonInput>
            )}
          </IonItem>
        </IonCard>
        <IonItemDivider className="color2">
          Antecedentes Familares
          <IonIcon
            onClick={(e) => setShow2(true)}
            className="color3"
            slot="end"
            size="medium"
            icon={eye}
          ></IonIcon>
          <IonIcon
            onClick={(e) => setShow2(false)}
            className="color3"
            slot="end"
            size="medium"
            icon={eye}
          ></IonIcon>
        </IonItemDivider>

        {show2 && (
          <>
            <IonCard className="color1">
              <IonItem>
                <IonToggle
                  checked={checked}
                  onIonChange={(e) => setChecked(e.detail.checked)}
                />
                <IonLabel>Diabetes Mellitus</IonLabel>
                {checked && (
                  <IonInput
                    value={dataDM}
                    placeholder="Datos relevantes"
                    onIonChange={(e) => setDataDM(e.detail.value!)}
                  ></IonInput>
                )}
              </IonItem>
              <IonItem>
                <IonToggle
                  checked={checked2}
                  onIonChange={(e) => setChecked2(e.detail.checked)}
                />
                <IonLabel>Hipertensión</IonLabel>
                {checked2 && (
                  <IonInput
                    value={dataHAS}
                    placeholder="Datos relevantes"
                    onIonChange={(e) => setDataHAS(e.detail.value!)}
                  ></IonInput>
                )}
              </IonItem>
            </IonCard>
          </>
        )}
        {!show && (
          <>
            <IonItemDivider className="color2">
              <IonItem className="color2">
                <IonLabel>A Personales Patológicos</IonLabel>
              </IonItem>
              <IonIcon
                onClick={(e) => setShow(true)}
                className="color3"
                slot="end"
                size="medium"
                icon={caretDownOutline}
              ></IonIcon>
            </IonItemDivider>
          </>
        )}
        {show && (
          <>
            <IonItemDivider className="color2">
              <IonItem className="color2">
                <IonLabel>A Personales Patológicos</IonLabel>
              </IonItem>
              <IonIcon
                onClick={(e) => setShow(false)}
                slot="end"
                size="medium"
                icon={caretUpOutline}
              ></IonIcon>
            </IonItemDivider>
            <IonCard className="color1">
              <IonItem>
                <IonToggle
                  checked={checked}
                  onIonChange={(e) => setChecked(e.detail.checked)}
                />
                <IonLabel>Diabetes Mellitus</IonLabel>
                {checked && (
                  <IonInput
                    className="in"
                    value={dataDM}
                    placeholder="Datos relevantes"
                    onIonChange={(e) => setDataDM(e.detail.value!)}
                  ></IonInput>
                )}
              </IonItem>
              <IonItem>
                <IonToggle
                  checked={checked2}
                  onIonChange={(e) => setChecked2(e.detail.checked)}
                />
                <IonLabel>Hipertensión</IonLabel>
                {checked2 && (
                  <IonInput
                    value={dataHAS}
                    placeholder="Datos relevantes"
                    onIonChange={(e) => setDataHAS(e.detail.value!)}
                  ></IonInput>
                )}
              </IonItem>
            </IonCard>
          </>
        )} */}
        <PreguntaDrop
          title="Antecedentes Familiares"
          icon={peopleOutline}
        ></PreguntaDrop>
        <PreguntaDrop title="A Patológicos" icon={bagAddOutline}></PreguntaDrop>
        <PreguntaDrop
          title="A  No Patológicos"
          icon={bicycleOutline}
        ></PreguntaDrop>
      </IonContent>
    </IonPage>
  );
};

export default Tab2;
