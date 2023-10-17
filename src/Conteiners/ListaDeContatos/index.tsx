import { useSelector } from 'react-redux'

import Contatos from '../../Components/Contato'
import * as S from './styles'
import { RootReducer } from '../../store'

const CampoDeContatos = () => {
  const { contato } = useSelector((state: RootReducer) => state)

  return (
    <S.Container>
      <S.Campo type="text" placeholder="Buscar" />
      <p>Resultado da pesquisa:</p>
      <S.ListaContato>
        <h2>Contato</h2>
        <h2>Número</h2>
        <h2>E-mail</h2>
        <h2>Editar</h2>
        {contato.map((t) => (
          <Contatos
            key={t.nome}
            nome={t.nome}
            numero={t.numero}
            email={t.email}
          />
        ))}
      </S.ListaContato>
    </S.Container>
  )
}

export default CampoDeContatos
