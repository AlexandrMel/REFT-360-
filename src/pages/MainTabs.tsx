import React  from 'react';
import { IonTabs, IonRouterOutlet, IonTabBar, IonTabButton, IonIcon, IonLabel, IonBadge, IonFabButton } from '@ionic/react';
import { Route, Redirect } from 'react-router';
import { calendar, location, informationCircle, people, homeOutline, peopleOutline, checkboxOutline, checkmarkDoneOutline, notificationsOutline, personCircleOutline } from 'ionicons/icons';
import SchedulePage from './SchedulePage';
import SpeakerList from './SpeakerList';
import SpeakerDetail from './SpeakerDetail';
import SessionDetail from './SessionDetail';
import About from './About';
import RequestFeedback from './RequestFeedback';
import './MainTabs.scss'
import RequestAdvice from './RequestAdvice';
interface MainTabsProps { }

const MainTabs: React.FC<MainTabsProps> = () => {

  return (
    <IonTabs>
      <IonRouterOutlet>
        <Redirect exact path="/tabs" to="/tabs/schedule" />
        {/*
          Using the render method prop cuts down the number of renders your components will have due to route changes.
          Use the component prop when your component depends on the RouterComponentProps passed in automatically.
        */}
        <Route path="/tabs/schedule" render={() => <SchedulePage />} exact={true} />
        <Route path="/tabs/speakers" render={() => <SpeakerList />} exact={true} />
        <Route path="/tabs/speakers/:id" component={SpeakerDetail} exact={true} />
        <Route path="/tabs/schedule/:id" component={SessionDetail} />
        <Route path="/tabs/speakers/sessions/:id" component={SessionDetail} />
        <Route path="/tabs/home" render={() => <About />} exact={true} />
        <Route path="/tabs/requestFeedback" render={() => <RequestAdvice/>} exact={true} />
        {/* <Route path="/tabs/requestFeed" render={() => <RequestFeedback />} exact={true} /> */}
      </IonRouterOutlet>
      <IonTabBar slot="bottom">
        <IonTabButton className="recievedFeedbackTab" tab="schedule" href="/tabs/schedule">
        <IonBadge color="danger">3</IonBadge>
          <IonIcon icon={peopleOutline} />
          <IonLabel className="tabLabel">Recieved</IonLabel>
        </IonTabButton>
        <IonTabButton className="givenFeedbackTab" tab="speakers" href="/tabs/speakers">
          <IonIcon icon={checkmarkDoneOutline} />
          <IonLabel className="tabLabel">Given</IonLabel>
        </IonTabButton>
        <IonTabButton className="homeFeedbackTab" tab="about" href="/tabs/home">
          <IonFabButton className="homeFabTab"><IonIcon icon={homeOutline} /></IonFabButton>
        </IonTabButton>
        <IonTabButton className="notificationsFeedbackTab" tab="notifications" href="/tabs/notifications">
          <IonIcon icon={notificationsOutline} />
          <IonLabel className="tabLabel">Notifications</IonLabel>
        </IonTabButton>
        <IonTabButton className="accountFeedbackTab" tab="account" href="/tabs/account">
          <IonIcon icon={personCircleOutline} />
          <IonLabel className="tabLabel">Account</IonLabel>
        </IonTabButton>
      </IonTabBar>
    </IonTabs>
  );
};

export default MainTabs;