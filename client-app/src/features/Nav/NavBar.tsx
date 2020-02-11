import React from 'react'
import { Menu, Container, Button } from 'semantic-ui-react';

interface iNavBar {
    openCreateForm: ()=>void
}

const NavBar:React.FC<iNavBar> = ({openCreateForm}) => {
    return (
        <Menu fixed='top' inverted>
            <Container>
                <Menu.Item header>
                    <img src="/assets/logo.png" alt="logo" style={{marginRight: '10px'}}/>
                    Reactivities
                </Menu.Item>
                <Menu.Item name='Activities' />
                <Menu.Item>
                    <Button positive content='Create Activity' onClick={openCreateForm}></Button>
                </Menu.Item>
            </Container>
        </Menu>
    );
};

export default NavBar;
