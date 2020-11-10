import React from 'react';

import { Link } from 'react-router-dom';
import youtubeSvg from '../../assets/youtube-b.svg';
import instagramSvg from '../../assets/instagram-b.svg';
import flickrSvg from '../../assets/flickr-b.svg';
import facebookSvg from '../../assets/facebook-b.svg';
import handSvg from '../../assets/hand.svg';
import pinSvg from '../../assets/pin.svg';
import logoFooterSvg from '../../assets/logo-footer.svg';

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

const Footer: React.FC = () => {
  return (
    <Wrapper>
      <Container>
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
};

export default Footer;
