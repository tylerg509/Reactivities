import React from 'react'
import { Menu, Container, Button } from 'semantic-ui-react';
import ActivityStore from '../../app/stores/activityStore'
import { observer } from 'mobx-react-lite';

const NavBar:React.FC = () => {
    const activityStore = React.useContext(ActivityStore)
    return (
        <Menu fixed='top' inverted>
            <Container>
                <Menu.Item header>
                    <img src="/assets/logo.png" alt="logo" style={{marginRight: '10px'}}/>
                    Reactivities
                </Menu.Item>
                <Menu.Item name='Activities' />
                <Menu.Item>
                    <Button positive content='Create Activity' onClick={activityStore.openCreateForm}></Button>
                </Menu.Item>
            </Container>
        </Menu>
    );
};

export default observer(NavBar);
