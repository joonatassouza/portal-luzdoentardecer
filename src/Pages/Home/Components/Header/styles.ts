import styled, { keyframes } from 'styled-components';

import banner from '../../../../assets/banner001.jpg';

const fadeIn = keyframes`
  0% { opacity: 0; }
  40% { opacity: 0; }
  100% { opacity: 1; }
`;

interface ItemsProps {
  navOpened: boolean;
  selectedItemPosition: number;
  submenuTopPosition: number;
}

export const Wrapper = styled.header`
  height: 690px;
  width: 100%;
  background-image: url(${banner});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  filter: drop-shadow(0px 8px 8px #555);
`;

export const Container = styled.div`
  /* border-left-style: solid;
  border-left-width: 1px;
  border-left-color: #bababa;
  border-right-style: solid;
  border-right-width: 1px;
  border-right-color: #bababa; */

  height: 100%;
  width: 100%;
  margin: auto;
  padding: 0 15px;
  max-width: 1380px;

  display: flex;
  flex-direction: column;
`;

export const TopBar = styled.div`
  height: 72px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;

  img {
    width: 176.85px;
    height: 41.27px;
    cursor: pointer;
    transition: opacity 300ms ease;

    &:hover {
      opacity: 0.7;
    }
  }

  button {
    background: transparent;
    border: none;
    display: flex;
    align-items: center;
    color: #d3d3d3;
    font-size: 12px;
    transition: opacity 300ms ease;

    &:hover {
      opacity: 0.7;
    }
    strong {
      margin-left: 5px;
    }

    img {
      width: 25px;
      height: 25px;
      margin-left: 15px;
    }
  }
`;

export const Content = styled.div`
  flex: 1;
  display: flex;
`;

export const Menu = styled.div`
  height: 100%;
  display: flex;
  width: 340px;
  margin-right: 40px;
  justify-content: flex-end;
  align-items: center;
`;

export const Items = styled.ul<ItemsProps>`
  list-style: none;
  padding: 44px 0;
  position: relative;
  margin-right: ${props => (!props.navOpened ? '0px' : '65px')};

  display: flex;
  flex-direction: column;
  align-items: flex-end;

  &:after {
    content: '';
    background: #d3d3d3;
    width: 2px;
    height: ${props => (!props.navOpened ? '100%' : '0px')};
    top: ${props =>
      !props.navOpened ? 0 : `${props.selectedItemPosition + 40}px`};
    border-radius: 4px;
    position: absolute;
    right: -2px;

    transition: all 300ms ease;
  }

  li {
    display: flex;
    align-items: center;
    position: relative;

    padding-right: 45px;
    margin-right: ${props => (props.navOpened ? '150px' : '')};
    height: 55px;

    transition: all 300ms ease;
    ${props => (props.navOpened ? 'transition-delay: 300ms;' : '')}

    &:after {
      content: '';
      background: ${props => (props.navOpened ? '#d3d3d3' : '#c6215a')};
      width: 2px;
      height: 55px;
      border-radius: 4px;
      position: absolute;
      top: 0;
      right: -2px;
      opacity: 0;
      z-index: 10;

      transition: all 300ms ease;
    }

    &:hover {
      &:after {
        background: ${props => (props.navOpened ? '#d3d3d3' : '#c6215a')};
        width: 6px;
        right: -4px;
        opacity: ${props => (props.navOpened ? 0 : 1)};
      }

      button {
        font-size: ${props => (props.navOpened ? '19px' : '17px')};
        color: ${props => (props.navOpened ? '#d3d3d3' : '#c6215a')};
      }
    }

    button {
      font-size: 17px;

      color: #d3d3d3;
      text-decoration: none;
      background: none;
      border: none;
      transition: all 300ms ease;
    }

    img {
      position: absolute;
      width: 10px;
      right: 18px;
      -webkit-animation: ${fadeIn} 100ms; /* Safari, Chrome and Opera > 12.1 */
      -moz-animation: ${fadeIn} 100ms; /* Firefox < 16 */
      -ms-animation: ${fadeIn} 100ms; /* Internet Explorer */
      -o-animation: ${fadeIn} 100ms; /* Opera < 12.1 */
      animation: ${fadeIn} 100ms;
    }

    div {
      border-left: 2px solid #d3d3d3;
      padding-left: 18px;
      position: absolute;
      display: flex;
      align-items: flex-start;
      right: -272px;
      top: ${props => props.submenuTopPosition}px;
      max-height: 400px;
      overflow-x: hidden;
      overflow-y: hidden;
      scrollbar-color: rgba(255, 255, 255, 0.1);
      scrollbar-width: thin;
      -webkit-animation: ${fadeIn} 600ms; /* Safari, Chrome and Opera > 12.1 */
      -moz-animation: ${fadeIn} 600ms; /* Firefox < 16 */
      -ms-animation: ${fadeIn} 600ms; /* Internet Explorer */
      -o-animation: ${fadeIn} 600ms; /* Opera < 12.1 */
      animation: ${fadeIn} 600ms;

      ul {
        list-style: none;
        padding: 0;
        width: 250px;

        li {
          width: 100%;

          a {
            color: #d3d3d3;
            text-decoration: none;
            font-size: 17px;

            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;

            &:visited {
              color: #d3d3d3;
            }
          }
        }
      }
    }
  }
`;

export const SocialMidia = styled.ul`
  list-style: none;
  padding: 0;
  margin-left: 45px;

  li {
    margin: 15px 0;
    transition: opacity 300ms ease;

    &:hover {
      opacity: 0.5;
    }

    img {
      width: 20px;
      height: 20px;
    }
  }
`;

export const BannerInfo = styled.div`
  flex: 1;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const Title = styled.span`
  font-weight: bold;
  font-size: 77px;
  color: #f90000;
  margin: 0px;
`;

export const Subtitle = styled.span`
  font-size: 77px;
  margin-top: -20px;
`;

export const Description = styled.span`
  font-size: 22px;
  margin-top: -10px;
`;

export const BannerDestak = styled.div`
  height: 85px;
  display: flex;

  button {
    background: transparent;
    border: none;
    color: #d3d3d3;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    align-items: center;
    transition: opacity 300ms ease;

    &:hover {
      opacity: 0.7;
    }
  }
`;

export const BannerDestakIcon = styled.img`
  margin-right: 10px;
`;

export const BannerDestakTitle = styled.span`
  font-size: 30px;
  font-weight: bold;
`;

export const BannerDestakSubtitle = styled.strong`
  font-size: 22px;
  font-weight: normal;
  margin-top: -5px;
  margin-left: 10px;
`;
