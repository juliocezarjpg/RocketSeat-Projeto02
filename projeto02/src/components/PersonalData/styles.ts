import styled from 'styled-components'

export const PersonalDataContainer = styled.div`
  .titulos {
    display: flex;
    gap: 0.5rem;
  }

  .titulos .icone {
    color: ${(props) => props.theme.yellowDark};
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

  .personalData {
    display: flex;
    flex-direction: column;
    gap: 2rem;
  }

  form input {
    padding: 12px;
    border-radius: 4px;
    border: 1px solid ${(props) => props.theme.baseButton};
    background: ${(props) => props.theme.baseInput};
    font-size: 14px;
    font-weight: 400;
    color: ${(props) => props.theme.baseLabel};
  }

  input[name='cep'],
  input[name='numero'],
  input[name='bairro'] {
    width: 12.5rem;
  }

  input[name='rua'] {
    width: 100%;
  }

  input[name='complemento'] {
    flex: 1 0 0;
  }

  input[name='uf'] {
    width: 3.75rem;
  }

  input[name='cidade'] {
    width: 100%;
    display: flex;
    flex: 1 0 0;
  }

  form {
    gap: 1rem;
    display: flex;
    flex-direction: column;
  }

  form div {
    gap: 0.75rem;
    display: flex;
  }
`
