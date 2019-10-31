import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import axios from 'axios';

const useStyles = makeStyles(theme => ({
  button: {
    margin: theme.spacing(1),
  },
}));

const SubmitTip = props => {
  const { title, desc, link } = props.props;

  console.log(props);

  const submit = () => {
    console.log(title, desc, link);
    axios
      .post('/tips', {
        title,
        desc,
        link,
      })
      .then(function(response) {
        console.log(response);
      })
      .catch(function(error) {
        console.log(error);
      });
  };

  const classes = useStyles();

  return (
    <div>
      <h1>Sum:</h1>
      <h1>{title}</h1>
      <p>{desc}</p>
      <span>
        <a href={link}>{link}</a>
      </span>
      <Button onClick={submit} variant='outlined' className={classes.button}>
        Submit
      </Button>
    </div>
  );
};

export default SubmitTip;
