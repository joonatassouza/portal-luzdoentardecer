import React, { useState } from 'react';

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

export default function Header() {
  const [navOpened, setNavOpened] = useState(false);
  const [selectedItemIndex, setSelectedItemIndex] = useState(-1);
  const [selectedItemPosition, setSelectedItemPosition] = useState(0);
  const [submenuTopPosition, setSubmenuTopPosition] = useState(null);

  function setSubMenuPosition(index, parentOffsetTop, delay) {
    const menuHeight = 400;
    const itemHeight = 55;

    setTimeout(
      () => {
        setSelectedItemIndex(
          index > 4 || index === selectedItemIndex ? -1 : index
        );

        setTimeout(() => {
          if ((index === selectedItemIndex ? -1 : index) !== -1) {
            const submenu = document.querySelector('.submenu-' + index);

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
      navOpened || delay ? 1 : 500
    );
  }

  function handleMenuClick(e, index) {
    setNavOpened(index < 5 && index !== selectedItemIndex);

    const childOffsetTop = e.target.offsetTop;
    const parentOffsetTop = e.target.parentElement.offsetTop;

    setSelectedItemPosition(parentOffsetTop - childOffsetTop);
    setSubMenuPosition(index, parentOffsetTop, true);
  }

  function handleHoverMenu(event, index) {
    if (index < 5 && navOpened && index !== selectedItemIndex) {
      const childOffsetTop = event.target.offsetTop;

      setSubMenuPosition(index, childOffsetTop);
    }
  }

  return (
    <Wrapper>
      <Container>
        <TopBar>
          <img src={logo} alt="Luz do Entardecer" />
          <button type="button">
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
              <li onMouseEnter={(e) => handleHoverMenu(e, 0)}>
                <button button="button" onClick={(e) => handleMenuClick(e, 0)}>
                  O PROFETA
                </button>
                {selectedItemIndex === 0 && (
                  <>
                    <img src={chevronRightSvg} alt="go" />
                    <div className="submenu-0">
                      <ul>
                        <li>
                          <a href="/">QUEM FOI WILLIAM BRANHAM</a>
                        </li>
                        <li>
                          <a href="/">VÍDEO ESPECIAL</a>
                        </li>
                        <li>
                          <a href="/">FOTOS</a>
                        </li>
                        <li>
                          <a href="/">O PROFETA DO SÉCULO XX</a>
                        </li>
                      </ul>
                    </div>
                  </>
                )}
              </li>
              <li onMouseEnter={(e) => handleHoverMenu(e, 1)}>
                <button button="button" onClick={(e) => handleMenuClick(e, 1)}>
                  PREGAÇÕES
                </button>
                {selectedItemIndex === 1 && (
                  <>
                    <img src={chevronRightSvg} alt="go" />
                    <div className="submenu-1">
                      <ul>
                        <li>
                          <a href="/">PASTOR RAIMUNDO MAIA</a>
                        </li>
                        <li>
                          <a href="/">PASTOR PAULINO SALVADOR</a>
                        </li>
                        <li>
                          <a href="/">PASTOR ELISMAR MENDES</a>
                        </li>
                        <li>
                          <a href="/">PASTOR SILVIO MENDES</a>
                        </li>
                        <li>
                          <a href="/">PASTOR JOSUÉ MENDES</a>
                        </li>
                        <li>
                          <a href="/">PASTOR DORIVAL FIRMINO</a>
                        </li>
                        <li>
                          <a href="/">IRMÃO NEVILLE MAIA</a>
                        </li>
                        <li>
                          <a href="/">IRMÃO THIAGO 1</a>
                        </li>
                        <li>
                          <a href="/">IRMÃO THIAGO 2</a>
                        </li>
                        <li>
                          <a href="/">IRMÃO EZEQUIEL</a>
                        </li>
                        <li>
                          <a href="/">IRMÃO UENES</a>
                        </li>
                      </ul>
                    </div>
                  </>
                )}
              </li>
              <li onMouseEnter={(e) => handleHoverMenu(e, 2)}>
                <button button="button" onClick={(e) => handleMenuClick(e, 2)}>
                  PROGRAMAS
                </button>
                {selectedItemIndex === 2 && (
                  <>
                    <img src={chevronRightSvg} alt="go" />
                    <div className="submenu-2">
                      <ul>
                        <li>
                          <a href="/">A HORA TEM CHEGADO</a>
                        </li>
                        <li>
                          <a href="/">ESCLARECENDO CONCEITOS</a>
                        </li>
                        <li>
                          <a href="/">LIVES</a>
                        </li>
                      </ul>
                    </div>
                  </>
                )}
              </li>
              <li onMouseEnter={(e) => handleHoverMenu(e, 3)}>
                <button button="button" onClick={(e) => handleMenuClick(e, 3)}>
                  MÍDIAS
                </button>
                {selectedItemIndex === 3 && (
                  <>
                    <img src={chevronRightSvg} alt="go" />
                    <div className="submenu-3">
                      <ul>
                        <li>
                          <a href="/">HINOS</a>
                        </li>
                        <li>
                          <a href="/">MENSAGENS</a>
                        </li>
                        <li>
                          <a href="/">PODCASTS</a>
                        </li>
                        <li>
                          <a href="/">FOTOS</a>
                        </li>
                      </ul>
                    </div>
                  </>
                )}
              </li>
              <li onMouseEnter={(e) => handleHoverMenu(e, 4)}>
                <button button="button" onClick={(e) => handleMenuClick(e, 4)}>
                  LEITURA
                </button>
                {selectedItemIndex === 4 && (
                  <>
                    <img src={chevronRightSvg} alt="go" />
                    <div className="submenu-4">
                      <ul>
                        <li>
                          <a href="/">ALTAR DA FAMÍLIA</a>
                        </li>
                        <li>
                          <a href="/">O MINISTÉRIO QUÍNTUPLO</a>
                        </li>
                        <li>
                          <a href="/">ADQUIRINDO CONHECIMENTOS</a>
                        </li>
                        <li>
                          <a href="/">GERAÇÕES</a>
                        </li>
                        <li>
                          <a href="/">OS ATOS DO PROFETA</a>
                        </li>
                        <li>
                          <a href="/">TESTEMUNHOS</a>
                        </li>
                        <li>
                          <a href="/">PENSAMENTOS DE CURA</a>
                        </li>
                        <li>
                          <a href="/">O PRÍNCIPE DA CASA DE DAVI</a>
                        </li>
                        <li>
                          <a href="/">SÉRIE SOBRENATURAL</a>
                        </li>
                        <li>
                          <a href="/">MENSAGENS TRADUZIDAS</a>
                        </li>
                      </ul>
                    </div>
                  </>
                )}
              </li>
              <li onMouseEnter={(e) => handleHoverMenu(e, 5)}>
                <button button="button" onClick={(e) => handleMenuClick(e, 5)}>
                  CONTATO
                </button>
              </li>
              <li onMouseEnter={(e) => handleHoverMenu(e, 6)}>
                <button button="button" onClick={(e) => handleMenuClick(e, 6)}>
                  HTC
                </button>
              </li>
            </Items>
            {!navOpened && (
              <SocialMidia>
                <li>
                  <a href="/">
                    <img src={youtubeSvg} alt="youtube" />
                  </a>
                </li>
                <li>
                  <a href="/">
                    <img src={instagramSvg} alt="instagram" />
                  </a>
                </li>
                <li>
                  <a href="/">
                    <img src={flickrSvg} alt="flickr" />
                  </a>
                </li>
                <li>
                  <a href="/">
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
}
