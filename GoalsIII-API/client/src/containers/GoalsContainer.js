import React, { Component } from 'react';
import AddGoal from '../components/Goals/AddGoal';
import GoalsList from '../components/Goals/GoalsList';
import AddGoal from '../components/Goals/AddGoal';
import { connect } from 'react-redux';

class GoalsContainer extends Component {

  render() {
    return (
      <div>
        { this.props.goals.length > 0 ?  <GoalsList goals={this.props.goals} /> : null }
        <AddGoal />
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    goals: state.goals.goals
  }
}

export default connect(mapStateToProps)(GoalsContainer);