import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Card, { CardActions, CardContent, CardHeader } from 'material-ui/Card';
import Divider from 'material-ui/Divider';
import ItemFooter from './ItemFooter';

const styles = {
    card: {
        maxWidth: 'auto',
        boxShadow: 'none',
    },
    header: {
        padding: '10px 16px 0',
    },
    content: {
        padding: '8px 16px',
    },
    media: {
        height: 100,
    },
    title: {
        fontSize: 14,
    },
    img: {
        width: '33.3333%',
    },
    video: {
        height: 150,
    },
};

function SimpleMediaCard(props) {
    const { classes, title, imgs, video } = props;
    let media = null;
    if(imgs) {
        media = <div>
            {imgs.map((img, index) => <img key={index} className={classes.img} src={img.src} alt={img.alt}/>)}
        </div>
    }
    else if(video) {
        media = <div>
            <video className={classes.video} src={video.src}/>
        </div>
    }
    return (
        <div>
            <Card className={classes.card}>
                <CardHeader
                    className={classes.header}
                    classes={{title:classes.title}}
                    title={title}
                />
                <CardContent className={classes.content}>
                    {media}
                </CardContent>
                <ItemFooter/>
            </Card>
            <Divider />
        </div>
    );
}

SimpleMediaCard.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SimpleMediaCard);