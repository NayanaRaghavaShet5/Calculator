import React, { useState } from 'react';
import { Box } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import KeyPad from './components/KeyPad';
import Expression from './components/Expression';

const useStyles = makeStyles({
  root: {
    border: 0,
    borderRadius: 10,
    boxShadow: '0 3px 5px 2px grey',
    height: '435px',
    width: '30%',
    margin: '5% 10% 15% 20%',
    padding: '5px 0px 0px 10px'
  },
});

export default () => {

  const classes = useStyles();
  const [value, setValue] = useState('');
  const [expression, setExpression] = useState('');

  const handleCalcButtons = (e, button) => {
    if (button === '=') {
      setExpression(button);
      calculate();
    } else if (button === 'C') {
      reset();
    } else {
      setValue(value + button);
    }
  }

  const calculate = () => {
    try {
      setExpression(value);
      setValue(eval(value));
    }
    catch (e) {
      setValue('INVALID EXPRESSION');
    }
  }

  const reset = () => {
    setValue('');
    setExpression('');
  }

  return (
    <div>
      <Box className={classes.root}>
        <Expression value={value} expression = {expression}/>
        <KeyPad setValue={setValue} handleCalcButtons={handleCalcButtons} />
      </Box>
    </div>
  );
};
