import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getEmail, getRequest } from '../redux/actions';

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
    const verifyPassword = password.length >= minCharactersPassword; // true
    this.setState({ isBtnDisabled: !(verifyEmail && verifyPassword) }); // false
  };

  handleBtn = (e) => {
    e.preventDefault();
    const { history, dispatch } = this.props;
    const { email } = this.state;
    dispatch(getEmail(email));
    dispatch(getRequest());
    history.push('/carteira');
  };

  render() {
    const { isBtnDisabled } = this.state;
    return (
      <form>
        <input
          data-testid="email-input"
          type="email"
          name="email"
          onChange={ this.handleInput }
        />
        <input
          data-testid="password-input"
          type="password"
          name="password"
          onChange={ this.handleInput }
        />
        <button
          type="submit"
          disabled={ isBtnDisabled }
          onClick={ this.handleBtn }
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
