import React from 'react';
import AwsToken from '../components/AwsToken';
import API from '../utilities/api';

// Purpose: How things work (data fetching, state updates)
// Aware of flux: yes
// To read data: one option is to read from flux state
// To change data: Dispatch Redux actions

class AwsTokenContainer extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      account: '',
      role: 'sgas_dev_admin',
      tokens: '',
      env: 'development',
      fedaccount: '089476987273',
      fedrole: 'federate',
      region: 'us-east-1'
    };
  }

  handleChange(e) {
    const name = e.target.name;
    const value = e.target.value;
    this.setState({
      [name]: value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const account = this.state.account.trim();
    const role = this.state.role.trim();
    const env = this.state.env.trim();
    const fedaccount = this.state.fedaccount.trim();
    const fedrole = this.state.fedrole.trim();
    const region = this.state.region.trim();
    if (!account || !role) {
      return;
    }
    const params = { account: account, role: role, env: env, fedaccount: fedaccount, fedrole: fedrole, region: region };
    const apiUrl = 'https://3zupc84zw0.execute-api.us-east-1.amazonaws.com/dev';
    /*$.ajax({
      //url: this.props.url,
      url: apiUrl + '/aws-token',
      dataType: 'json',
      type: 'POST',
      data: params,
      success: function(data) {
        this.setState({data: data});
      }.bind(this),
      error: function(xhr, status, err) {
        if (xhr.state() == 'rejected') {
          var authLoginUrl = 'http://qa-sungard.sso.sungardas.io/service/oauth2/authorize?realm=SungardAS&scope=openid+profile+email+address+phone+cloud&redirect_uri=' + apiUrl + '/callback' + '&response_type=code&client_id=msaws';
          window.location = authLoginUrl;
        }
        console.error(this.props.url, status, err.toString());
      }.bind(this)
    });*/
    const self = this;
    const url = apiUrl + '/aws-token';
    const method = 'POST';
    API.send_request(url, method, params).
    then(function(data) {
      const tokenStr = "export AWS_ACCESS_KEY_ID=" + data.AccessKeyId + "\n"
        + "export AWS_SECRET_ACCESS_KEY=" + data.SecretAccessKey + "\n"
        + "export AWS_SESSION_TOKEN=" + data.SessionToken;
      self.setState({tokens: tokenStr});
    })
    .catch(function(err) {
      alert(err);
    });
    // this.setState({account: '', role: ''});
  }

  render() {
    let changeHandler = this.handleChange.bind(this);
    let submitHandler = this.handleSubmit.bind(this);
    return (<AwsToken account={this.state.account} role={this.state.role} tokens={this.state.tokens}
      changeHandler={changeHandler} submitHandler={submitHandler} />);
  }

}

export default AwsTokenContainer;
