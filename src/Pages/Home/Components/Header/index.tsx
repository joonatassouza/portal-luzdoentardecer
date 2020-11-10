import React, { useState } from 'react';

import { Link, useHistory } from 'react-router-dom';
import logo from '../../../../assets/logo.svg';
import menu from '../../../../assets/menu.svg';
import youtubeSvg from '../../../../assets/youtube.svg';
import instagramSvg from '../../../../assets/instagram.svg';
import flickrSvg from '../../../../assets/flickr.svg';
import facebookSvg from '../../../../assets/facebook.svg';
import aovivoPng from '../../../../assets/aovivo.png';
import chevronRightSvg from '../../../../assets/chevron-right.svg';

import {
  Wrapper,
  Container,
  TopBar,
  Content,
  BannerInfo,
  Menu,
  Items,
  SocialMidia,
  Title,
  Subtitle,
  Description,
  BannerDestak,
  BannerDestakIcon,
  BannerDestakTitle,
  BannerDestakSubtitle,
} from './styles';

const Header: React.FC = () => {
  const history = useHistory();

  const [navOpened, setNavOpened] = useState(false);
  const [selectedItemIndex, setSelectedItemIndex] = useState(-1);
  const [selectedItemPosition, setSelectedItemPosition] = useState(0);
  const [submenuTopPosition, setSubmenuTopPosition] = useState(0);

  function setSubMenuPosition(
    index: number,
    parentOffsetTop: number,
    delay?: boolean,
  ) {
    const menuHeight = 400;
    const itemHeight = 55;

    setTimeout(
      () => {
        setSelectedItemIndex(
          index > 4 || index === selectedItemIndex ? -1 : index,
        );

        setTimeout(() => {
          if ((index === selectedItemIndex ? -1 : index) !== -1) {
            const submenu = document.querySelector(
              `.submenu-${index}`,
            ) as HTMLInputElement;

            if (!submenu) return;

            const submenuHeight = submenu.offsetHeight;
            const haveSpaceTop = parentOffsetTop > submenuHeight / 2;
            const haveSpaceBottom =
              menuHeight - itemHeight - parentOffsetTop > submenuHeight / 2;

            if (haveSpaceTop && haveSpaceBottom) {
              setSubmenuTopPosition(submenuHeight / -2 + 26);
            } else {
              setSubmenuTopPosition(-parentOffsetTop + 44);
            }
          }
        }, 1);
      },
      navOpened || delay ? 1 : 500,
    );
  }

  function handleMenuClick(
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    index: number,
  ) {
    setNavOpened(index < 5 && index !== selectedItemIndex);

    const childOffsetTop = (e.target as HTMLElement).offsetTop;
    const parentOffsetTop = (e.target as HTMLElement).parentElement?.offsetTop;

    setSelectedItemPosition(parentOffsetTop || 0 - childOffsetTop);
    setSubMenuPosition(index, parentOffsetTop || 0, true);
  }

  function handleHoverMenu(
    event: React.MouseEvent<HTMLLIElement, MouseEvent>,
    index: number,
  ) {
    if (index < 5 && navOpened && index !== selectedItemIndex) {
      const childOffsetTop = (event.target as HTMLElement).offsetTop;

      setSubMenuPosition(index, childOffsetTop);
    }
  }

  return (
    <Wrapper>
      <Container>
        <TopBar>
          <img src={logo} alt="Luz do Entardecer" />
          <button type="button" onClick={() => history.push('/register')}>
            Bem vindo <strong>Fulano de Tal</strong>
            <img src={menu} alt="Luz do Entardecer" />
          </button>
        </TopBar>
        <Content>
          <BannerInfo>
            <Title>AO VIVO</Title>
            <Subtitle>CEIA EM TOLEDO</Subtitle>
            <Description>
              Assista, curta e compartilhe, se inscreva no canal!
            </Description>
          </BannerInfo>
          <Menu>
            <Items
              navOpened={navOpened}
              selectedItemPosition={selectedItemPosition}
              submenuTopPosition={submenuTopPosition}
            >
              <li onMouseEnter={e => handleHoverMenu(e, 0)}>
                <button type="button" onClick={e => handleMenuClick(e, 0)}>
                  O PROFETA
                </button>
                {selectedItemIndex === 0 && (
                  <>
                    <img src={chevronRightSvg} alt="go" />
                    <div className="submenu-0">
                      <ul>
                        <li>
                          <Link to="/">QUEM FOI WILLIAM BRANHAM</Link>
                        </li>
                        <li>
                          <Link to="/">VÍDEO ESPECIAL</Link>
                        </li>
                        <li>
                          <Link to="/">FOTOS</Link>
                        </li>
                        <li>
                          <Link to="/">O PROFETA DO SÉCULO XX</Link>
                        </li>
                      </ul>
                    </div>
                  </>
                )}
              </li>
              <li onMouseEnter={e => handleHoverMenu(e, 1)}>
                <button type="button" onClick={e => handleMenuClick(e, 1)}>
                  PREGAÇÕES
                </button>
                {selectedItemIndex === 1 && (
                  <>
                    <img src={chevronRightSvg} alt="go" />
                    <div className="submenu-1">
                      <ul>
                        <li>
                          <Link to="video">PASTOR RAIMUNDO MAIA</Link>
                        </li>
                        <li>
                          <Link to="video">PASTOR PAULINO SALVADOR</Link>
                        </li>
                        <li>
                          <Link to="video">PASTOR ELISMAR MENDES</Link>
                        </li>
                        <li>
                          <Link to="video">PASTOR SILVIO MENDES</Link>
                        </li>
                        <li>
                          <Link to="video">PASTOR JOSUÉ MENDES</Link>
                        </li>
                        <li>
                          <Link to="video">PASTOR DORIVAL FIRMINO</Link>
                        </li>
                        <li>
                          <Link to="video">IRMÃO NEVILLE MAIA</Link>
                        </li>
                        <li>
                          <Link to="video">IRMÃO THIAGO 1</Link>
                        </li>
                        <li>
                          <Link to="video">IRMÃO THIAGO 2</Link>
                        </li>
                        <li>
                          <Link to="video">IRMÃO EZEQUIEL</Link>
                        </li>
                        <li>
                          <Link to="video">IRMÃO UENES</Link>
                        </li>
                      </ul>
                    </div>
                  </>
                )}
              </li>
              <li onMouseEnter={e => handleHoverMenu(e, 2)}>
                <button type="button" onClick={e => handleMenuClick(e, 2)}>
                  PROGRAMAS
                </button>
                {selectedItemIndex === 2 && (
                  <>
                    <img src={chevronRightSvg} alt="go" />
                    <div className="submenu-2">
                      <ul>
                        <li>
                          <Link to="/video">A HORA TEM CHEGADO</Link>
                        </li>
                        <li>
                          <Link to="/video">ESCLARECENDO CONCEITOS</Link>
                        </li>
                        <li>
                          <Link to="/video">LIVES</Link>
                        </li>
                      </ul>
                    </div>
                  </>
                )}
              </li>
              <li onMouseEnter={e => handleHoverMenu(e, 3)}>
                <button type="button" onClick={e => handleMenuClick(e, 3)}>
                  MÍDIAS
                </button>
                {selectedItemIndex === 3 && (
                  <>
                    <img src={chevronRightSvg} alt="go" />
                    <div className="submenu-3">
                      <ul>
                        <li>
                          <Link to="/midias">HINOS</Link>
                        </li>
                        <li>
                          <Link to="/mensagens">MENSAGENS</Link>
                        </li>
                        <li>
                          <Link to="/midias">PODCASTS</Link>
                        </li>
                        <li>
                          <Link to="/midias">FOTOS</Link>
                        </li>
                      </ul>
                    </div>
                  </>
                )}
              </li>
              <li onMouseEnter={e => handleHoverMenu(e, 4)}>
                <button type="button" onClick={e => handleMenuClick(e, 4)}>
                  LEITURA
                </button>
                {selectedItemIndex === 4 && (
                  <>
                    <img src={chevronRightSvg} alt="go" />
                    <div className="submenu-4">
                      <ul>
                        <li>
                          <Link to="/post">ALTAR DA FAMÍLIA</Link>
                        </li>
                        <li>
                          <Link to="/post">O MINISTÉRIO QUÍNTUPLO</Link>
                        </li>
                        <li>
                          <Link to="/post">ADQUIRINDO CONHECIMENTOS</Link>
                        </li>
                        <li>
                          <Link to="/post">GERAÇÕES</Link>
                        </li>
                        <li>
                          <Link to="/post">OS ATOS DO PROFETA</Link>
                        </li>
                        <li>
                          <Link to="/post">TESTEMUNHOS</Link>
                        </li>
                        <li>
                          <Link to="/post">PENSAMENTOS DE CURA</Link>
                        </li>
                        <li>
                          <Link to="/post">O PRÍNCIPE DA CASA DE DAVI</Link>
                        </li>
                        <li>
                          <Link to="/post">SÉRIE SOBRENATURAL</Link>
                        </li>
                        <li>
                          <Link to="/post">MENSAGENS TRADUZIDAS</Link>
                        </li>
                      </ul>
                    </div>
                  </>
                )}
              </li>
              <li onMouseEnter={e => handleHoverMenu(e, 5)}>
                <button type="button" onClick={e => handleMenuClick(e, 5)}>
                  CONTATO
                </button>
              </li>
              <li onMouseEnter={e => handleHoverMenu(e, 6)}>
                <button
                  type="button"
                  onClick={e => {
                    handleMenuClick(e, 6);
                    history.push('/video');
                  }}
                >
                  HTC
                </button>
              </li>
            </Items>
            {!navOpened && (
              <SocialMidia>
                <li>
                  <a
                    href="https://www.youtube.com/channel/UCLdZNjdA7z32kaG5hulZyEw"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img src={youtubeSvg} alt="youtube" />
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.instagram.com/minluzdoentardecer"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img src={instagramSvg} alt="instagram" />
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.flickr.com/people/125071322@N02/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img src={flickrSvg} alt="flickr" />
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.facebook.com/LuzDoEntardecer/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img src={facebookSvg} alt="facebook" />
                  </a>
                </li>
              </SocialMidia>
            )}
          </Menu>
        </Content>
        <BannerDestak>
          <button type="button">
            <BannerDestakTitle>
              <BannerDestakIcon src={aovivoPng} />
              AO VIVO
            </BannerDestakTitle>
            <BannerDestakSubtitle>Toledo-PR</BannerDestakSubtitle>
          </button>
        </BannerDestak>
      </Container>
    </Wrapper>
  );
};

export default Header;
