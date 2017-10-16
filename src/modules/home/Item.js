import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Card, { CardActions, CardContent, CardHeader } from 'material-ui/Card';
import IconButton from 'material-ui/IconButton';
import Visibility from 'material-ui-icons/Visibility';
import Comment from 'material-ui-icons/Comment';
import Favorite from 'material-ui-icons/Favorite';
import Avatar from 'material-ui/Avatar';
import {grey} from 'material-ui/colors';

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
    footWrap: {
        height: 26,
        fontSize: 14,
        color: grey[500],
        lineHeight: '26px',
        padding: '0 16px 8px',
    },
    actions: {
        float: 'right',
        height: 26,
        marginTop: -2,
    },
    iconButton: {
        width: 'auto',
        fontSize: 14,
        color: grey[400],
        marginLeft: 12,
    },
    icon: {
        width: '1.5em',
        height: '1.5em',
        marginRight: '5px',
    },
    avatar: {
        float: 'left',
        width: 26,
        height: 26,
        marginRight: 6,
    }
};

function SimpleMediaCard(props) {
    const { classes, title, imgs, video, userName, viewCount, commentCount, likeCount } = props;
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
                <div className={classes.footWrap}>
                    <Avatar alt="头像" src="http://tx.haiqq.com/uploads/allimg/150319/1612522R8-4.jpg" className={classes.avatar} />
                    {userName}
                    <CardActions className={classes.actions}>
                        <IconButton className={classes.iconButton}>
                            <Visibility className={classes.icon}/>
                            {viewCount || 0}
                        </IconButton>
                        <IconButton className={classes.iconButton}>
                            <Comment className={classes.icon}/>
                            {commentCount || 0}
                        </IconButton>
                        <IconButton className={classes.iconButton}>
                            <Favorite className={classes.icon}/>
                            {likeCount || 0}
                        </IconButton>
                    </CardActions>
                </div>
            </Card>
        </div>
    );
}

SimpleMediaCard.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SimpleMediaCard);