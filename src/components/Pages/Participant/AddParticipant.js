import React, { useContext, useState } from 'react';
import { ParticipantContext } from '../../Contexts/ParticipantContext';
import {v1 as uuidv1} from 'uuid';
import { addParticipant } from '../../api/ParticipantApi';
import { Container, Segment, Form, Button, Label, Input } from 'semantic-ui-react';
import { useHistory } from 'react-router-dom';

const defaults = {
    coughs: [],
    dateJoined: '2020-04-10',
    id: '',
    name: 'John Doe',
    survey: ''
}

const AddParticipant = (props) => {
    const studyId = props.match.params.studyid;
    const { participantDispatch } = useContext(ParticipantContext);
    const [values, setValues] = useState(defaults);
    const history = useHistory();

    const handleSubmit = (e) => {
        const valuesWithId = {...values};
        valuesWithId['id'] = uuidv1();
        valuesWithId['study'] = studyId;
        e.preventDefault();
        participantDispatch({type: 'ADD_PARTICIPANT', participant: {
            valuesWithId
        }})
        addParticipant(valuesWithId);
        setValues(defaults);
        history.push(`/study/${studyId}`);
    }

    const handleChange = (field, value) => {
        const updatedValues = {...values};
        updatedValues[field] = value;
        setValues(updatedValues);
    }

    return(
        <Container>
            <Segment>
                <p>ADDING PARTICIPANT TO STUDY: {studyId}</p>
            </Segment>
            <Form onSubmit={handleSubmit}>
                <Form.Field required>
                    <Label>Name</Label>
                <Input type='text' placeholder='name' value={values.name} 
                    onChange={(e) => handleChange('name', e.target.value)} required />
                </Form.Field>
                <Form.Field required>
                    <Label>Date</Label>
                <Input label='(YYYY-MM-DD)' type='text' placeholder='date' value={values.dateJoined} 
                    onChange={(e) => handleChange('dateJoined', e.target.value)} required />
                </Form.Field>
                <Button type='submit'>Add Participant</Button>
            </Form>
        </Container>
    )
}

export default AddParticipant;