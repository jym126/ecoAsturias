import React, { useState, useRef } from "react";
import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonFooter,
  IonItem,
  IonInput,
  IonButton,
  IonList,
} from "@ionic/react";
import "./Tab1.css";

const Chat: React.FC = () => {
  const [messages, setMessages] = useState<{text: string, sender: string}[]>([]);
  const inputRef = useRef<HTMLIonInputElement>(null);

  const sendMessage = () => {
    // Obtenemos el valor directamente del elemento input
    const inputValue = inputRef.current?.value;
    const messageText = String(inputValue || '').trim();
    
    if (!messageText) return;

    // Añadimos el mensaje inmediatamente
    setMessages(prev => [...prev, {text: messageText, sender: "yo"}]);
    
    // Limpiamos el input directamente
    if (inputRef.current) {
      inputRef.current.value = '';
    }
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar color={"success"}>
          <IonTitle>Chat</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonList className="chat-container">
          {messages.map((msg, index) => (
            <div key={index} className={`chat-bubble ${msg.sender}`}>
              {msg.text}
            </div>
          ))}
        </IonList>
      </IonContent>
      <IonFooter>
        <IonToolbar>
          <IonItem className="input-container">
            <IonInput
              ref={inputRef}
              placeholder="Escribe un mensaje..."
              onKeyPress={(e) => e.key === 'Enter' && sendMessage()}
            />
            <IonButton 
              onClick={sendMessage} 
              color={"success"}
            >
              Enviar
            </IonButton>
          </IonItem>
        </IonToolbar>
      </IonFooter>
    </IonPage>
  );
};

export default Chat;