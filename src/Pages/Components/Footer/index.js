import React from 'react';

import youtubeSvg from '../../../assets/youtube-b.svg';
import instagramSvg from '../../../assets/instagram-b.svg';
import flickrSvg from '../../../assets/flickr-b.svg';
import facebookSvg from '../../../assets/facebook-b.svg';
import handSvg from '../../../assets/hand.svg';
import pinSvg from '../../../assets/pin.svg';
import logoFooterSvg from '../../../assets/logo-footer.svg';

import {
  Wrapper,
  Container,
  Menu,
  Items,
  SocialMidia,
  FooterInfo,
  Card,
  LogoFooter,
} from './styles';

export default function Footer() {
  return (
    <Wrapper>
      <Container>
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
          <SocialMidia>
            <li>
              <a href="/">
                <img src={instagramSvg} alt="instagram" />
              </a>
            </li>
            <li>
              <a href="/">
                <img src={facebookSvg} alt="facebook" />
              </a>
            </li>
            <li>
              <a href="/">
                <img src={flickrSvg} alt="flickr" />
              </a>
            </li>
            <li>
              <a href="/">
                <img src={youtubeSvg} alt="youtube" />
              </a>
            </li>
          </SocialMidia>
        </Menu>
        <FooterInfo>
          <Card>
            <img src={handSvg} alt="go" />
            <div>
              <strong>Assine nossa newsletter</strong>
              <span>Fique por dentro de cada conteúdo</span>
              <span>Curta e compartilhe</span>
            </div>
          </Card>
          <Card>
            <div>
              <strong>Aguardamos sua visita</strong>
              <span>Clique e veja nossas localizações</span>
              <span>mais próximas de você.</span>
            </div>
            <img src={pinSvg} alt="go" />
          </Card>
        </FooterInfo>
        <LogoFooter>
          <img src={logoFooterSvg} alt="Ministério Luz do Entardecer" />
          <p>
            TODOS OS DIREITOS RESERVADOS - MINISTÉRIO LUZ DO ENTARDECER © 2020
          </p>
        </LogoFooter>
      </Container>
    </Wrapper>
  );
}
