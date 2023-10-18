import styled from 'styled-components'
import variaveis from '../../styles/variaveis'

export const Nome = styled.p`
  border-bottom: 1px solid rgba(0, 0, 0, 0.5);
  font-size: 18px;
  padding: 8px;
`
export const NomeInput = styled.input`
  font-size: 18px;
`

export const Numero = styled.p`
  border-bottom: 1px solid rgba(0, 0, 0, 0.5);
  font-size: 18px;
  padding: 8px;
`
export const NumeroInput = styled.input`
  font-size: 18px;
`

export const Email = styled.p`
  border-bottom: 1px solid rgba(0, 0, 0, 0.5);
  font-size: 18px;
  padding: 8px;
`
export const EmailInput = styled.input`
  font-size: 18px;
`
export const Logo = styled.img`
  height: 18px;
`

export const BarraAcao = styled.div`
  display: flex;
`

export const Botao = styled.button`
  cursor: pointer;
  border-radius: 8px;
  border: none;
  margin-left: 8px;
  width: 50%;
`
export const BotaoCancelarRemover = styled(Botao)`
  background-color: ${variaveis.vermelho};
`
