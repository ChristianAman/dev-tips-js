import React from 'react';
import { useHistory } from 'react-router-dom';
// import SubmitTip from './addTip/SubmitTip';

// import Paper from '@material-ui/core/Paper';
// import { Typography } from '@material-ui/core';
// import { makeStyles } from '@material-ui/core/styles';
// const useStyles = makeStyles(theme => ({
//   root: {
//     padding: theme.spacing(3, 2),
//     margin: theme.spacing(3, 8),
//     background: '#333',
//     color: '#fff',
//   },
// }));

const Home = () => {
  const history = useHistory();

  // const classes = useStyles();
  // const fakeTip = {
  //   title: 'This is a title',
  //   desc:
  //     'This is a description. This is a description. This is a description. This is a description. ',
  //   link: 'http://www.google.com',
  // };

  return (
    <div>
      Home
      {/* {console.log(fakeTip)}
      <Paper className={classes.root} square={true}>
        <Typography variant='h2' component='h2'>
          Add Tip
          <hr />
        </Typography>
        <SubmitTip props={fakeTip} />
      </Paper> */}
      {history.push('/browse')}
    </div>
  );
};

export default Home;
