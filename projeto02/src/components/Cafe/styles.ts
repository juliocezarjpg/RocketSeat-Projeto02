import styled from 'styled-components'

export const CafeContainer = styled.div`
  .productDetails {
    width: 256px;
    height: 310px;
    border-radius: 6px 36px;
    background-color: ${(props) => props.theme.baseCard};
    margin-right: 2rem;
    margin-bottom: 2.5rem;
  }

  img {
    margin-top: -1.25rem;
    width: 120px;
    height: 120px;
  }

  div {
    display: flex;
    align-items: center;
    flex-direction: column;
  }

  .tags {
    padding-top: 1.08rem;
  }

  .tags p {
    font-size: 10px;
    font-weight: 700;
    text-transform: uppercase;
    color: ${(props) => props.theme.yellowDark};
    background-color: ${(props) => props.theme.yellowLight};
    border-radius: 8px;
    padding: 0.25rem 0.5rem;
  }

  h2 {
    padding-top: 0.75rem;
    color: ${(props) => props.theme.baseSubtitle};
    font-family: 'Baloo 2';
    font-size: 20px;
    font-style: normal;
    font-weight: 700;
  }

  h3 {
    padding: 0.5rem 1.25rem 0rem;
    color: ${(props) => props.theme.baseLabel};
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 130%;
    text-align: center;
  }

  .productToCart {
    padding: 1.5625rem 1.5rem;
    display: flex;
    align-items: center;
    width: 100%;
    justify-content: space-between;
  }

  .actions {
    display: flex;
  }

  section p {
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
  }

  section p span {
    font-family: 'Baloo 2';
    font-size: 24px;
    font-style: normal;
    font-weight: 800;
  }

  .productQuantity {
    display: flex;
    border-radius: 6px;
    background-color: ${(props) => props.theme.baseButton};
    height: 2.375rem;
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

  .signals {
    color: ${(props) => props.theme.purple};
    background-color: ${(props) => props.theme.baseButton};
    display: flex;
    justify-content: center;
    border: none;
  }

  .addToCart {
    display: flex;
    padding: 8px;
    justify-content: center;
    align-items: center;
    border-radius: 6px;
    background-color: ${(props) => props.theme.purpleDark};
    border: none;
    color: ${(props) => props.theme.baseCard};
    margin-left: 0.5rem;
  }
`
