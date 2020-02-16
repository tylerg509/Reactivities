import { observer } from 'mobx-react-lite';
import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Item, Label, Segment } from 'semantic-ui-react';

import { IActivity } from '../../app/interfaces/IActivity';
import ActivityStore from '../../app/stores/activityStore';

const ActivityList: React.FC = () => {
    const activityStore = React.useContext(ActivityStore);
    const {
        activitiesByDate,
        deleteActivity,
        submitting,
        target
    } = activityStore;
    return (
        <Segment clearing>
            <Item.Group divided>
                {activitiesByDate.map(
                    (activity: IActivity): JSX.Element => (
                        <Item key={activity.id}>
                            <Item.Content>
                                <Item.Header as='a'>
                                    {activity.title}
                                </Item.Header>
                                <Item.Meta>{activity.date}</Item.Meta>
                                <Item.Description>
                                    <div>{activity.description}</div>
                                    <div>
                                        {activity.city}, {activity.venue}
                                    </div>
                                </Item.Description>
                                <Item.Extra>
                                    <Button
                                        floated='right'
                                        content='View'
                                        color='blue'
                                        as={Link}
                                        to={`/activities/${activity.id}`}
                                    />
                                    <Button
                                        name={activity.id}
                                        loading={
                                            target === activity.id && submitting
                                        }
                                        floated='right'
                                        content='Delete'
                                        color='red'
                                        onClick={e =>
                                            deleteActivity(e, activity.id)
                                        }
                                    />
                                    <Label basic content='Category' />
                                </Item.Extra>
                            </Item.Content>
                        </Item>
                    )
                )}
            </Item.Group>
        </Segment>
    );
};

export default observer(ActivityList);
