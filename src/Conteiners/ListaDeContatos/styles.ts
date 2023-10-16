import styled from 'styled-components'

export const Container = styled.main`
  padding: 0 40px;
  height: 80vh;
  overflow-y: scroll;
`

export const Campo = styled.input`
  border-radius: 8px;
  padding: 8px;
  backgroun-color: #fff;
  font-weight: bold;
  color: #666666;
  border-color: #666666;
  font-size: 24px;
  margin-bottom: 8px;
`

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
