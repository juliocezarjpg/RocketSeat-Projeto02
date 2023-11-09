import styled from 'styled-components'

import bannerBackground from '../../assets/banner-background.png'

export const BannerContainer = styled.div`
  display: flex;
  padding-bottom: 6.75rem;

  .backgroundImage {
    background-image: url(${bannerBackground});
    background-size: cover;
    position: absolute;
    left: 0;
    right: 0;
    top: 6.5rem;
    height: 34rem;
    z-index: -1; /* Coloca a imagem de fundo atrás do conteúdo */
  }

  img {
    width: 29.75rem;
    height: 22.5rem;
  }

  h1 {
    width: 100%;
    height: auto;
    font-family: 'Baloo 2';
    font-size: 3rem;
    font-weight: 800;
    line-height: 130%;
    align-self: stretch;
    font-style: normal;
    color: ${(props) => props.theme.baseTitle};
    margin-bottom: 1rem;
  }

  h2 {
    font-size: 20px;
    font-style: normal;
    font-weight: 400;
    line-height: 130%;
    color: ${(props) => props.theme.baseSubtitle};
    margin-bottom: 4.125rem;
  }

  .items {
    display: flex;
    gap: 2.5rem;
  }

  .items div > div:first-child {
    padding-bottom: 1.25rem;
  }

  .item {
    display: flex;
    align-items: center;
    gap: 0.75rem;
  }

  .cart,
  .package,
  .timer,
  .coffee {
    padding: 0.5rem;
    border-radius: 1000px;
    width: 2rem;
    height: 2rem;
    color: ${(props) => props.theme.background};
  }

  .cart {
    background-color: ${(props) => props.theme.yellowDark};
  }

  .package {
    background-color: ${(props) => props.theme.baseText};
  }

  .timer {
    background-color: ${(props) => props.theme.purple};
  }

  .coffee {
    background-color: ${(props) => props.theme.yellow};
  }
`
