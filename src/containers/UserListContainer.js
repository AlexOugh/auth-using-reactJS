import React from 'react';
import UserList from '../components/UserList';
import API from '../utilities/api';

class UserListContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
      /*data: [
        {
          id: '1388534400000',
          email: 'a@a.com',
          family_name: 'family1',
          given_name: 'given1'
        },
        {
          id: '1420070400000',
          email: 'b@b.com',
          family_name: 'family2',
          given_name: 'given2'
        }
      ]*/
    };
  }

  componentDidMount() {
    const self = this;
    //const apiUrl = 'https://33r5i5nr2l.execute-api.us-east-1.amazonaws.com/proto';
    const apiUrl = "https://nlk7dcxhy2.execute-api.us-east-1.amazonaws.com/mysql";
    const url = apiUrl + '/users';
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
    return (<UserList data={this.state.data} />);
  }
}

export default UserListContainer;
