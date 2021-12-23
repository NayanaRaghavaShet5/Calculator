import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Button } from '@material-ui/core';
import { purple } from '@material-ui/core/colors';

const useStyles = makeStyles({
    root: {
        border: 0,
        borderRadius: 10,
        height: '320px',
        margin: '8px 0 0 0',
    },
});

const buttons = [
    'C', '++', '%', '/',
    '7', '8', '9', '*',
    '4', '5', '6', '-',
    '1', '2', '3', '+',
    '0', '.', '='
];

const buttonStyle = {
    width: '80px', height: '60px', minWidth: '80px',
    margin: '5px', borderRadius: '15px', backgroundColor: purple[500],
    color: 'white', fontSize: '20px', '&:hover': {
        backgroundColor: purple[700],
    },
};

const KeyPad = props => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            {buttons.map((button) => {
                if (button === '0') {
                    buttonStyle.width = '172px';
                }
                if (button === '.') {
                    buttonStyle.width = '80px';
                }
                if (button === '=') {
                    buttonStyle.width = '80px';
                }
                if (button === '++' || button === 'C' || button === '%' || button === '/') {
                    buttonStyle.backgroundColor = 'darkblue';
                }
                if (button === '*' || button === '-' || button === '+' || button === '=') {
                    buttonStyle.backgroundColor = 'darkblue';
                }
                if (button === '7' || button === '8' || button === '9' || button === '6' || button === '5' || button === '.'
                    || button === '1' || button === '2' || button === '3' || button === '4' || button === '0') {
                    buttonStyle.backgroundColor = purple[500];
                }

                const styles = Object.assign({}, buttonStyle);
                const label = button;
                return <Button className="input-button" style={styles} variant="raised"
                    onClick={(e) => props.handleCalcButtons(e, button)}>{label}</Button>
            })}
        </div>
    );
}

export default KeyPad;