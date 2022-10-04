import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../App';
import { renderWithRouterAndRedux } from './helpers/renderWith';

describe('Página de Login', () => {
  test('Verifica se é exibido na tela um input de email e senha ', () => {
    renderWithRouterAndRedux(<App />);
    const inputEmail = screen.getByTestId('email-input');
    expect(inputEmail).toBeInTheDocument();
    expect(inputEmail).toHaveProperty('type', 'email');

    const inputSenha = screen.getByTestId('password-input');
    expect(inputSenha).toBeInTheDocument();
    expect(inputSenha).toHaveProperty('type', 'password');
  });

  test('Verifica se redireciona para /carteira ao clicar no botão Entrar', () => {
    const { history } = renderWithRouterAndRedux(<App />);

    const inputEmail = screen.getByTestId('email-input');
    expect(inputEmail).toBeInTheDocument();
    expect(inputEmail).toHaveProperty('type', 'email');

    const inputSenha = screen.getByTestId('password-input');
    expect(inputSenha).toBeInTheDocument();
    expect(inputSenha).toHaveProperty('type', 'password');

    const buttonEntrar = screen.getByRole('button', { name: /Entrar/i });
    expect(buttonEntrar).toBeInTheDocument();

    const mockEmail = 'layane@trybe.com';
    const mockSenha = '112233';

    userEvent.type(inputEmail, mockEmail);
    userEvent.type(inputSenha, mockSenha);
    userEvent.click(buttonEntrar);

    const { pathname } = history.location;
    expect(pathname).toBe('/carteira');
  });
});

describe('Página de Carteira', () => {
  test('Header - Verifica se é exibido na tela um elemento com o email, valor de despesa total e tipo de moeda', async () => {
    renderWithRouterAndRedux(<App />, { initialEntries: ['/carteira'] });

    const emailField = screen.getByTestId('email-field');
    expect(emailField).toBeInTheDocument();

    const totalField = screen.getByTestId('total-field');
    expect(totalField).toBeInTheDocument();

    const currencyField = screen.getByTestId('header-currency-field');
    expect(currencyField).toBeInTheDocument();
  });
  test('Verifica se é exibido na tela o formulário WalletForm', async () => {
    renderWithRouterAndRedux(<App />, { initialEntries: ['/carteira'] });

    const inputValor = screen.getByTestId('value-input');
    expect(inputValor).toBeInTheDocument();

    const selectCurrency = screen.getByTestId('currency-input');
    expect(selectCurrency).toBeInTheDocument();

    const selectMethod = screen.getByTestId('method-input');
    expect(selectMethod).toBeInTheDocument();

    const selectTag = screen.getByTestId('tag-input');
    expect(selectTag).toBeInTheDocument();

    const quantidadeSelect = screen.getAllByRole('combobox');
    expect(quantidadeSelect.length).toBe(3);

    const inputDescricao = screen.getByTestId('description-input');
    expect(inputDescricao).toBeInTheDocument();

    const buttonAdicionarDespesa = screen.getByRole('button', { name: /Adicionar despesa/i });
    expect(buttonAdicionarDespesa).toBeInTheDocument();

    const mockInputValor = 1;

    userEvent.type(inputValor, mockInputValor);
    userEvent.click(buttonAdicionarDespesa);
    const valorConvertido = await screen.findByText('5.17');
    expect(valorConvertido).toBeInTheDocument();
  });
});
