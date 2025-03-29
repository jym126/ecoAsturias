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
} from "@ionic/react";
import Recompensas from "./Recompensas"; // Asegúrate de que este componente esté bien importado
import "./Tab2.css";

const Categoría: React.FC = () => {
  const [showModal, setShowModal] = useState(false);
  const [modalContent, setModalContent] = useState<JSX.Element | string>("");

  const openModal = (content: JSX.Element | string) => {
    setModalContent(content);
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
                  onClick={() => openModal(<Recompensas />)} // Abre el modal con el componente de Recompensas
                />
              </div>
            </IonCol>
            <IonCol size="6">
              <div className="image-container">
                <img
                  className="buttons"
                  src="/cuestionario.jpg"
                  alt="Cuestionario"
                  onClick={() => openModal("https://www.nationalgeographic.com.es/naturaleza/cuanto-sabes-sobre-reciclaje_12467") } // Abre el modal con un iframe de la página web
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
                  onClick={() => openModal(<iframe
                    width="100%"
                    height="100%"
                    src="https://www.youtube.com/embed/YiHTNfKJwAw?autoplay=1&si=M3fapjFVxq7hSKYg" 
                    title="YouTube video player"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen"
                  ></iframe>
                  
                  )} // Abre el modal con un iframe de la página web
                />
              </div>
            </IonCol>
            <IonCol size="6">
              <div className="image-container">
                <img
                  className="buttons"
                  src="/location.jpg"
                  alt="Ubicación"
                  onClick={() => openModal("/puntoslimpios.jpg")}
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
                  onClick={() => openModal("https://federacionmunicipiosmurcia.es/los-retos-del-reciclaje-en-espana/")}
                />
              </div>
            </IonCol>
            <IonCol size="6">
              <div className="image-container">
                <img
                  className="buttons"
                  src="/noticias.jpg"
                  alt="Noticias"
                  onClick={() => openModal("https://cogersa.es/noticias/") }
                />
              </div>
            </IonCol>
          </IonRow>
        </IonGrid>

        {/* Modal dinámico */}
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
            {/* Aquí verificamos el contenido que se pasa y renderizamos dinámicamente */}
            {typeof modalContent === "string" ? (
              <iframe
                src={modalContent}
                title="Web"
                style={{ width: "100%", height: "100vh", border: "none" }}
              />
            ) : (
              modalContent // Si es JSX.Element, simplemente lo mostramos
            )}
          </IonContent>
        </IonModal>
      </IonContent>
    </IonPage>
  );
};

export default Categoría;
