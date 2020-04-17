import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import { Menu, Sidebar } from 'semantic-ui-react';

const SideBar = () => {
    const history = useHistory();

    const redirectTo = (link) => { history.push(link) }

    return(
            <Menu pointing vertical>
                <Menu.Item key='user' onClick={() => redirectTo('/')}>
                    <Link to='/'>User</Link>
                </Menu.Item>
                <Menu.Item onClick={() => redirectTo('/study/add')}>
                    <Link to='/study/add' >add study</Link>
                </Menu.Item>
            </Menu>
    )
}

export default SideBar;