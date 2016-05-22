import React from 'react';
import RolePermissionList from '../components/RolePermissionList';
import API from '../utilities/api';

class RolePermissionListContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      role: "",
      resource: "",
      //action: "",
      data: [],
      roles: []
    };
  }

  componentDidMount() {
    const self = this;
    //const apiUrl = 'https://33r5i5nr2l.execute-api.us-east-1.amazonaws.com/proto';
    const apiUrl = "https://nlk7dcxhy2.execute-api.us-east-1.amazonaws.com/mysql";
    const url = apiUrl + '/roles';
    const method = 'GET';
    const params = {};
    API.send_request(url, method, params).
    then(function(data) {
      //alert(JSON.stringify(data));
      self.setState({roles: data});
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
    var rolePermission = null;
    for(var i = 0; i < data.length; i++) {
      if (data[i].id === name) {
        rolePermission = data[i];
        rolePermission[action] = !data[i][action];
        break;
      }
    }
    self.setState({data: data});
    //const apiUrl = 'https://33r5i5nr2l.execute-api.us-east-1.amazonaws.com/proto';
    const apiUrl = "https://nlk7dcxhy2.execute-api.us-east-1.amazonaws.com/mysql";
    var url = apiUrl + '/permissions';
    var method = 'POST';
    if (!rolePermission[action]) {
      method = 'DELETE';
    }
    const params = {
      user: '',
      role: this.state.role,
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
      rolePermission[action] = !rolePermission[action];
      self.setState({data: data});
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const self = this;
    //const apiUrl = 'https://33r5i5nr2l.execute-api.us-east-1.amazonaws.com/proto';
    const apiUrl = "https://nlk7dcxhy2.execute-api.us-east-1.amazonaws.com/mysql";
    var url = apiUrl + '/permissions?';
    //url += 'action=' + this.state.action;
    url += 'action=';
    //url += '&user=' + this.state.user;
    url += '&role=' + this.state.role;
    url += '&resource=' + this.state.resource;
    url += '&all=true';
    const method = 'GET';
    const params = {};
    API.send_request(url, method, params).
    then(function(data) {
      if (Array.isArray(data)) {
        self.setState({data: data});
      }
      else {
        alert("Failed to find data");
        self.setState({data: []});
      }
    })
    .catch(function(err) {
      alert(err);
    });
  }

  render() {
    let changeHandler = this.handleChange.bind(this);
    let submitHandler = this.handleSubmit.bind(this);
    let checkboxChangeHandler = this.handleCheckboxChange.bind(this);
    return (<RolePermissionList data={this.state.data} roles={this.state.roles} role={this.state.role} resource={this.state.resource} changeHandler={changeHandler} submitHandler={submitHandler} checkboxChangeHandler={checkboxChangeHandler} />);
  }
}

export default RolePermissionListContainer;
