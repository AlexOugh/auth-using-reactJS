import React from 'react';
import PermissionList from '../components/PermissionList';
import API from '../utilities/api';

class PermissionListContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: "",
      resource: "",
      //action: "",
      data: [],
      /*data: [
        {
          "family_name": "Grizzanti",
          "id": "49d8bc68-f57e-11e3-ba1d-005056ba0d15",
          "given_name": "David",
          "email": "cloud_test_user@sungardas.com"
        },
        {
          "family_name": "Ough",
          "id": "b2fc88a6-7253-4850-8d5a-07639b1315aa",
          "given_name": "Alex",
          "email": "alex.ough@sungardas.com"
        }
      ],*/

      users: []
      /*users: [
        {'id':'1', 'email':'a'},
        {'id':'2', 'email':'b'},
        {'id':'3', 'email':'c'}
      ]*/
    };
  }

  componentDidMount() {
    const self = this;
    const apiUrl = 'https://33r5i5nr2l.execute-api.us-east-1.amazonaws.com/proto';
    const url = apiUrl + '/users';
    const method = 'GET';
    const params = {};
    API.send_request(url, method, params).
    then(function(data) {
      //alert(JSON.stringify(data));
      self.setState({users: data});
    })
    .catch(function(err) {
      alert(err);
    });
  }

  handleChange(e) {
    const name = e.target.name;
    const value = e.target.value;
    //alert(e.target.name);
    this.setState({
      [name]: value
    });
    //alert(JSON.stringify(this.state));
  }

  handleCheckboxChange(e) {
    const self = this;
    const name = e.target.name;
    const value = e.target.value;
    const action = e.target.id;
    //alert(e.target.name);
    var data = this.state.data;
    var permission = null;
    for(var i = 0; i < data.length; i++) {
      if (data[i].id === name) {
        permission = data[i];
        permission[action] = !data[i][action];
        break;
      }
    }
    self.setState({data: data});
    const apiUrl = 'https://33r5i5nr2l.execute-api.us-east-1.amazonaws.com/proto';
    var url = apiUrl + '/permissions';
    var method = 'POST';
    if (!permission[action]) {
      method = 'DELETE';
    }
    const params = {
      user: this.state.user,
      role: '',
      action: action,
      resource: this.state.resource,
      value: name
    };
    API.send_request(url, method, params).
    then(function(data) {
      //self.setState({data: data});
    })
    .catch(function(err) {
      alert(err);
      // reverse the change
      permission[action] = !permission[action];
      self.setState({data: data});
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const self = this;
    const apiUrl = 'https://33r5i5nr2l.execute-api.us-east-1.amazonaws.com/proto';
    var url = apiUrl + '/permissions?';
    //url += 'action=' + this.state.action;
    url += 'action=';
    url += '&user=' + this.state.user;
    url += '&resource=' + this.state.resource;
    url += '&all=true';
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
    let changeHandler = this.handleChange.bind(this);
    let submitHandler = this.handleSubmit.bind(this);
    let checkboxChangeHandler = this.handleCheckboxChange.bind(this);
    return (<PermissionList data={this.state.data} users={this.state.users} user={this.state.user} resource={this.state.resource} changeHandler={changeHandler} submitHandler={submitHandler} checkboxChangeHandler={checkboxChangeHandler} />);
  }
}

export default PermissionListContainer;
