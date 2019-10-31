import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { useHistory } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import { Typography } from '@material-ui/core';
import axios from 'axios';

const useStyles = makeStyles(theme => ({
  button: {
    margin: theme.spacing(1),
    color: '#fff',
    borderColor: '#fff',
  },
  root: { padding: theme.spacing(2, 2) },
}));

const SubmitTip = props => {
  console.log(props);
  const { title, desc, link } = props.props;
  const history = useHistory();

  const submit = () => {
    console.log(title, desc, link);

    axios
      .post('/tips', {
        title,
        desc,
        link,
      })
      .then(function() {
        history.push('/browse');
      })
      .catch(function(error) {
        console.log(error);
      });
  };

  const classes = useStyles();

  return (
    <div>
      <Typography className={classes.root} variant='h3'>
        {title}
      </Typography>
      <Typography className={classes.root} variant='h5'>
        {desc}
      </Typography>
      <Typography className={classes.root} variant='h5'>
        <a href={link}>{link}</a>
      </Typography>
      <Button onClick={submit} variant='outlined' className={classes.button}>
        Submit
      </Button>
    </div>
  );
};

export default SubmitTip;
