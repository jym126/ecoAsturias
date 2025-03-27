import React, { useState } from "react";
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
  const [messages, setMessages] = useState<{ id: number; text: string; sender: string }[]>([]);
  const [newMessage, setNewMessage] = useState("");

  const sendMessage = () => {
    if (newMessage.trim() === "") return;
    setMessages([...messages, { id: messages.length + 1, text: newMessage, sender: "yo" }]);
    setNewMessage("");
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
          {messages.map((msg) => (
            <div key={msg.id} className={`chat-bubble ${msg.sender}`}>
              {msg.text}
            </div>
          ))}
        </IonList>
      </IonContent>
      <IonFooter>
        <IonToolbar>
          <IonItem className="input-container">
            <IonInput
              placeholder="Escribe un mensaje..."
              value={newMessage}
              onIonChange={(e) => setNewMessage(e.detail.value!)}
            />
            <IonButton onClick={sendMessage} color={"success"}>Enviar</IonButton>
          </IonItem>
        </IonToolbar>
      </IonFooter>
    </IonPage>
  );
};

export default Chat;
