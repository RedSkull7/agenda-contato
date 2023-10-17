import * as S from './styles'
import edicao from '../../imagens/edicao.png'
import { useState } from 'react'

type Props = {
  nome: string
  numero: string
  email: string
}

const Contatos = ({ nome, numero, email }: Props) => {
  const [estaEditando, setEstaEditando] = useState(false)

  return (
    <>
      <S.Nome>{nome}</S.Nome>
      <S.Numero>{numero}</S.Numero>
      <S.Email>{email}</S.Email>
      <S.BarraAcao>
        {estaEditando ? (
          <>
            <S.BotaoSalvar>Salvar</S.BotaoSalvar>
            <S.BotaoCancelarRemover onClick={() => setEstaEditando(false)}>
              Cancelar
            </S.BotaoCancelarRemover>
          </>
        ) : (
          <>
            <S.Botao onClick={() => setEstaEditando(true)}>
              <S.logo src={edicao} />
            </S.Botao>
            <S.BotaoCancelarRemover>Remover</S.BotaoCancelarRemover>
          </>
        )}
      </S.BarraAcao>
    </>
  )
}

export default Contatos
