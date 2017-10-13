import React from 'react';
import Item from './Item';

class List extends React.Component {
    render () {
        return (
            <div>
                <Item/>
                <Item/>
                <Item/>
                <Item/>
                <Item/>
                <Item/>
            </div>
        )
    }
}

export default List;