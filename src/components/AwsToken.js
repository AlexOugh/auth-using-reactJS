
import React from 'react';

const AwsToken = ({ account, role, tokens, changeHandler, submitHandler }) => (

  <htmlForm classNameName="awsToken">

    <div className="module_header">
      <span>Get AWS Temporary Tokens</span>
    </div>
    <br/>

    <span className="error" style={{ display: 'none' }}></span>

    <div className="aruba_flex">

      <div>
        <div>
          <label htmlFor="account">AWS Account Id</label>
        </div>
        <input name="account" value={ account } onChange={ changeHandler } />
      </div>
      <br/>

      <div>
        <div>
          <label htmlFor="role">AWS Role Name</label>
        </div>
        <input name="role" value={ role } onChange={ changeHandler } />
      </div>
      <br/>

      <div className="start">
        <button className="small" onClick={ submitHandler }>submit</button>
      </div>
      <br/>

      <div id="tokens" className="start">
        <div><label htmlFor="tokens">Tokens</label></div>
        <div style={{ overflow: 'auto' }} id="content">
          <textarea rows={10} cols={120} value={ tokens }/>
        </div>
      </div>
    </div>

  </htmlForm>
);

AwsToken.propTypes = {
  account: React.PropTypes.string.isRequired,
  role: React.PropTypes.string.isRequired,
  tokens: React.PropTypes.string.isRequired,
  changeHandler: React.PropTypes.func,
  submitHandler: React.PropTypes.func
};

export default AwsToken;
