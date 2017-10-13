import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import SwipeableViews from 'react-swipeable-views';
import AppBar from 'material-ui/AppBar';
import Tabs, { Tab } from 'material-ui/Tabs';
import ImgSwiper from '../../components/imgsSwiper';
import SecondNav from './SecondNav';
import Divider from 'material-ui/Divider';
import List from './List';

function TabContainer({ children, dir }) {
    return (
        <div dir={dir}>
            {children}
        </div>
    );
}

TabContainer.propTypes = {
    children: PropTypes.node.isRequired,
    dir: PropTypes.string.isRequired,
};

const styles = theme => ({
    root: {
        backgroundColor: theme.palette.background.paper,
    },
    appbar: {
        backgroundColor: '#fff',
        boxShadow: 'none',
    }
});

class FullWidthTabs extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: 0,
        };
        this.handleChange = (event, value) => {
            this.setState({ value });
        };

        this.handleChangeIndex = index => {
            this.setState({ value: index });
        };
    }

    render() {
        const { classes, theme } = this.props;

        return (
            <div className={classes.root}>
                <AppBar position="static" className={classes.appbar}>
                    <Tabs
                        value={this.state.value}
                        onChange={this.handleChange}
                        indicatorColor="primary"
                        textColor="primary"
                        fullWidth
                        scrollable
                    >
                        <Tab label="精选" />
                        <Tab label="关注" />
                        <Tab label="宠物资讯" />
                        <Tab label="波奇剧场" />
                        <Tab label="波奇2剧场" />
                        <Tab label="波奇3剧场" />
                        <Tab label="波奇d4剧场" />
                        <Tab label="波奇d5剧场" />
                    </Tabs>
                </AppBar>
                <SwipeableViews
                    axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
                    index={this.state.value}
                    onChangeIndex={this.handleChangeIndex}
                >
                    <TabContainer dir={theme.direction}>
                        <ImgSwiper/>
                        <SecondNav/>
                        <Divider style={{height:8,backgroundColor:'rgba(0, 0, 0, 0.04)'}}/>
                        <List/>
                    </TabContainer>
                    <TabContainer dir={theme.direction}>Item Two</TabContainer>
                    <TabContainer dir={theme.direction}>Item Three</TabContainer>
                    <TabContainer dir={theme.direction}>Item four</TabContainer>
                    <TabContainer dir={theme.direction}>Item s</TabContainer>
                    <TabContainer dir={theme.direction}>Item foeur</TabContainer>
                    <TabContainer dir={theme.direction}>Item fdour</TabContainer>
                    <TabContainer dir={theme.direction}>Item ffour</TabContainer>
                </SwipeableViews>
            </div>
        );
    }
}

FullWidthTabs.propTypes = {
    classes: PropTypes.object.isRequired,
    theme: PropTypes.object.isRequired,
};

export default withStyles(styles, { withTheme: true })(FullWidthTabs);