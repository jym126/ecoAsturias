import { 
  IonButton, 
  IonContent, 
  IonHeader, 
  IonInput, 
  IonItem, 
  IonLabel, 
  IonPage, 
  IonTitle, 
  IonToolbar, 
  useIonRouter,
  IonLoading,
  useIonToast
} from '@ionic/react';
import React, { useRef, useState, useEffect } from 'react';
import './Tab3.css';

// Base de datos de usuarios
const usersDB = [
  { username: 'carla', password: 'carla1234' },
  { username: 'claudia', password: 'claudia1234' },
  { username: 'evelyn', password: 'evelyn1234' },
  { username: 'carlos', password: 'carlos1234' },
  { username: 'diego', password: 'diego1234' }
];

const Login: React.FC = () => {
  // Cambia el tipo a HTMLIonInputElement
  const usernameRef = useRef<HTMLIonInputElement>(null);
  const passwordRef = useRef<HTMLIonInputElement>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [present] = useIonToast();
  const router = useIonRouter();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
  
    // Accede al valor usando .value en el elemento Ionic
    const cleanUsername = usernameRef.current?.value?.toString().trim() || "";
    const cleanPassword = passwordRef.current?.value?.toString().trim() || "";
  
    setTimeout(() => {
      const user = usersDB.find(u => 
        u.username === cleanUsername && u.password === cleanPassword
      );
  
      if (user) {
        localStorage.setItem('authToken', 'authenticated');
        localStorage.setItem('username', cleanUsername);
  
        present({
          message: `Bienvenido ${cleanUsername}!`,
          duration: 2000,
          color: 'success'
        });
  
        window.location.href = '/tab2';
      } else {
        present({
          message: 'Usuario o contraseña incorrectos',
          duration: 3000,
          color: 'danger',
          buttons: [{ text: 'OK' }]
        });
        setIsLoading(false);
      }
    }, 1000);
  };

  useEffect(() => {
    const storedUsername = localStorage.getItem("username");
    if (storedUsername) {
      present({
        message: `Autenticando a ${storedUsername}...`,
        duration: 1500,
        color: "primary",
      });
      router.push("/tab2", "root");
    }
  }, []);

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar color="success">
          <IonTitle>EcoAsturias</IonTitle>
        </IonToolbar>
      </IonHeader>

      <div className='logo-container'>
        <img src="escudo.png" alt="EcoAsturias" className="logo" />
        <h1>EcoAsturias</h1>
      </div>

      <IonContent className="ion-padding">
        <div className="login-container">
          <form onSubmit={handleLogin}>
            <IonItem>
              <IonLabel position="floating">Usuario</IonLabel>
              <IonInput 
                type="text" 
                ref={usernameRef} 
                required 
                autocomplete="username" 
                disabled={isLoading} 
              />
            </IonItem>

            <IonItem>
              <IonLabel position="floating">Contraseña</IonLabel>
              <IonInput 
                type="password" 
                ref={passwordRef} 
                required 
                autocomplete="current-password" 
                disabled={isLoading} 
              />
            </IonItem>

            <IonButton 
              type="submit" 
              expand="block" 
              className="ion-margin-top" 
              disabled={isLoading} 
              color={'success'}
            >
              {isLoading ? 'Verificando...' : 'Iniciar Sesión'}
            </IonButton>
          </form>
        </div>

        <IonLoading isOpen={isLoading} message="Verificando credenciales..." spinner="crescent" />
      </IonContent>
    </IonPage>
  );
};

export default Login;