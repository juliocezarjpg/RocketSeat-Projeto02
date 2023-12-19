import styled from 'styled-components'

export const CheckoutContainer = styled.div`
  .wrapper {
    display: flex;
    gap: 2rem;
    padding-bottom: 15rem;
  }

  .pedidoContainer {
    width: 100%;
  }

  h2 {
    font-family: 'Baloo 2';
    font-size: 18px;
    font-style: normal;
    font-weight: 700;
    line-height: 130%; /* 23.4px */
    color: ${(props) => props.theme.baseTitle};
    padding-bottom: 1.25rem;
  }

  .orderData {
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
  }

  .personalDataComponent,
  .paymentDataComponent {
    background-color: ${(props) => props.theme.baseCard};
    border-radius: 6px;
    padding: 2.5rem;
  }

  .coffeData {
    background-color: ${(props) => props.theme.baseCard};
    padding: 2.5rem;
    border-radius: 6px 44px;
    width: 28rem;
  }
`
