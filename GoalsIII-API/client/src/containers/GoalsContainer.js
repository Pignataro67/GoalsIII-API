import React, { Component } from 'react';
import AddGoal from '../components/Goals/AddGoal';
import GoalsList from '../components/Goals/GoalsList';
import GoalInput from '../components/Goals/GoalInput';
import { connect } from 'react-redux';

class GoalsContainer extends Component {

  render() {
    return (
      <div>
        <GoalsList goals={this.props.goals} />  <GoalsList goals={this.props.goals} /> 
        <GoalInput />
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    goals: state.goals
  }
}

export default connect(mapStateToProps)(GoalsContainer);