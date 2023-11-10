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
`
