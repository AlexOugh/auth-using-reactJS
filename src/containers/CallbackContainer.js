import React from 'react';

class CallbackContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  componentDidMount() {
    const access_token = this.props.location.query.access_token;
    alert(access_token);
    sessionStorage.setItem('access_token', access_token);

    //alert(sessionStorage.getItem('last_url'));
    if (sessionStorage.getItem('last_url')) {
      window.location = sessionStorage.getItem('last_url');
    }
    else {
      window.location = '/';
    }
  }

  render() {
    return <div/>;
  }
}

export default CallbackContainer;
