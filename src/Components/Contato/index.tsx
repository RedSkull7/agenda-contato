import { useState } from 'react'
import { useDispatch } from 'react-redux'

import * as S from './styles'
import edicao from '../../imagens/edicao.png'
import { remover } from '../../store/reducers/contato'
import Contato from '../../models/Contato'

type Props = Contato

const Contatos = ({ nome, numero, email, id }: Props) => {
  const dispatch = useDispatch()
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
            <S.BotaoCancelarRemover onClick={() => dispatch(remover(id))}>
              Remover
            </S.BotaoCancelarRemover>
          </>
        )}
      </S.BarraAcao>
    </>
  )
}

export default Contatos
