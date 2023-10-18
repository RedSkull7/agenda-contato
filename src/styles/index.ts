import styled, { createGlobalStyle } from 'styled-components'
import variaveis from './variaveis'
import { Botao } from '../Components/Contato/styles'

const EstiloGlobal = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Oswald', sans-serif;
}
`

export const Container = styled.div`
  max-width: 960px;
  width: 100%;
  margin: 0 auto;
  padding: 8px;
`

export const MainContainer = styled.main`
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
export const BotaoSalvar = styled(Botao)`
  background-color: ${variaveis.verde};
`

export default EstiloGlobal
