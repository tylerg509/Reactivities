import React from 'react';
import { Card, Image, Icon, Button } from 'semantic-ui-react';

export const ActivityDetails = () => {
    return (
        <Card>
            <Image
                src='/assets/placeholder.png' 
                wrapped
                ui={false}
            />
            <Card.Content>
                <Card.Header>Matthew</Card.Header>
                <Card.Meta>
                    <span >Date</span>
                </Card.Meta>
                <Card.Description>
                    Description
                </Card.Description>
            </Card.Content>
            <Card.Content extra>
                <Button.Group widths={2}>
                    <Button basic color='blue' content='Edit'/>
                    <Button basic color='grey' content='Cancel'/>
                </Button.Group>
            </Card.Content>
        </Card>
    );
};
