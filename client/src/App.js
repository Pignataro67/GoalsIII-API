import React from 'react';
import './App.css';
import GoalsContainer from './containers/GoalsContainer';
import NavBar from './components/Navbar';
import { Route } from 'react-router-dom';
import Home from './components/Home';
import AddGoal from './components/Goals/AddGoal';
import GoalsContainer from './containers/GoalsContainer';

class App extends Component {
  render() {	 
  return (
    <div className="App">
      <h1>Goals</h1>
      <p>Stay Focused</p>
      <GoalsContainer />
      <NavBar />
        <div>
          <Route exact path='/' render={Home} />
          <Route exact path='/goals/new' component={AddGoal} />
          <Route exact path='/goals' component={GoalsContainer} />
        </div>
    </div>
  );
}

export default App;