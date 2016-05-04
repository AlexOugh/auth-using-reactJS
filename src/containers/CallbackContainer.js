import React from 'react';

class CallbackContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  componentDidMount() {
    const access_token = this.props.location.query.access_token;
    sessionStorage.setItem('access_token', access_token);

    window.location = '/';
  }

  render() {
    return <div/>;
  }
}

export default CallbackContainer;
