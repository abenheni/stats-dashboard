import React from 'react';
import StudyContextProvider from './Contexts/StudyContext';
import ParticipantContextProvider from './Contexts/ParticipantContext';
import RouterSwitch from './routerSwitch';
import SideBar from './SideBar';
import { Segment } from 'semantic-ui-react';
import { BrowserRouter } from 'react-router-dom';

const MainComponent = () => {
        return(
            <BrowserRouter>
                <StudyContextProvider>
                    <ParticipantContextProvider>
                        <Segment.Group horizontal>
                            <Segment>
                                <SideBar />
                            </Segment>
                            <Segment>
                                <RouterSwitch />
                            </Segment>
                        </Segment.Group>
                    </ParticipantContextProvider>
                </StudyContextProvider>
          </BrowserRouter>
        )
}

export default MainComponent;