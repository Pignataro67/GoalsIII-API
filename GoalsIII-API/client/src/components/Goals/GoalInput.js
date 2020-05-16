import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button, Form } from 'semantic-ui-react';
import { addGoal } from '../../actions/goalsActions';

class GoalInput extends Component {

  constructor(){
    super()
    this.state = {
      aim: "",
      category: "",
      strategy: ""
    }
  }

  handleChange = (e) =>{
    this.setState({
      [e.target.value]: e.target.value
    })
  }

  handleOnSubmit = (e) => {
    e.preventDefault();
    this.props.addGoalal(this.state)
  }

  render() {
    return (
        <Form className="new-goal-form" onSubmit={this.handleOnSubmit}>

        <Form.Field>

        <label>Your Aim:</label>

        <input placeholder="Aim" id="aim" onChange={this.handleChange} />

        </Form.Field>

        <Form.Field>

        <label>Category</label>

        <input placeholder="Category" id="category" onChange={this.handleChange}/>

        </Form.Field>

        <Form.Field>
          <label>Your Strategy:</label>
          <input placeholder="How will you get there?" id="strategy" onChange={this.handleChange} />
        </Form.Field>
        
        <Button type="submit">Add Goal</Button>
        </Form>
    );
  }
}

export default connect(null, { addGoal })(GoalInput);