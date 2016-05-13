
import React from 'react';

class AwsToken extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <htmlForm classNameName="awsToken">

        <div className="module_header">
          <span>Get AWS Temporary Tokens</span>
        </div>

        <span className="error" style={{ display: 'none' }}></span>

        <div className="aruba_flex">

          <div>
            <div>
              <label htmlFor="account">AWS Account Id</label>
            </div>
            <input name="account" value={ this.props.account } onChange={ this.props.changeHandler } />
          </div>

          <div>
            <div>
              <label htmlFor="role">AWS Role Name</label>
            </div>
            <input name="role" value={ this.props.role } onChange={ this.props.changeHandler } />
          </div>

          <div className="start">
            <button className="small">submit</button>
          </div>

          <div id="tokens" className="start" style={{ display: 'none' }}>
            <div><label htmlFor="tokens">Tokens</label></div>
            <div style={{ overflow: 'auto' }} id="content">
              <textarea>{ this.props.tokens }</textarea>
            </div>
          </div>
        </div>

      </htmlForm>);
  }
}

AwsToken.propTypes = {
  account: React.PropTypes.string.isRequired,
  role: React.PropTypes.string.isRequired,
  tokens: React.PropTypes.string.isRequired,
  changeHandler: React.PropTypes.func,
  submitHandler: React.PropTypes.func
};

export default AwsToken;
