import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import BottomNavigation, { BottomNavigationButton } from 'material-ui/BottomNavigation';
import Home from 'material-ui-icons/Home';
import StoreMallDirectory from 'material-ui-icons/StoreMallDirectory';
import Spa from 'material-ui-icons/Spa';
import AccountCircle from 'material-ui-icons/AccountCircle'

const styles = {
    root: {
        width: '100%',
        position: 'fixed',
        bottom: 0,
    },
};

class SimpleBottomNavigation extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: 0,
        };
        this.handleChange = (event, value) => {
            this.setState({ value });
        };
    }

    render() {
        const { classes } = this.props;
        const { value } = this.state;

        return (
            <BottomNavigation
                value={value}
                onChange={this.handleChange}
                showLabels
                className={classes.root}
            >
                <BottomNavigationButton label="波奇" icon={<Home />} />
                <BottomNavigationButton label="商城" icon={<StoreMallDirectory />} />
                <BottomNavigationButton label="服务" icon={<Spa />} />
                <BottomNavigationButton label="我的" icon={<AccountCircle />} />
            </BottomNavigation>
        );
    }
}

SimpleBottomNavigation.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SimpleBottomNavigation);