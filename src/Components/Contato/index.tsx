import * as S from './styles'
import edicao from '../../imagens/edicao.png'

const Contatos = () => (
  <>
    <S.Nome>Icaro Natã Fadel</S.Nome>
    <S.Numero>+55 (11) 94926-8848</S.Numero>
    <S.Email>icaro.nata147@gmail.com</S.Email>
    <S.BarraAcao>
      <S.Botao>
        <S.logo src={edicao} />
      </S.Botao>
      <S.Botao>Remover</S.Botao>
    </S.BarraAcao>
  </>
)

export default Contatos
