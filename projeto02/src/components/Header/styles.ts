import styled from 'styled-components'

interface InfosProps {
  quantidade: number
}

export const HeaderContainer = styled.header<InfosProps>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 2rem 0;

  nav {
    display: flex;
    gap: 0.75rem;
  }

  .location {
    background-color: ${(props) => props.theme.purpleLight};
    color: ${(props) => props.theme.purpleDark};
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.25rem;
    height: 2.375rem;
    border-radius: 8px;
    padding: 0.5rem;
    font-size: 14px;
  }

  .checkout {
    background-color: ${(props) => props.theme.yellowLight};
    color: ${(props) => props.theme.yellowDark};
    height: 2.375rem;
    padding: 0.5rem;
    border-radius: 8px;
    position: relative;
  }

  span {
    background-color: ${(props) => props.theme.yellowDark};
    border-radius: 1000px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: ${(props) => props.theme.white};
    font-size: 12px;
    font-style: normal;
    font-weight: 700;
    position: absolute;
    right: -8.345px;
    top: -8px;
    width: 20px;
    height: 20px;
    opacity: ${(props) => (props.quantidade === 0 ? 0 : 1)};
  }
`
