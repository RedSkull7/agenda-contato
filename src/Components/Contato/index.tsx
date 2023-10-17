import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'

import * as S from './styles'
import edicao from '../../imagens/edicao.png'
import { remover } from '../../store/reducers/contato'
import Contato from '../../models/Contato'

type Props = Contato

const Contatos = ({
  nome: nomeOriginal,
  numero: numeroOriginal,
  email: emailOriginal,
  id
}: Props) => {
  const dispatch = useDispatch()
  const [estaEditando, setEstaEditando] = useState(false)
  const [nome, setNome] = useState('')
  const [numero, setNumero] = useState('')
  const [email, setEmail] = useState('')

  useEffect(() => {
    if (nomeOriginal.length > 0) {
      setNome(nomeOriginal)
    }
  }, [nomeOriginal])

  useEffect(() => {
    if (numeroOriginal.length > 0) {
      setNumero(numeroOriginal)
    }
  }, [numeroOriginal])

  useEffect(() => {
    if (emailOriginal.length > 0) {
      setEmail(emailOriginal)
    }
  }, [emailOriginal])

  const cancelarEdicao = () => {
    setNome(nomeOriginal)
    setNumero(numeroOriginal)
    setEmail(emailOriginal)
    setEstaEditando(false)
  }

  return (
    <>
      {estaEditando ? (
        <S.NomeInput
          type="text"
          value={nome}
          onChange={(evento) => setNome(evento.target.value)}
        />
      ) : (
        <S.Nome>{nome}</S.Nome>
      )}
      {estaEditando ? (
        <S.NumeroInput
          type="tel"
          value={numero}
          onChange={(evento) => setNumero(evento.target.value)}
        />
      ) : (
        <S.Numero>{numero}</S.Numero>
      )}
      {estaEditando ? (
        <S.EmailInput
          type="email"
          value={email}
          onChange={(evento) => setEmail(evento.target.value)}
        />
      ) : (
        <S.Email>{email}</S.Email>
      )}
      <S.BarraAcao>
        {estaEditando ? (
          <>
            <S.BotaoSalvar>Salvar</S.BotaoSalvar>
            <S.BotaoCancelarRemover onClick={cancelarEdicao}>
              Cancelar
            </S.BotaoCancelarRemover>
          </>
        ) : (
          <>
            <S.Botao onClick={() => setEstaEditando(true)}>
              <S.Logo src={edicao} />
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
