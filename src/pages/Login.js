import React from 'react';
import { connect } from 'react-redux';

class Login extends React.Component {
  state = {
    email: '',
    password: '',
    isBtnDisabled: true,
  };

  handleInput = ({ target }) => {
    const { name, value } = target;
    this.setState({ [name]: value }, () => this.verifyBtn());
  };

  verifyBtn = () => {
    const { email, password } = this.state;
    const regex = /\S+@\S+\.\S+/;
    const verifyEmail = regex.test(email); // true
    const minCharactersPassword = 6;
    const verifyPassword = password.length > minCharactersPassword; // true
    const btnState = verifyEmail && verifyPassword; // true
    this.setState({ isBtnDisabled: !(btnState) }); // false
  };

  handleBtn = (e) => {
    e.preventDefault();
    const { history, dispatch } = this.props;
    const { email } = this.state;
    dispatch(getEmail(email));
    // dispatch(getRequest());
    history.push('/carteira');
  };

  render() {
    const { isBtnDisabled, email, password } = this.state;
    return (
      <form>
        <input
          type="email"
          value={ email }
          data-testid="email-input"
          onChange={ this.handleInput }
        />
        <input
          type="password"
          value={ password }
          data-testid="password-input"
          onChange={ this.handleInput }
        />
        <button
          type="submit"
          onClick={ this.handleBtn }
          disabled={ isBtnDisabled }
        >
          Entrar
        </button>
      </form>
    );
  }
}

Login.propTypes = {
  dispatch: PropTypes.func.isRequired,
  history: PropTypes.shape({
    push: PropTypes.func,
  }).isRequired,
};

export default connect()(Login);
