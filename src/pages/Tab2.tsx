import React, { useState } from "react";
import {
  IonPage,
  IonContent,
  IonGrid,
  IonRow,
  IonCol,
  IonModal,
  IonButton,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonIcon,
} from "@ionic/react";
import "./Tab2.css";

const Categoría: React.FC = () => {
  const [showModal, setShowModal] = useState(false);
  const [modalUrl, setModalUrl] = useState("");

  const openModal = (url: string) => {
    setModalUrl(url);
    setShowModal(true);
  };

  return (
    <IonPage className="page">
      <IonContent className="categoria-content">
        <div className="toolbar">
          <h1 className="title">EcoAsturias</h1>
          <img src="line.png" alt="titulo" />
        </div>
        <h2 className="categorias">Categorías</h2>
        <IonGrid className="grid">
          <IonRow className="iconRow">
            <IonCol size="6">
              <div className="image-container">
                <img
                  className="buttons"
                  src="/recompensa.jpg"
                  alt="Recompensa"
                  onClick={() => openModal("https://cogersa.es/")}
                />
              </div>
            </IonCol>
            <IonCol size="6">
              <div className="image-container">
                <img
                  className="buttons"
                  src="/cuestionario.jpg"
                  alt="Cuestionario"
                  onClick={() => openModal("https://cogersa.es/")}
                />
              </div>
            </IonCol>
          </IonRow>
          <IonRow className="iconRow">
            <IonCol size="6">
              <div className="image-container">
                <img
                  className="buttons"
                  src="/reciclar.jpg"
                  alt="Reciclar"
                  onClick={() => openModal("https://cogersa.es/")}
                />
              </div>
            </IonCol>
            <IonCol size="6">
              <div className="image-container">
                <img
                  className="buttons"
                  src="/location.jpg"
                  alt="Ubicación"
                  onClick={() => openModal("https://cogersa.es/")}
                />
              </div>
            </IonCol>
          </IonRow>
          <IonRow className="iconRow">
            <IonCol size="6">
              <div className="image-container">
                <img
                  className="buttons"
                  src="/retos.jpg"
                  alt="Retos"
                  onClick={() => openModal("https://cogersa.es/")}
                />
              </div>
            </IonCol>
            <IonCol size="6">
              <div className="image-container">
                <img
                  className="buttons"
                  src="/noticias.jpg"
                  alt="Noticias"
                  onClick={() => openModal("https://cogersa.es/")}
                />
              </div>
            </IonCol>
          </IonRow>
        </IonGrid>

        {/* 🔹 Modal para abrir enlaces */}
        <IonModal isOpen={showModal} onDidDismiss={() => setShowModal(false)}>
          <IonHeader>
            <IonToolbar>
              <IonTitle>EcoAsturias</IonTitle>
              <IonButton slot="end" onClick={() => setShowModal(false)}>
                Cerrar
              </IonButton>
            </IonToolbar>
          </IonHeader>
          <IonContent>
            <iframe
              src={modalUrl}
              title="Web"
              style={{ width: "100%", height: "100vh", border: "none" }}
            />
          </IonContent>
        </IonModal>
      </IonContent>
    </IonPage>
  );
};

export default Categoría;
