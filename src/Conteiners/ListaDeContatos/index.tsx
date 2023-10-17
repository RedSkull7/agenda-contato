import { useSelector } from 'react-redux'

import Contatos from '../../Components/Contato'
import * as S from './styles'
import { RootReducer } from '../../store'

const CampoDeContatos = () => {
  const { itens } = useSelector((state: RootReducer) => state.contato)

  return (
    <S.Container>
      <S.Campo type="text" placeholder="Buscar" />
      <p>Resultado da pesquisa:</p>
      <S.ListaContato>
        <h2>Contato</h2>
        <h2>Número</h2>
        <h2>E-mail</h2>
        <h2>Editar</h2>
        {itens.map((t) => (
          <Contatos
            key={t.nome}
            nome={t.nome}
            numero={t.numero}
            email={t.email}
            id={t.id}
          />
        ))}
      </S.ListaContato>
    </S.Container>
  )
}

export default CampoDeContatos
