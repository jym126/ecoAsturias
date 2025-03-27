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
import React, { useState } from 'react';
import './Tab3.css';

const Login: React.FC = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [present] = useIonToast();
  const router = useIonRouter();

  // Base de datos de usuarios (en producción usar backend)
  const usersDB = [
    { username: 'carla', password: 'carla1234' },
    { username: 'claudia', password: 'claudia1234' },
    { username: 'evelyn', password: 'evelyn1234' },
    { username: 'carlos', password: 'carlos1234' },
    { username: 'diego', password: 'diego1234' }
  ];

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // Limpiar espacios en blanco
    const cleanUsername = username.trim();
    const cleanPassword = password.trim();

    // Verificación síncrona (para demo)
    const user = usersDB.find(u => 
      u.username === cleanUsername && u.password === cleanPassword
    );

    setTimeout(() => {
      if (user) {
        // Guardar autenticación
        localStorage.setItem('authToken', 'authenticated');
        localStorage.setItem('username', cleanUsername);
        
        // Redirección con toast de confirmación
        present({
          message: `Bienvenido ${cleanUsername}!`,
          duration: 2000,
          color: 'success'
        });
        
        router.push('/tab2', 'root');
      } else {
        present({
          message: 'Usuario o contraseña incorrectos',
          duration: 3000,
          color: 'danger',
          buttons: [{ text: 'OK' }]
        });
      }
      setIsLoading(false);
    }, 1000); // Simular tiempo de espera
  };

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
                value={username}
                onIonChange={e => setUsername(e.detail.value!)}
                required
                autocomplete="username"
                disabled={isLoading}
              />
            </IonItem>

            <IonItem>
              <IonLabel position="floating">Contraseña</IonLabel>
              <IonInput
                type="password"
                value={password}
                onIonChange={e => setPassword(e.detail.value!)}
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

        <IonLoading 
          isOpen={isLoading}
          message="Verificando credenciales..."
          spinner="crescent"
        />
      </IonContent>
    </IonPage>
  );
};

export default Login;