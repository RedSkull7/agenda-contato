import styled from 'styled-components'

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
  gap: 4px;
  text-align: center;

  h2 {
    padding: 16px;
    font-size: 24px;
    font-weight: bold;
    border-bottom: 2px solid #000;
  }

  p {
    border-bottom: 1px solid rgba(0, 0, 0, 0.5);
    font-size: 18px;
    padding: 8px;
  }
`
export const logo = styled.img`
  height: 18px;
`
