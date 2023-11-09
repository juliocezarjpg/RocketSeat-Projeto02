import styled from 'styled-components'

export const HeaderContainer = styled.header`
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
  }
`
