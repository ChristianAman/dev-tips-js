import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import Browse from './components/browse/Browse';
import AddTip from './components/addTip/AddTip';
import Home from './components/Home';
import CssBaseline from '@material-ui/core/CssBaseline';
import { /*ThemeProvider, createMuiTheme,*/ withStyles } from '@material-ui/core/styles';
// import colors from '@material-ui/core/colors';
// import Typography from '@material-ui/core/Typography';
// import Container from '@material-ui/core/Container';
import 'typeface-roboto';
import './App.css';

// const theme = createMuiTheme({
//   typography: {
//     button: {
//       fontSize: '1rem',
//       color: '#ffff00',
//     },
//   },
//   button: {
//     color: '#ffff00',
//   },
// });
const GlobalCss = withStyles({
  // @global is handled by jss-plugin-global.
  '@global': {
    // You should target [class*="MuiButton-root"] instead if you nest themes.
    '.MuiButton-root': {
      //color: '#ffff00',
    },
    '.MuiExpansionPanelDetails-root': {
      margin: '1rem',
      //background: '#fff00',
    },
  },
})(() => null);

const App = () => {
  return (
    <div className='App'>
      <CssBaseline />
      <GlobalCss />
      {/* <ThemeProvider theme={theme}> */}
      <header className='App-header'>
        <Router>
          <div>
            <Header />
            <Switch>
              <Route path='/' exact component={Home} />
              <Route path='/browse' exact component={Browse} />
              <Route path='/addtip' exact component={AddTip} />
            </Switch>
          </div>
        </Router>
      </header>
      {/* </ThemeProvider> */}
    </div>
  );
};

export default App;
