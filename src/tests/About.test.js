import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { fireEvent, render } from '@testing-library/react';
import { About } from '../components';
import App from '../App';

describe('About.js', () => {
  // test('Verifica se a página contém informações da Pokédex', () => {
  //   const { getByText, getByRole } = render(
  //     <MemoryRouter initialEntries={ ['/about'] }>
  //       <About />
  //     </MemoryRouter>,
  //   );

  //   // const title = getByText(/About Pokédex/i);
  //   const heading = getByRole('heading', { level: 2 });
  //   // expect(title).toBeInTheDocument();
  //   expect(heading).toHaveTextContent(/About Pokédex/i);
  //  })

  test('Verifica se a página contém informações da Pokédex', () => {
    const { getByText, getByRole } = render(
      <MemoryRouter initialEntries={ ['/'] }>
        <App />
      </MemoryRouter>,
    );

    const aboutPage = getByText(/About/i);
    fireEvent.click(aboutPage);

    // const header = container.querySelector('h2');
    // expect(header).toHaveTextContent('About Pokédex');
    const header = getByRole('heading', { level: 2 });
    expect(header).toHaveTextContent('About Pokédex');
  });

  test('Verifica se a página contém dois parágrafos sobre a pokedéx', () => {
    const { container } = render(
      <MemoryRouter initialEntries={ ['/about'] }>
        <About />
      </MemoryRouter>,
    );
    const paragraph = container.querySelectorAll('p');
    expect(paragraph).toHaveLength(2);
  });

  test('Verifica se possui a imagem de uma pokedéx', () => {
    const { getByRole } = render(
      <MemoryRouter initialEntries={ ['/about'] }>
        <About />
      </MemoryRouter>,
    );
    const image = getByRole('img');
    expect(image).toHaveAttribute('src', 'https://cdn.bulbagarden.net/upload/thumb/8/86/Gen_I_Pok%C3%A9dex.png/800px-Gen_I_Pok%C3%A9dex.png');
  });
});
