import styled from 'styled-components'

export const ItemCartDetailsContainer = styled.div`
  .boxItem {
    display: flex;
    justify-content: space-between;
  }

  .detailsItem {
    display: flex;
    gap: 1.25rem;
  }

  img {
    width: 4rem;
    height: 4rem;
  }

  .TituloItemCartDetails {
    font-family: 'Roboto';
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 130%;
  }

  .quantityControl {
    display: flex;
    gap: 0.5rem;
  }

  .priceItemCartDetails {
    font-weight: 700;
    color: ${(props) => props.theme.baseText};
  }

  .productQuantity {
    display: flex;
    border-radius: 6px;
    background-color: ${(props) => props.theme.baseButton};
    height: 2rem;
    padding: 0.5rem;
    justify-content: center;
    align-items: center;
  }

  .quantity {
    color: ${(props) => props.theme.baseTitle};
    display: flex;
    justify-content: center;
    width: 1.25rem;
    padding: 0 0.25rem;
  }

  .signals,
  .remove {
    color: ${(props) => props.theme.purple};
    background-color: ${(props) => props.theme.baseButton};
    display: flex;
    justify-content: center;
    border: none;
  }

  .itemRemove {
    display: flex;
    align-items: center;
    background-color: ${(props) => props.theme.baseButton};
    gap: 0.25rem;
    padding: 0.5rem;
    border-radius: 6px;
    font-family: 'Roboto';
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: 160%; /* 19.2px */
    text-transform: uppercase;
  }

  .divider {
  }

  .stroke {
    margin-top: 1.5rem;
    padding-top: 1.5rem;
    border-top: 1px solid ${(props) => props.theme.baseButton}; /* Cor e estilo da linha */
  }
`
