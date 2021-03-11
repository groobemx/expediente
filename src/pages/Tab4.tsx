import React, { useState } from 'react';
import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonItem,
  IonLabel,
  IonActionSheet,
  IonInput,
  IonDatetime,
  IonCard,
  IonItemDivider,
  IonRow,
  IonCol,
  IonTextarea,
  IonButton,
  IonIcon,
} from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Tab1.css';
import { addCircleOutline, removeCircleOutline } from 'ionicons/icons';

const Tab4: React.FC = () => {
  const [padecimiento, setPadecimiento] = useState<string>();
  const [fisica, setFisica] = useState<string>();
  const [nota, setNota] = useState<string>();
  const [inicio, setInicio] = useState<string>('2012-12-15T13:47:20.789');
  const [altura, setAltura] = useState<number>();
  const [peso, setPeso] = useState<number>();
  const [temperatura, setTemperatura] = useState<number>();
  const [presion, setPresion] = useState<string>();
  const [saturacion, setSaturacion] = useState<number>();
  const [fc, setFc] = useState<number>();
  const [fr, setFr] = useState<number>();
  const [fields, setFields] = useState([{ value: null }]);

  function handleChange(i: any, event: any) {
    const values = [...fields];
    values[i].value = event.target.value;
    setFields(values);
  }

  function handleAdd() {
    const values = [...fields];
    values.push({ value: null });
    setFields(values);
  }

  function handleRemove(i: any) {
    const values = [...fields];
    values.splice(i, 1);
    setFields(values);
  }
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Consulta</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonCard>
          <IonItemDivider>Padecimiento Actual</IonItemDivider>
          <IonItem>
            <IonTextarea
              placeholder="Escribe aquí..."
              value={padecimiento}
              onIonChange={(e) => setPadecimiento(e.detail.value!)}
            ></IonTextarea>
          </IonItem>
        </IonCard>
        <IonCard>
          <IonItem>
            <IonLabel>Inicio del Padecimiento</IonLabel>
            <IonDatetime
              displayFormat="MM DD YY"
              placeholder="Select Date"
              value={inicio}
              onIonChange={(e) => setInicio(e.detail.value!)}
            ></IonDatetime>
          </IonItem>
        </IonCard>
        <IonCard>
          <IonRow>
            <IonCol>
              <IonLabel>Altura</IonLabel>
            </IonCol>
            <IonCol>
              <IonItem>
                <IonInput
                  className="in"
                  inputmode="decimal"
                  type="number"
                  value={altura}
                  placeholder="Altura en metros"
                  step="0.1"
                  onIonChange={(e) => setAltura(parseInt(e.detail.value!, 0))}
                ></IonInput>
              </IonItem>
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol>
              <IonLabel>Peso</IonLabel>
            </IonCol>
            <IonCol>
              <IonItem>
                <IonInput
                  className="in"
                  type="number"
                  value={peso}
                  placeholder="Peso en Kg"
                  onIonChange={(e) => setPeso(parseInt(e.detail.value!, 10))}
                ></IonInput>
              </IonItem>
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol>
              <IonLabel>F.C</IonLabel>
            </IonCol>
            <IonCol>
              <IonItem>
                <IonInput
                  className="in"
                  type="number"
                  value={fc}
                  placeholder="Frecuencia Cardiaca"
                  onIonChange={(e) => setFc(parseInt(e.detail.value!, 10))}
                ></IonInput>
              </IonItem>
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol>
              <IonLabel>F.R</IonLabel>
            </IonCol>
            <IonCol>
              <IonItem>
                <IonInput
                  className="in"
                  type="number"
                  value={fr}
                  placeholder="Frecuencia Respiratoria"
                  onIonChange={(e) => setFr(parseInt(e.detail.value!, 10))}
                ></IonInput>
              </IonItem>
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol>
              <IonLabel>O2(%)</IonLabel>
            </IonCol>
            <IonCol>
              <IonItem>
                <IonInput
                  className="in"
                  inputmode="decimal"
                  type="number"
                  value={saturacion}
                  placeholder="Saturación"
                  onIonChange={(e) =>
                    setSaturacion(parseInt(e.detail.value!, 10))
                  }
                ></IonInput>
              </IonItem>
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol>
              <IonLabel>T.A</IonLabel>
            </IonCol>
            <IonCol>
              <IonItem>
                <IonInput
                  className="in"
                  value={presion}
                  placeholder="Tensión Arterial"
                  onIonChange={(e) => setPresion(e.detail.value!)}
                ></IonInput>
              </IonItem>
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol>
              <IonLabel>Temp(°C)</IonLabel>
            </IonCol>
            <IonCol>
              <IonItem>
                <IonInput
                  className="in"
                  inputmode="decimal"
                  type="number"
                  value={temperatura}
                  placeholder="Temperatura en °C "
                  onIonChange={(e) =>
                    setTemperatura(parseInt(e.detail.value!, 10))
                  }
                ></IonInput>
              </IonItem>
            </IonCol>
          </IonRow>
        </IonCard>
        <IonCard>
          <IonItemDivider>Exploración Física</IonItemDivider>
          <IonItem>
            <IonTextarea
              placeholder="Escribe aquí..."
              value={fisica}
              onIonChange={(e) => setFisica(e.detail.value!)}
            ></IonTextarea>
          </IonItem>
          <IonItemDivider>Nota Médica</IonItemDivider>
          <IonItem>
            <IonTextarea
              placeholder="Escribe aquí..."
              value={nota}
              onIonChange={(e) => setNota(e.detail.value!)}
            ></IonTextarea>
          </IonItem>
        </IonCard>

        <IonCard>
          <div>
            <IonItemDivider>Diagnósticos</IonItemDivider>

            {fields.map((field, idx) => {
              return (
                <div key={`${field}-${idx}`}>
                  <IonItem>
                    <input
                      size={80}
                      type="text"
                      placeholder="Escribe aquí..."
                      value={field.value || ''}
                      onChange={(e) => handleChange(idx, e)}
                    />
                    <IonIcon
                      onClick={() => handleAdd()}
                      slot="end"
                      size="medium"
                      icon={addCircleOutline}
                    ></IonIcon>

                    <IonIcon
                      onClick={() => handleRemove(idx)}
                      slot="end"
                      size="medium"
                      icon={removeCircleOutline}
                    ></IonIcon>
                  </IonItem>
                </div>
              );
            })}
          </div>
        </IonCard>
        {/* <IonItem className="app">
          <IonLabel>Diagnósticos</IonLabel>

          <IonItem>
            {fields.map((field, idx) => {
              return (
                <IonItem key={`${field}-${idx}`}>
                  <IonInput
                    type="text"
                    placeholder="Enter text"
                    value={field.value || ''}
                    onChange={(e) => handleChange(idx, e)}
                  />
                  <IonIcon
                    onClick={() => handleAdd()}
                    slot="end"
                    size="medium"
                    icon={addCircleOutline}
                  ></IonIcon>
                  <IonIcon
                    onClick={() => handleRemove(idx)}
                    slot="end"
                    size="medium"
                    icon={removeCircleOutline}
                  ></IonIcon>
                </IonItem>
              );
            })}
          </IonItem>
        </IonItem> */}
      </IonContent>
    </IonPage>
  );
};

export default Tab4;
