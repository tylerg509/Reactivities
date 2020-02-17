import { observer } from 'mobx-react-lite';
import React from 'react';
import { Item, Label } from 'semantic-ui-react';

import ActivityStore from '../../app/stores/activityStore';
import ActivityListItem from '../activity-list-item/ActivityListItem';

const ActivityList: React.FC = () => {
    const activityStore = React.useContext(ActivityStore);
    const { activitiesByDate } = activityStore;
    return (
        <React.Fragment>
            {activitiesByDate.map(([group, activities]) => (
                <React.Fragment key={group}>
                    <Label size='large' color='blue'>
                        {group}
                    </Label>

                    <Item.Group divided>
                        {activities.map(activity => (
                            <ActivityListItem
                                key={activity.id}
                                activity={activity}
                            />
                        ))}
                    </Item.Group>
                </React.Fragment>
            ))}
        </React.Fragment>
    );
};

export default observer(ActivityList);
