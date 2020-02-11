import React from 'react'
import { Segment, Form, Button } from 'semantic-ui-react'

interface iActivityForm{
    setEditMode: (editMode: boolean) => void;
}

export const ActivityForm: React.FC<iActivityForm> = ({setEditMode}) => {
    return (
        <Segment clearing>
            <Form>
                <Form.Input placeholder='Title'/>
                <Form.TextArea rows={2} placeholder='Description'/>
                <Form.Input placeholder='Category'/>
                <Form.Input type='date' placeholder='Date'/>
                <Form.Input placeholder='City'/>
                <Form.Input placeholder='Venue'/>
                <Button floated='right' positive type='submit' content='Submit' />
                <Button floated='right' type='button' content='Cancel' onClick={()=>setEditMode(false)} />
            </Form>
        </Segment>
    )
}
