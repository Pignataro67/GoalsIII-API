import React from 'react';
import Goal from './Goal';

export default class GoalsList extends Component {
  render(){
    const { goals }  = this.props; 

    const GoalsList = ({ goals }) => (
        <div>	 
          <ol>	  
          {goals.map((goal) => (
            <li>  
              <Goal key={goal.id} aim={goal.aim} goal={goal} strategy={goal.strategy} 
            category={goal.category} objectives={goal.objectives} />
        </li> ))}
      </ol>
      </div>
    );
  }
}