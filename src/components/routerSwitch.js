import React, { useContext } from 'react';
import { Route, BrowserRouter, Switch } from 'react-router-dom';
import { Container } from 'semantic-ui-react';

import ParticipantPage from './Pages/Participant/ParticipantPage';
import AddParticipant from './Pages/Participant/AddParticipant';
import StudyPage from './Pages/Study/StudyPage';
import AddStudy from './Pages/Study/AddStudy';
import UserPage from './Pages/User/UserPage';
import Main from './Main';
import Login from './Pages/Login'


const RouterSwitch = () => {
    return(
        <Container>
        <Switch>
            <Route exact path='/stats-dashboard' render={() => <UserPage />} />
            <Route path='/stats-dashboard/study/:studyid' render={(matchProps) => <StudyPage {...matchProps}/>} />
            <Route exact path='/stats-dashboard/participant' render={() => <ParticipantPage />} />
            <Route path='/stats-dashboard/participant/add/:studyid' render={(matchProps) => <AddParticipant {...matchProps} />} />
            <Route path='/stats-dashboard/login' render={() => <Login />} />
        </Switch>
        </Container>
    );
}

export default RouterSwitch;