import React, { useContext, useEffect } from 'react';
import { Container, Table,  } from 'semantic-ui-react';
import { fetchStudies } from '../../api/StudyApi';
import { fetchParticipants } from '../../api/ParticipantApi';
import { StudyContext } from '../../Contexts/StudyContext'
import { useHistory } from 'react-router-dom';
import { ParticipantContext } from '../../Contexts/ParticipantContext';

const UserPage = () => {
    const { studies, studyDispatch } = useContext(StudyContext);
    const { participants, participantDispatch } = useContext(ParticipantContext);
    const history = useHistory();

    const goToStudy = (studyTitle) => {
        history.push(`/study/${studyTitle}`);
    }

    const renderRow = (row) => {
        return (<Table.Row onClick={() => goToStudy(row.title)}>
            <Table.Cell>{row.title}</Table.Cell>
            <Table.Cell>{row.startingDate}</Table.Cell>
            <Table.Cell>{row.participants.length}</Table.Cell>
        </Table.Row>)
    }

    useEffect(() => {
        studyDispatch({type: 'FETCH_STUDIES'});
        participantDispatch({type: 'FETCH_PARTICIPANTS'})
        fetchStudies().then(studies => { studyDispatch({type: 'FETCH_STUDIES_SUCCESS', studies})}) 
        fetchParticipants().then(participants => { participantDispatch({type: 'FETCH_PARTICIPANTS_SUCCESS', participants})})
    }, [])

    return(
        studies.isFetching ?
        (<div><p>Loading ...</p></div>) :
        (<Table celled selectable>
            <Table.Header>
                <Table.Row>
                    <Table.HeaderCell>Title</Table.HeaderCell>
                    <Table.HeaderCell>Starting Date</Table.HeaderCell>
                    <Table.HeaderCell>Number of participants</Table.HeaderCell>
                </Table.Row>
            </Table.Header>
            <Table.Body>
                {studies.studies.map(study => {
                    return renderRow(study)
                })}
            </Table.Body>
        </Table>)
    );
}

export default UserPage;