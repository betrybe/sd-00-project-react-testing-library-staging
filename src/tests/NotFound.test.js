import React from 'react';
import App from '../App';
import { NotFound } from '../components';
import renderWithRouter from '../renderWithRouter';

describe('NotFound.js', () => {
  test('Verifica se a página contém um heading com o texto Page requested not found', () => {
    const { getByText, history } = renderWithRouter(<App />);

    history.push('/not-found');
    expect(getByText(/Page requested not found/i)).toBeInTheDocument();
  });

  test('verifica se a página contém o gif', () => {
    const { getByRole, history } = renderWithRouter(<NotFound />);

    history.push('/not-found');
    const path = 'Pikachu crying because the page requested was not found';
    const image = getByRole('img', { name: path });
    expect(image).toHaveAttribute('src', 'https://media.giphy.com/media/kNSeTs31XBZ3G/giphy.gif');
  });
});
