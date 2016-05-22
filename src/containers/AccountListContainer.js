import React from 'react';
import AccountList from '../components/AccountList';
import API from '../utilities/api';

class AccountListContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    };
  }

  componentDidMount() {
    const self = this;
    //const apiUrl = 'https://33r5i5nr2l.execute-api.us-east-1.amazonaws.com/proto';
    const apiUrl = "https://nlk7dcxhy2.execute-api.us-east-1.amazonaws.com/mysql";
    const url = apiUrl + '/accounts';
    const method = 'GET';
    const params = {};
    API.send_request(url, method, params).
    then(function(data) {
      self.setState({data: data});
    })
    .catch(function(err) {
      alert(err);
    });
  }

  render() {
    return (<AccountList data={this.state.data} />);
  }
}

export default AccountListContainer;
