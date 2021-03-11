import React, { useState } from 'react';
import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonInput,
  IonItem,
  IonLabel,
  IonCol,
  IonRow,
  IonTextarea,
  IonCard,
  IonSelectOption,
  IonSelect,
  IonDatetime,
} from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Tab1.css';

const Tab1: React.FC = () => {
  const [nombre, setNombre] = useState<string>();
  const [apellidoP, setApellidoP] = useState<string>();
  const [apellidoM, setApellidoM] = useState<string>();
  const [sexo, setSexo] = useState<string>();
  const [civil, setCivil] = useState<string>();
  const [email, setEmail] = useState<string>();
  const [ocupacion, setOcupacion] = useState<string>();
  const [religion, setReligion] = useState<string>();
  const [nacimiento, setNacimiento] = useState<string>(
    '2012-12-15T13:47:20.789'
  );
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Datos generales del paciente</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonCard>
          <IonItem>
            <IonLabel position="stacked">Nombre</IonLabel>
            <IonInput
              value={nombre}
              placeholder="Nombre(s)"
              onIonChange={(e) => setNombre(e.detail.value!)}
            ></IonInput>
          </IonItem>
          <IonItem>
            <IonLabel position="stacked">Apellido Paterno</IonLabel>
            <IonInput
              value={apellidoP}
              placeholder="Apellido Paterno"
              onIonChange={(e) => setApellidoP(e.detail.value!)}
            ></IonInput>
          </IonItem>
          <IonItem>
            <IonLabel position="stacked">Apellido Materno</IonLabel>
            <IonInput
              value={apellidoM}
              placeholder="Apellido Materno"
              onIonChange={(e) => setApellidoM(e.detail.value!)}
            ></IonInput>
          </IonItem>
          <IonItem>
            <IonLabel>Sexo</IonLabel>
            <IonSelect
              value={sexo}
              placeholder="Select One"
              onIonChange={(e) => setSexo(e.detail.value)}
            >
              <IonSelectOption value="femenino">Femenino</IonSelectOption>
              <IonSelectOption value="masculino">Masculino</IonSelectOption>
            </IonSelect>
          </IonItem>
          <IonItem>
            <IonLabel>Fecha de Nacimiento</IonLabel>
            <IonDatetime
              displayFormat="MM DD YY"
              placeholder="Select Date"
              value={nacimiento}
              onIonChange={(e) => setNacimiento(e.detail.value!)}
            ></IonDatetime>
          </IonItem>
          <IonItem>
            <IonLabel position="stacked">Ocupación</IonLabel>
            <IonInput
              value={ocupacion}
              placeholder="Ocupación"
              onIonChange={(e) => setOcupacion(e.detail.value!)}
            ></IonInput>
          </IonItem>
          <IonItem>
            <IonLabel position="stacked">Religión</IonLabel>
            <IonInput
              value={religion}
              placeholder="Religión"
              onIonChange={(e) => setReligion(e.detail.value!)}
            ></IonInput>
          </IonItem>
          <IonItem>
            <IonLabel>Estado Civil</IonLabel>
            <IonSelect
              value={civil}
              placeholder="Select One"
              onIonChange={(e) => setCivil(e.detail.value)}
            >
              <IonSelectOption value="soltero">Soltero</IonSelectOption>
              <IonSelectOption value="Casado">Casado</IonSelectOption>
            </IonSelect>
          </IonItem>
          <IonItem>
            <IonLabel position="stacked">Email</IonLabel>
            <IonInput
              value={email}
              placeholder="Email"
              onIonChange={(e) => setEmail(e.detail.value!)}
            ></IonInput>
          </IonItem>
        </IonCard>
      </IonContent>
    </IonPage>
  );
};

export default Tab1;
