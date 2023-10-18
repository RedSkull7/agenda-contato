import { useDispatch, useSelector } from 'react-redux'

import Contatos from '../../Components/Contato'
import * as S from './styles'
import { RootReducer } from '../../store'
import { alteraTermo } from '../../store/reducers/filtros'
import { MainContainer, Campo } from '../../styles/index'

const CampoDeContatos = () => {
  const { itens } = useSelector((state: RootReducer) => state.contato)
  const { termo } = useSelector((state: RootReducer) => state.filtro)

  const dispatch = useDispatch()

  const filtraTarefas = () => {
    return itens.filter(
      (item) => item.nome.toLowerCase().search(termo.toLowerCase()) >= 0
    )
  }

  return (
    <MainContainer>
      <Campo
        type="text"
        placeholder="Buscar"
        value={termo}
        onChange={(evento) => dispatch(alteraTermo(evento.target.value))}
      />
      <p>Resultado da pesquisa:</p>
      <S.ListaContato>
        <h2>Contato</h2>
        <h2>Número</h2>
        <h2>E-mail</h2>
        <h2>Editar</h2>
        {filtraTarefas().map((t) => (
          <Contatos
            key={t.nome}
            nome={t.nome}
            numero={t.numero}
            email={t.email}
            id={t.id}
          />
        ))}
      </S.ListaContato>
    </MainContainer>
  )
}

export default CampoDeContatos
