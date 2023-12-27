import styled from 'styled-components'

export const CartDetailsContainer = styled.div`
  .linhaCartDetails {
    display: flex;
    justify-content: space-between;
  }

  .linhasCartDetails {
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
    padding-bottom: 1.5rem;
  }

  .linhaCartDetails p:first-child {
    font-size: 14px;
    line-height: 130%;
  }

  .linhaCartDetails p:last-child {
    font-size: 16px;
    line-height: 130%;
  }

  .linhaCartDetails:last-child p {
    font-size: 20px;
    font-weight: 700;
  }

  .confirmarPedido {
    display: flex;
    padding: 12px;
    justify-content: center;
    align-items: center;
    width: 100%;
    border-radius: 6px;
    background-color: ${(props) => props.theme.yellow};
    border: none;
    color: ${(props) => props.theme.white};
    font-weight: 700;
    text-transform: uppercase;
    cursor: pointer;
  }

  .nav {
    text-decoration: none;
  }
`
