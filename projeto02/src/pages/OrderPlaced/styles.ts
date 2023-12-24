import styled from 'styled-components'

export const OrderPlacedContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
  padding-top: 5rem;
  padding-bottom: 28rem;

  h1 {
    color: ${(props) => props.theme.yellowDark};
    font-family: 'Baloo 2';
    font-weight: 800;
    line-height: 130%; /* 41.6px */
  }

  h2 {
    color: ${(props) => props.theme.baseTitle};
    font-size: 20px;
    font-weight: 400;
    line-height: 130%; /* 26px */
  }
`

export const OrderPlacedDetails = styled.div`
  display: flex;
  flex-direction: row;
  gap: 6.375rem;
  padding-top: 2.5rem;

  img {
    width: 492px;
    height: 293px;
  }
`

export const OrderDetails = styled.div`
  border-radius: 6px 36px;
  border: 1px solid ${(props) => props.theme.yellowDark};
  padding: 2.5rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;

  span {
    font-weight: 800;
  }
`

export const DetailsOrderPlaced = styled.div`
  display: flex;
  gap: 0.75rem;
`

const INFOS_COLORS = {
  purpleDark: 'purpleDark',
  yellow: 'yellow',
  yellowDark: 'yellowDark',
} as const

interface InfosProps {
  infosColor: keyof typeof INFOS_COLORS
}

export const LogoDdetailsOrderPlaced = styled.div<InfosProps>`
  background-color: ${(props) => props.theme[INFOS_COLORS[props.infosColor]]};
  color: ${(props) => props.theme.white};
  padding: 8px;
  justify-content: center;
  align-items: center;
  border-radius: 1000px;
  width: 2rem;
  height: 2rem;
`
