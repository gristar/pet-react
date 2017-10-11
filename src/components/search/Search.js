import React from 'react';
import { withStyles } from 'material-ui/styles'
import TextField from 'material-ui/TextField';
import { grey } from 'material-ui/colors'

const styles = theme => ({
    textField: {
        marginLeft: 10,
        backgroundColor: grey[100],
    }
});

class Search extends React.Component {
    render() {
        const {classes} = this.props;

        return (
            <form>
                <TextField
                    className={classes.textField}
                    id="search"
                    type="search"
                    placeholder="搜索"
                />
            </form>
        )

    }
}

export default withStyles(styles)(Search)