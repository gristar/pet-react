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
                    <ImgContainer dir={theme.direction} src='https://www.baidu.com/img/bd_logo1.png' />
                    <ImgContainer dir={theme.direction} src='https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=2952479794,1134612206&fm=200&gp=0.jpg' />
                    <ImgContainer dir={theme.direction} src='https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1507886499572&di=27d5e6d88779752ec5292145ef4fcabc&imgtype=0&src=http%3A%2F%2Fimgsrc.baidu.com%2Fimgad%2Fpic%2Fitem%2F730e0cf3d7ca7bcb1d35d215b5096b63f624a8b9.jpg' />
                    <ImgContainer dir={theme.direction} src='https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1507886499572&di=8f3466cece6754d0f1146586b9769835&imgtype=0&src=http%3A%2F%2Fimgsrc.baidu.com%2Fimgad%2Fpic%2Fitem%2Fb58f8c5494eef01fd695b3fcebfe9925bc317d02.jpg' />
                    <ImgContainer dir={theme.direction} src='https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1507886499570&di=ff90c4507b63ec7a9ac64ac89539228e&imgtype=0&src=http%3A%2F%2Fimgsrc.baidu.com%2Fimgad%2Fpic%2Fitem%2Ff703738da97739126c6dae5bf3198618367ae245.jpg' />
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