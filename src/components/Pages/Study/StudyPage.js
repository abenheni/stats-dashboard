import React, { useContext, useEffect } from 'react';
import { StudyContext } from '../../Contexts/StudyContext';
import { ParticipantContext } from '../../Contexts/ParticipantContext';
import { LineChart, YAxis, XAxis, CartesianGrid, Line } from 'recharts';
import { Table, Segment, Button } from 'semantic-ui-react';
import { getDeviceNumberChart } from '../../utils/StudyChartUtils';
import { useHistory } from 'react-router-dom';
import { fetchStudies } from '../../api/StudyApi';
import { fetchParticipants } from '../../api/ParticipantApi';

const renderRow = (row) => {
    return(
        <Table.Row>
            <Table.Cell>{row.id}</Table.Cell>
            <Table.Cell>{row.name}</Table.Cell>
            <Table.Cell>{row.dateJoined}</Table.Cell>
        </Table.Row>
    )
}

const StudyPage = (props) => {
    const studyId = props.match.params.studyid;
    
    const { studies, studyDispatch } = useContext(StudyContext);
    const { participants, participantDispatch } = useContext(ParticipantContext);
    const currentStudy = studies.studies.filter(study => study.title === studyId)[0];
    const currentParticipants = participants.participants.filter(participant => currentStudy.participants.includes(participant.id));

    const history = useHistory();

    useEffect(() => {
        if (!currentStudy) {
            history.push('/')
        } else {
            studyDispatch({type: 'FETCH_STUDIES'});
            participantDispatch({type: 'FETCH_PARTICIPANTS'})
            fetchStudies().then(studies => { studyDispatch({type: 'FETCH_STUDIES_SUCCESS', studies})}) 
            fetchParticipants().then(participants => { participantDispatch({type: 'FETCH_PARTICIPANTS_SUCCESS', participants})}) 
        }
    }, [])

    return(
        currentStudy ?
        (<div>
            <Segment>
                <Button onClick={() => history.push(`/participant/add/${studyId}`)}>ADD PARTICIPANT</Button>
            </Segment>
            <Segment>
                <LineChart width={500} height={300} data={getDeviceNumberChart(currentStudy.startingDate, currentParticipants)}>
                    <XAxis dataKey="date"/>
                    <YAxis/>
                    <CartesianGrid stroke="#eee" strokeDasharray="5 5"/>
                    <Line type="monotone" dataKey="number" stroke="#8884d8" />
                </LineChart>
            </Segment>
            <Segment>
                <Table celled>
                    <Table.Header>
                        <Table.HeaderCell>PARTICIPANT ID</Table.HeaderCell>
                        <Table.HeaderCell>PARTICIPANT NAME</Table.HeaderCell>
                        <Table.HeaderCell>PARTICIPANT JOIN DATE</Table.HeaderCell>
                    </Table.Header>
                    <Table.Body>
                        {currentParticipants.map(participant => renderRow(participant))}
                    </Table.Body>
                </Table>
            </Segment>
        </div>) : (
            <p>Loading</p>
        )
    );
}

export default StudyPage;