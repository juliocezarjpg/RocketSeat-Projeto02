import styled from 'styled-components'

export const PaymentDataContainer = styled.div`
  .titulos {
    display: flex;
    gap: 0.5rem;
  }

  .titulos .icone {
    color: ${(props) => props.theme.purple};
  }

  .titulos h3 {
    font-size: 16px;
    font-weight: 400;
    color: ${(props) => props.theme.subTitle};
  }

  .titulos p {
    font-size: 14px;
    font-weight: 400;
    color: ${(props) => props.theme.baseText};
  }

  .paymentData {
    display: flex;
    flex-direction: column;
    gap: 2rem;
  }

  .paymentOptions {
    display: flex;
    gap: 0.75rem;
  }

  button {
    width: 100%;
    display: flex;
    gap: 0.75rem;
    align-items: center;
    font-size: 12px;
    font-style: normal;
    line-height: 160%;
    text-transform: uppercase;
    padding: 1rem;
    border: none;
  }

  button:focus {
    background-color: ${(props) => props.theme.purpleLight};
    border-radius: 6px;
    border: 1px solid ${(props) => props.theme.purple};
    box-shadow: none;
  }

  button span {
    padding-left: 1rem;
    color: ${(props) => props.theme.purple};
    display: flex;
    align-items: center;
  }
`
