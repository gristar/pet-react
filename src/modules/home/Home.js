import React from 'react';
import Tabs from './Tabs';
import Search from '../../components/search';

class Home extends React.Component {
    render() {
        return (
            <div>
                <Search/>
                <Tabs/>
            </div>
        );
    }
}

export default Home;