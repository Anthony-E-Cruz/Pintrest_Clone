import React from 'react';
import { withRouter } from 'react-router-dom';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.processForm(user).then(this.props.closeModal);;
  }

  renderErrors() {
    return (
      <ul>
        {this.props.errors.map((error, i) => (
          <li key={`error-${i}`}>
            {error}
          </li>
        ))}
      </ul>
    );
  }

  render() {
    return (
      <div className="login-form-container">
        <form onSubmit={this.handleSubmit} className="login-form-box">
          <p className="welcome">Welcome to Pinspiration</p> 
          {/* <br /> */}
          {/* <div onClick={this.props.closeModal} className="close-x">X</div> */}
          {this.renderErrors()}
          <div className="login-form">
            {/* <br /> */}
            {/* <label>Email: */}
              <input type="text"
                className="login-credentials"
                placeholder="Email"
                value={this.state.email}
                onChange={this.update('email')}
                className="login-input"
                />
            {/* </label> */}
            <br />
            {/* <label>Password: */}
              <input type="password"
                className="login-credentials"
                placeholder="Password"
                value={this.state.password}
                onChange={this.update('password')}
                className="login-input"
                />
            {/* </label> */}
            <br />
            <input className="session-submit" type="submit" value={this.props.formType} />
            <br />
            Please {this.props.formType} or {this.props.otherForm}
            <br /> 
            <button onClick={this.props.demoUser}>Demo Login</button>
          </div>
        </form>
      </div>
    );
  }
}

export default withRouter(SessionForm);
