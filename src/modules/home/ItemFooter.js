/**
 * Created by gristar on 2017/10/18.
 */
import React from 'react';
import { withStyles } from 'material-ui/styles';
import { CardActions } from 'material-ui/Card';
import IconButton from 'material-ui/IconButton';
import Visibility from 'material-ui-icons/Visibility';
import Comment from 'material-ui-icons/Comment';
import Favorite from 'material-ui-icons/Favorite';
import Avatar from 'material-ui/Avatar';
import {grey} from 'material-ui/colors';

const styles = {
    root: {
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

const ItemFooter = (props) => {
    const { classes, viewCount, commentCount, likeCount, userName } = props;
    return(
        <div className={classes.root}>
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
    )
};

export default withStyles(styles)(ItemFooter);