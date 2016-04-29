import React from 'react';
import API from '../utilities/api';

class CallbackContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  componentDidMount() {
    const access_token = this.props.location.query.access_token;
    API.store_access_token(access_token);
    window.location = '/';
  }

  render() {
    return <div/>;
  }
}

export default CallbackContainer;
