import React from 'react';
import Header from './Header';
import Home from './Home';
import Produtos from './Produtos';

export default function App() {
  const { pathname } = window.location;
  let Pagina;

  if (pathname === '/produtos') {
    Pagina = Produtos;
  } else {
    Pagina = Home;
  }

  return (
    <section>
      <Header />
      <Pagina />
    </section>
  );
}
