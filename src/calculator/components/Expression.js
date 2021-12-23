import React from 'react';
import { TextField } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyle = makeStyles({
    root: {
        margin: '5px 10px 10px 0',
        boxShadow: '0 2px 5px 2px grey',
        '& .MuiInputBase-input': {
            fontSize: '16px',
            minWidth: '384px'
        },
        '& .MuiInput-underline:before': {
            borderBottom: 'transparent !important'
        },
        '& .MuiInput-underline:after': {
            borderBottom: 'transparent !important'
        },
    }
});

const Expression = props => {

    const classes = useStyle();

    return (
        <div className={classes.root}>
        <div>{props.expression}</div>
            <TextField value={props.value} multiline={true} rows={3} placeholder="Enter Your Expression" />
        </div>
    );
}

export default Expression;