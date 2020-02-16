import React from 'react';
import { Button, Card, Image } from 'semantic-ui-react';

import ActivityStore from '../../app/stores/activityStore'
import { observer } from 'mobx-react-lite';

const ActivityDetails: React.FC = () => {
    const activityStore = React.useContext(ActivityStore)
    const {selectedActivity: activity, openEditForm, cancelSelectedActivity} = activityStore; //assign name of activty to selectedActivity

    return (
        <Card>
            <Image
                src={`/assets/category/${activity!.category}.jpg`}
                wrapped
                ui={false}
            />
            <Card.Content>
                <Card.Header>{activity!.title}</Card.Header>
                <Card.Meta>
                    <span>{activity!.date}</span>
                </Card.Meta>
                <Card.Description>{activity!.description}</Card.Description>
            </Card.Content>
            <Card.Content extra>
                <Button.Group widths={2}>
                    <Button
                        basic
                        color='blue'
                        content='Edit'
                        onClick={() => openEditForm(activity!.id)}
                    />
                    <Button
                        basic
                        color='grey'
                        content='Cancel'
                        onClick={cancelSelectedActivity}
                    />
                </Button.Group>
            </Card.Content>
        </Card>
    );
};

export default observer(ActivityDetails)