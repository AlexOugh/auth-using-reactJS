import React from 'react';
import User from '../components/User';

// Purpose: How things work (data fetching, state updates)
// Aware of flux: yes
// To read data: one option is to read from flux state
// To change data: Dispatch Redux actions

class UserContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'Joe Blow',
      age: '22'
    };
  }
  render() {
    return <User name={this.state.name} age={this.state.age} />;
  }
}

export default UserContainer;
