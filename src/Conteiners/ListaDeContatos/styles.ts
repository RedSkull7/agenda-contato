import styled from 'styled-components'

export const ListaContato = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  gap: 2px;
  text-align: center;

  h2 {
    padding: 16px;
    font-size: 24px;
    font-weight: bold;
    border-bottom: 2px solid #000;
  }
`

export const button = styled.button`
  cursor: pointer;
`
