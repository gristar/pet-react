import React from 'react'
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';
import Pagination from '../../components/pagination';

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

function ImgContainer({ src, dir }) {
    return (
        <div dir={dir} style={{background: `url(${src}) no-repeat center/cover`, minHeight: 150}} />
    );
}

ImgContainer.propTypes = {
    dir: PropTypes.string.isRequired,
    src: PropTypes.string.isRequired,
};

const styles = theme => ({
    root: {
        backgroundColor: theme.palette.background.paper,
    },
    wrap: {
        position: 'relative',
    },
    appbar: {
        backgroundColor: '#fff',
        boxShadow: 'none',
    }
});

class Swiper extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            index: 0,
        };
        this.handleChangeIndex = index => {
            this.setState({index: index});
        }
    }

    render() {
        const { classes, theme } = this.props;

        return (
            <div className={classes.wrap}>
                <AutoPlaySwipeableViews
                    axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
                    index={this.state.index}
                    onChangeIndex={this.handleChangeIndex}
                >
                    <ImgContainer dir={theme.direction} src='http://img.zcool.cn/community/0172725563c7db0000009af098adf9.jpg@2o.jpg' />
                    <ImgContainer dir={theme.direction} src='http://img.zcool.cn/community/018ce6570a0c9d32f8751b3fbbb583.jpg@2o.jpg' />
                    <ImgContainer dir={theme.direction} src='http://pic.90sjimg.com/back_pic/qk/back_origin_pic/00/03/76/26666f43efae2da0cc60298eaef525bc.jpg' />
                    <ImgContainer dir={theme.direction} src='http://pic.90sjimg.com/back_pic/qk/back_origin_pic/00/04/22/a28a3f189228ba814b55d6d875cf9945.jpg' />
                    <ImgContainer dir={theme.direction} src='http://pic.90sjimg.com/back_pic/qk/back_origin_pic/00/02/31/d8319b151dff92f7d5db3f9bc1d3cc6b.jpg' />
                </AutoPlaySwipeableViews>
                <Pagination dots={5} index={this.state.index} onChangeIndex={this.handleChangeIndex}/>
            </div>
        )
    }
}

Swiper.propTypes = {
    classes: PropTypes.object.isRequired,
    theme: PropTypes.object.isRequired,
};

export default withStyles(styles, { withTheme: true })(Swiper);