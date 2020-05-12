import React from 'react';
import { Link } from 'react-router-dom';

import iconSvg from '../../../assets/icon.svg';
import menuSvg from '../../../assets/menu-b.svg';

import { Wrapper, Container, Menu, Items, TopBar } from './styles';

export default function Header() {
  return (
    <Wrapper>
      <Container>
        <TopBar>
          <Link to="/">
            <img src={iconSvg} alt="Luz do Entardecer" />
          </Link>
          <button type="button">
            Bem vindo <strong>Fulano de Tal</strong>
            <img src={menuSvg} alt="Luz do Entardecer" />
          </button>
        </TopBar>
        <Menu>
          <Items>
            <li>
              <a href="/">O PROFETA</a>
            </li>
            <li>
              <a href="/">PREGAÇÕES</a>
            </li>
            <li>
              <a href="/">PROGRAMAS</a>
            </li>
            <li>
              <a href="/">MÍDIAS</a>
            </li>
            <li>
              <a href="/">LEITURA</a>
            </li>
            <li>
              <a href="/">CONTATO</a>
            </li>
            <li>
              <a href="/">HTC</a>
            </li>
          </Items>
        </Menu>
      </Container>
    </Wrapper>
  );
}
