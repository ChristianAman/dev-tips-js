import React, { useState } from 'react';
import DisplayErrors from '../util/DisplayErrors';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles(theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 200,
  },
  button: {
    margin: theme.spacing(1),
  },
  input: {
    display: 'none',
  },
}));

export const AddTitle = props => {
  const [title, setTitle] = useState('');
  const [error, setError] = useState('');
  const [titleValid, setTitleValid] = useState(false);

  const classes = useStyles();

  const cb = () => {
    props.returnData({ title });
  };

  const handleUserInput = event => {
    const value = event.target.value;
    setTitle(value);
    validate(value);
  };

  const validate = value => {
    let validationError = error;

    const valueValid = /^([\w\W]{3,})$/i.test(value);

    validationError = valueValid ? '' : 'The title needs to be atleast 3 characters long';
    setTitleValid(valueValid);
    setError(validationError);
  };

  return (
    <div>
      <DisplayErrors error={error} />
      <form className={classes.container} noValidate autoComplete='off'>
        <div>
          <TextField
            id='title'
            className={classes.textField}
            label='Title'
            margin='normal'
            variant='outlined'
            onChange={e => handleUserInput(e)}
          />
        </div>
        <Button onClick={cb} disabled={!titleValid} variant='outlined' className={classes.button}>
          Next
        </Button>
      </form>
    </div>
  );
};

export default AddTitle;