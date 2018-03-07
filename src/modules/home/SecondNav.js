import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import BottomNavigation, { BottomNavigationButton } from 'material-ui/BottomNavigation';
import Poll from 'material-ui-icons/Poll';
import Today from 'material-ui-icons/Today';
import QuestionAnswer from 'material-ui-icons/QuestionAnswer';
import SpeakerNotes from 'material-ui-icons/SpeakerNotes';
import Whatshot from 'material-ui-icons/Whatshot';

const styles = {
    root: {
        width: '100%',
        padding: '10px 0',
        marginBottom: 6,
    },
    button: {
        color: '#FF8E80',
        minWidth: 0,
    },
    label: {
        color: 'rgba(0, 0, 0, 0.8)',
        fontSize: 14,
    },
    icon: {
        width: 28,
        height: 28,
    },
};

class SimpleBottomNavigation extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: -1,
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
                <BottomNavigationButton classes={{label: classes.label, icon: classes.icon}} className={classes.button} label="榜单" icon={<Poll />} />
                <BottomNavigationButton classes={{label: classes.label, icon: classes.icon}} className={classes.button} label="签到" icon={<Today />} />
                <BottomNavigationButton classes={{label: classes.label, icon: classes.icon}} className={classes.button} label="问答" icon={<QuestionAnswer />} />
                <BottomNavigationButton classes={{label: classes.label, icon: classes.icon}} className={classes.button} label="话题" icon={<SpeakerNotes />} />
                <BottomNavigationButton classes={{label: classes.label, icon: classes.icon}} className={classes.button} label="达人" icon={<Whatshot />} />
            </BottomNavigation>
        );
    }
}

SimpleBottomNavigation.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SimpleBottomNavigation);