import * as S from './styles'
import Contatos from '../../Components/Contato'

const CampoDeContatos = () => (
  <S.Container>
    <S.Campo type="text" placeholder="Buscar" />
    <p>Resultado da pesquisa:</p>
    <S.ListaContato>
      <h2>Contato</h2>
      <h2>Número</h2>
      <h2>E-mail</h2>
      <h2>Editar</h2>
      <Contatos />
      <Contatos />
      <Contatos />
    </S.ListaContato>
  </S.Container>
)

export default CampoDeContatos
