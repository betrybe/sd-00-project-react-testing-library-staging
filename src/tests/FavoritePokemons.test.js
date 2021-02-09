import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { fireEvent, render } from '@testing-library/react';
import { FavoritePokemons } from '../components';
import App from '../App';
import pokemons from '../data';

describe('FavoritePokemons.js', () => {
  test('verifica se não tem nenhum pokémon favoritado', () => {
    const { getByText, container } = render(
      <MemoryRouter initialEntries={ ['/'] }>
        <App />
      </MemoryRouter>,
    );

    const favorite = getByText(/Favorite Pokémons/i);
    fireEvent.click(favorite);

    const title = container.querySelector('h2');
    expect(title).toHaveTextContent(/Favorite Pokémons/i);

    const noFavorite = getByText(/No favorite pokemon found/i);
    expect(noFavorite).toBeInTheDocument();
  });

  test('verifica se o pokémon foi favoritado', () => {
    // const { getByText, getByLabelText } = render(
    //   <MemoryRouter initialEntries={ ['/'] }>
    //     <App />
    //   </MemoryRouter>,
    // );

    // const moreDetails = getByText(/More details/i);
    // fireEvent.click(moreDetails);

    // const getLabel = getByLabelText(/Pokémon favoritado?/i);
    // expect(getLabel).toBeInTheDocument();

    // fireEvent.click(getLabel);
    // fireEvent.click(getByText(/Favorite Pokémons/i));

    // const pokemon = getByText(/Pikachu/i);
    // expect(pokemon).toBeInTheDocument();
    const { getByText } = render(
      <MemoryRouter>
        <FavoritePokemons pokemons={ pokemons } />
      </MemoryRouter>,
    );

    const favorite = getByText(/Pikachu/i);
    expect(favorite).toBeInTheDocument();
  });

  test('verifica se não exibe o pokémon não favoritado', () => {
    const pokemon = [{
      id: 25,
      name: 'Pikachu',
      type: 'Electric',
      averageWeight: {
        value: '6.0',
        measurementUnit: 'kg',
      },
      image: 'https://cdn.bulbagarden.net/upload/b/b2/Spr_5b_025_m.png',
      moreInfo: 'https://bulbapedia.bulbagarden.net/wiki/Pikachu_(Pok%C3%A9mon)',
      foundAt: [
        {
          location: 'Kanto Viridian Forest',
          map: 'https://cdn.bulbagarden.net/upload/0/08/Kanto_Route_2_Map.png',
        },
        {
          location: 'Kanto Power Plant',
          map: 'https://cdn.bulbagarden.net/upload/b/bd/Kanto_Celadon_City_Map.png',
        },
      ],

    }];
    const { queryByText } = render(
      <MemoryRouter>
        <FavoritePokemons pokemons={ pokemon } />
      </MemoryRouter>,
    );

    // queryBy evita que cuspa o erro, diferente de getBy

    const noFavorite = queryByText(/Charmander/i);
    expect(noFavorite).not.toBeInTheDocument();
  });
});
