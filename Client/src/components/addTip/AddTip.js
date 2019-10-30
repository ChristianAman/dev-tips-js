import React, { useState } from 'react';
// import PropTypes from 'prop-types'
import AddTitle from './AddTitle';
import AddDesc from './AddDesc';
import AddLink from './AddLink';
// import AddTags from './AddTags';
// import AddCategory from './AddCategory';
import SubmitTip from './SubmitTip';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import { Typography } from '@material-ui/core';
// import blueGray from '@material-ui/core/colors/blurGray'

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(3, 2),
  },
}));

const AddTip = () => {
  const [state, setState] = useState({
    id: null,
    title: null,
    desc: null,
    tags: null,
    category: null,
  });
  const [step, setStep] = useState(0);

  // static propTypes = {
  //   prop: PropTypes
  // }

  const dataCallback = data => {
    setState({ ...state, ...data });
    setStep(step + 1);
  };

  const renderStep = step => {
    const { title } = state;
    switch (step) {
      case 0:
        return <AddTitle returnData={dataCallback} />;
      case 1:
        return <AddDesc title={title} returnData={dataCallback} />;
      case 2:
        return <AddLink title={title} returnData={dataCallback} />;
      // case 3:
      //   return <AddTags title={title} returnData={dataCallback}/>
      default:
        return <SubmitTip props={state} />;
    }
  };

  const classes = useStyles();
  console.log('style:', classes);
  console.log(state);

  return (
    <Paper className={classes.root}>
      <Typography variant='h3' component='h2'>
        Add Tip
      </Typography>
      {renderStep(step)}
    </Paper>
  );
};

export default AddTip;

// const useStyles = makeStyles(theme => ({
//   root: {
//     padding: theme.spacing(3, 2),
//   },
// }));

// export default class AddTip extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       id: null,
//       title: null,
//       desc: null,
//       tags: null,
//       category: null,
//       step: 0,
//     };
//   }

//   // static propTypes = {
//   //   prop: PropTypes
//   // }

//   dataCallback = data => {
//     this.setState({ ...data, step: this.state.step + 1 });
//   };

//   renderStep = step => {
//     const { title } = this.state;
//     switch (step) {
//       case 0:
//         return <AddTitle returnData={this.dataCallback} />;
//       case 1:
//         return <AddDesc title={title} returnData={this.dataCallback} />;
//       // case 2:
//       //   return <AddCategory title={title} returnData={this.dataCallback}/>
//       // case 3:
//       //   return <AddTags title={title} returnData={this.dataCallback}/>
//       default:
//         return <SubmitTip props={this.state} />;
//     }
//   };

//   render() {
//     const classes = useStyles();
//     console.log('style:', classes);
//     const { step } = this.state;
//     console.log(this.state);
//     return <Paper className={classes.root}>{this.renderStep(step)}</Paper>;
//   }
// }
