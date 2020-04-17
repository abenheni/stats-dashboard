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
            <Route exact path='/' render={() => <UserPage />} />
            <Route path='/study/:studyid' render={(matchProps) => <StudyPage {...matchProps}/>} />
            <Route exact path='/participant' render={() => <ParticipantPage />} />
            <Route path='/participant/add/:studyid' render={(matchProps) => <AddParticipant {...matchProps} />} />
            <Route path='/login' render={() => <Login />} />
        </Switch>
        </Container>
    );
}

export default RouterSwitch;