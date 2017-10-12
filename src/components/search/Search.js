import React from 'react';
import { withStyles } from 'material-ui/styles'
import Input from 'material-ui/Input';
import { grey } from 'material-ui/colors';
import Textsms from 'material-ui-icons/Textsms';
import SearchIcon from 'material-ui-icons/Search';

const styles = theme => ({
    wrapper: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        marginTop: 10,
    },
    textField: {
        backgroundColor: grey[100],
        borderRadius: 3,
        fontSize: 14,
    },
    form: {
        width: '100%',
        marginLeft: 16,
    },
    searchIcon: {
        position: 'absolute',
        left: 20,
        zIndex: 2,
        color: grey[400],
    },
    input: {
        caretColor: 'red',
        color: 'red !important',
        textShadow: '0px 0px 0px #495057',
        '-webkit-text-fill-color': 'transparent',
        paddingLeft: 32,
    },
    textsms: {
        margin: '0 16px',
        color: grey[500],
    },
});

class Search extends React.Component {
    render() {
        const {classes} = this.props;

        return (
            <div className={classes.wrapper}>
                <SearchIcon className={classes.searchIcon}/>
                <form className={classes.form}>
                    <Input
                        classes={{input:classes.input}}
                        className={classes.textField}
                        id="search"
                        type="search"
                        fullWidth
                        disableUnderline
                        placeholder="搜索"
                    />
                </form>
                <Textsms className={classes.textsms}/>
            </div>
        )

    }
}

export default withStyles(styles)(Search)