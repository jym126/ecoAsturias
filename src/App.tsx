import { Redirect, Route } from 'react-router-dom';
import {
  IonApp,
  IonIcon,
  IonLabel,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs,
  setupIonicReact
} from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { chatbubbleOutline, homeOutline, personCircleOutline, logInOutline, logOutOutline } from 'ionicons/icons';
import Tab1 from './pages/Tab1';
import Tab2 from './pages/Tab2';
import Tab3 from './pages/Tab3';
import { useEffect, useState } from 'react';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Dark Mode */
import '@ionic/react/css/palettes/dark.system.css';

/* Theme variables */
import './theme/variables.css';

setupIonicReact();

const App: React.FC = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const checkAuth = () => {
      const authStatus = localStorage.getItem('authToken') === 'authenticated';
      setIsAuthenticated(authStatus);
    };
    
    // Verificar al cargar
    checkAuth();
    
    // Escuchar cambios en otras pestañas
    window.addEventListener('storage', checkAuth);
    
    return () => window.removeEventListener('storage', checkAuth);
  }, []);

  const handleAuthAction = () => {
    if (isAuthenticated) {
      // Cerrar sesión
      localStorage.removeItem('authToken');
      localStorage.removeItem('username');
      setIsAuthenticated(false);
    } else {
      // Redirigir a login (Tab3 ya es la página de login en tu configuración)
      window.location.href = '/tab3';
    }
  };

  return (
    <IonApp>
      <IonReactRouter>
        <IonTabs>
          <IonRouterOutlet>
            <Route exact path="/tab1">
              <Tab1 />
            </Route>
            <Route exact path="/tab2">
              {isAuthenticated ? <Tab2 /> : <Redirect to="/tab3" />}
            </Route>
            <Route path="/tab3">
              <Tab3 />
            </Route>
            <Route exact path="/">
              <Redirect to="/tab3" />
            </Route>
          </IonRouterOutlet>
          
          <IonTabBar slot="bottom">
            <IonTabButton tab="tab1" href="/tab1">
              <IonIcon icon={chatbubbleOutline} />
              <IonLabel>Chat</IonLabel>
            </IonTabButton>
            
            <IonTabButton 
              tab="tab2" 
              href={isAuthenticated ? "/tab2" : "tab3"}
              disabled={!isAuthenticated}
              className={!isAuthenticated ? 'disabled-tab' : ''}
            >
              <IonIcon icon={homeOutline} />
              <IonLabel>Inicio</IonLabel>
            </IonTabButton>
            
            <IonTabButton 
              tab="tab3" 
              onClick={handleAuthAction}
              href={isAuthenticated ? "tab2" : "/tab3"}
            >
              <IonIcon icon={isAuthenticated ? logOutOutline : logInOutline} />
              <IonLabel>{isAuthenticated ? 'Cerrar sesión' : 'Iniciar sesión'}</IonLabel>
            </IonTabButton>
          </IonTabBar>
        </IonTabs>
      </IonReactRouter>
    </IonApp>
  );
};

export default App;