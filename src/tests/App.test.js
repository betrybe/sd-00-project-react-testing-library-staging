import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { render } from '@testing-library/react';
import App from '../App';

describe('App.js', () => {
  test('shows the Pokédex when the route is `/`', () => {
    const { getByText } = render(
      <MemoryRouter initialEntries={ ['/'] }>
        <App />
      </MemoryRouter>,
    );
    const heading = getByText(/Pokédex/i);
    expect(heading).toBeInTheDocument();
  });

  test('verifica se a rota da navbar é "/"', () => {
    const { getByText } = render(
      <MemoryRouter initialEntries={ ['/'] }>
        <App />
      </MemoryRouter>,
    );

    const home = getByText(/Home/i);
    expect(home).toHaveAttribute('href', '/');

    const about = getByText(/About/i);
    expect(about).toHaveAttribute('href', '/about');

    const favorite = getByText(/Favorite Pokémons/i);
    expect(favorite).toHaveAttribute('href', '/favorites');
  });
});
