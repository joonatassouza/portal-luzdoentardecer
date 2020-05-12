import React from 'react';

import printSvg from '../../../../../assets/print-b.svg';
import { Container, Title } from './styles';

function Navbar({ title, url }) {
  function print() {
    window.open(url);
  }

  return (
    <Container>
      <Title>{title}</Title>
      <button type="button" onClick={print}>
        <img src={printSvg} alt="imprimir" />
      </button>
    </Container>
  );
}

export default Navbar;
