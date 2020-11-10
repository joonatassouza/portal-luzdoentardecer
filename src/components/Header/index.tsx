import React from 'react';
import { Link, useHistory } from 'react-router-dom';

import iconSvg from '../../assets/icon.svg';
import menuSvg from '../../assets/menu-b.svg';

import { Wrapper, Container, Menu, Items, TopBar } from './styles';

const Header: React.FC = () => {
  const history = useHistory();

  return (
    <Wrapper>
      <Container>
        <TopBar>
          <Link to="/">
            <img src={iconSvg} alt="Luz do Entardecer" />
          </Link>
          <button
            type="button"
            onClick={() => {
              history.push('/register');
            }}
          >
            Bem vindo <strong>Fulano de Tal</strong>
            <img src={menuSvg} alt="Luz do Entardecer" />
          </button>
        </TopBar>
        <Menu>
          <Items>
            <li>
              <Link to="/">O PROFETA</Link>
            </li>
            <li>
              <Link to="/video">PREGAÇÕES</Link>
            </li>
            <li>
              <Link to="/video">PROGRAMAS</Link>
            </li>
            <li>
              <Link to="/midias">MÍDIAS</Link>
            </li>
            <li>
              <Link to="/mensagens">LEITURA</Link>
            </li>
            <li>
              <Link to="/register">CONTATO</Link>
            </li>
            <li>
              <Link to="/video">HTC</Link>
            </li>
          </Items>
        </Menu>
      </Container>
    </Wrapper>
  );
};

export default Header;
