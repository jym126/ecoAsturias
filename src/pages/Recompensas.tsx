import React, { useState, useEffect } from "react";
import {
  IonPage,
  IonContent,
  IonGrid,
  IonRow,
  IonCol,
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardContent,
  IonButton,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonToast, // Importamos IonToast
} from "@ionic/react";
import './Recompensas.css';

const Recompensas: React.FC = () => {
  // Obtener el nombre de usuario desde localStorage
  const username = localStorage.getItem("username");

  // Recuperar los puntos del usuario, o inicializar a 0 si no existe en el localStorage
  const storedPoints = parseInt(localStorage.getItem(`${username}-points`) || "0");

  const [points, setPoints] = useState(storedPoints);
  const [showToast, setShowToast] = useState(false); // Estado para manejar el Toast

  // Función para añadir puntos a la cuenta
  const addPoints = (pointsToAdd: number) => {
    const newPoints = points + pointsToAdd;
    setPoints(newPoints);
    localStorage.setItem(`${username}-points`, newPoints.toString());
  };

  // Función para canjear recompensas (reiniciar los puntos)
  const canjearRecompensa = () => {
    setPoints(0);
    localStorage.setItem(`${username}-points`, "0");
    setShowToast(true); // Mostrar el Toast cuando se canjean los puntos
  };

  // Efectos de recompensa al llegar a los 50 puntos
  useEffect(() => {
    if (points >= 30) {
      // Puedes añadir una animación o cambio de estilo aquí, por ejemplo:
      document.body.classList.add("reward-unlock");
    }
  }, [points]);

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar color="success">
          <IonTitle>Recompensas</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <h2>¡Bienvenid@ {username}!</h2>
        <h3>Puntos actuales: {points}</h3>

        <IonGrid>
          <IonRow>
            <IonCol size="6">
              <IonCard>
                <IonCardHeader>
                  <IonCardTitle>Reciclaje de Orgánica</IonCardTitle>
                </IonCardHeader>
                <IonCardContent>
                  <IonButton expand="block" onClick={() => addPoints(5)}>
                    Sumar 5 puntos
                  </IonButton>
                </IonCardContent>
              </IonCard>
            </IonCol>

            <IonCol size="6">
              <IonCard>
                <IonCardHeader>
                  <IonCardTitle>Reciclaje de Papel y Cartón</IonCardTitle>
                </IonCardHeader>
                <IonCardContent>
                  <IonButton expand="block" onClick={() => addPoints(3)}>
                    Sumar 3 puntos
                  </IonButton>
                </IonCardContent>
              </IonCard>
            </IonCol>
          </IonRow>

          <IonRow>
            <IonCol size="6">
              <IonCard>
                <IonCardHeader>
                  <IonCardTitle>Reciclaje de Vidrio</IonCardTitle>
                </IonCardHeader>
                <IonCardContent>
                  <IonButton expand="block" onClick={() => addPoints(4)}>
                    Sumar 4 puntos
                  </IonButton>
                </IonCardContent>
              </IonCard>
            </IonCol>

            <IonCol size="6">
              <IonCard>
                <IonCardHeader>
                  <IonCardTitle>Reciclaje de Plásticos</IonCardTitle>
                </IonCardHeader>
                <IonCardContent>
                  <IonButton expand="block" onClick={() => addPoints(2)}>
                    Sumar 2 puntos
                  </IonButton>
                </IonCardContent>
              </IonCard>
            </IonCol>
          </IonRow>

          {/* Recompensas desbloqueadas */}
          {points >= 30 && (
            <IonRow>
              <IonCol size="12">
                <IonCard className="reward-card">
                  <IonCardHeader>
                    <IonCardTitle>¡Felicidades {username} Has desbloqueado una recompensa!</IonCardTitle>
                  </IonCardHeader>
                  <IonCardContent>
                    <h4>Recibe un descuento en productos ecológicos.</h4>
                    <IonButton expand="block" onClick={canjearRecompensa}>
                      Canjear Recompensa
                    </IonButton>
                  </IonCardContent>
                </IonCard>
              </IonCol>
            </IonRow>
          )}
        </IonGrid>

        {/* Toast para notificar que los puntos han sido canjeados */}
        <IonToast
          isOpen={showToast}
          onDidDismiss={() => setShowToast(false)}
          message="¡Recompensa canjeada! Tus puntos han sido reseteados."
          duration={2000}
          color="success"
        />
      </IonContent>
    </IonPage>
  );
};

export default Recompensas;
