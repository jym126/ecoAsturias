import React from "react";
import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonGrid,
  IonRow,
  IonCol,
  IonButton,
  IonIcon,
} from "@ionic/react";
import "./Tab2.css";

const Categoría: React.FC = () => {
  return (
    <IonPage className="page">
      <IonHeader className="header ion-no-border">
        <IonToolbar className="toolbar">
          <IonTitle className="title">EcoAsturias</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="categoria-content">
        <h2 className="categorias">Categorias</h2>
        <IonGrid className="grid">
          <IonRow className="iconRow">
            <IonCol size="6">
            <div className="image-container">
                <a
                  href="https://cogersa.es/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img className="buttons" src="/recompensa.jpg" alt="Retos" />
                </a>
              </div>
            </IonCol>
            <IonCol size="6">
            <div className="image-container">
                <a
                  href="https://cogersa.es/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img className="buttons" src="/cuestionario.jpg" alt="Retos" />
                </a>
              </div>
            </IonCol>
          </IonRow>
          <IonRow className="iconRow">
            <IonCol size="6">
            <div className="image-container">
                <a
                  href="https://cogersa.es/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img className="buttons" src="/reciclar.jpg" alt="Retos" />
                </a>
              </div>
            </IonCol>
            <IonCol size="6">
            <div className="image-container">
                <a
                  href="https://cogersa.es/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img className="buttons" src="/location.jpg" alt="Retos" />
                </a>
              </div>
            </IonCol>
          </IonRow>
          <IonRow className="iconRow">
            <IonCol size="6">
              <div className="image-container">
                <a
                  href="https://cogersa.es/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img className="buttons" src="/retos.jpg" alt="Retos" />
                </a>
              </div>
            </IonCol>
            <IonCol size="6">
            <div className="image-container">
                <a
                  href="https://cogersa.es/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img className="buttons" src="/noticias.jpg" alt="Retos" />
                </a>
              </div>
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default Categoría;
