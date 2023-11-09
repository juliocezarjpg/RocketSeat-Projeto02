import styled from 'styled-components'

export const CafesContainer = styled.div`
  h1 {
    width: 100%;
    height: auto;
    font-family: 'Baloo 2';
    font-size: 2rem;
    font-weight: 800;
    line-height: 130%;
    align-self: stretch;
    font-style: normal;
    color: ${(props) => props.theme.baseTitle};
    padding-bottom: 3.375rem;
  }

  .cafes {
    padding-bottom: 7.3125rem;
    display: flex;
    flex-wrap: wrap;
  }
`
