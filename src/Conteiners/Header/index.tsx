import contato from '../../imagens/contato.jpeg'
import * as S from './styles'

const Header = () => (
  <header>
    <S.AreaHeader>
      <S.logoPrincipal src={contato} alt="icone de contato" />
      <h1>Agenda de contatos</h1>
    </S.AreaHeader>
  </header>
)

export default Header
