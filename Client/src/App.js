import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import Browse from './components/browse/Browse';
import AddTip from './components/addTip/AddTip';
import Home from './components/Home';
import CssBaseline from '@material-ui/core/CssBaseline';
// import Typography from '@material-ui/core/Typography';
// import Container from '@material-ui/core/Container';
import 'typeface-roboto';
import './App.css';

function App() {
  return (
    <div className='App'>
      <CssBaseline />
      <header className='App-header'>
        <Router>
          <Header />
          <Switch>
            <Route path='/' exact component={Home} />
            <Route path='/browse' exact component={Browse} />
            <Route path='/addtip' exact component={AddTip} />
          </Switch>
        </Router>
      </header>
    </div>
  );
}

export default App;
