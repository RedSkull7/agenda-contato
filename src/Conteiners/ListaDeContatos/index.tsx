import * as S from './styles'
import edicao from '../../imagens/edicao.png'

const CampoDeContatos = () => (
  <main>
    <S.Campo type="text" placeholder="Buscar" />
    <p>Resultado da pesquisa:</p>
    <S.ListaContato>
      <h2>Contato</h2>
      <h2>Número</h2>
      <h2>E-mail</h2>
      <h2>Editar</h2>

      <p>Icaro Natã Fadel</p>
      <p>+55 (11) 94926-8848</p>
      <p>icaro.nata147@gmail.com</p>
      <button>
        <a href="">
          <S.logo src={edicao}></S.logo>
        </a>
      </button>

      <p>Icaro Natã Fadel</p>
      <p>+55 (11) 94926-8848</p>
      <p>icaro.nata147@gmail.com</p>
      <button>
        <a href="">
          <S.logo src={edicao}></S.logo>
        </a>
      </button>

      <p>Icaro Natã Fadel</p>
      <p>+55 (11) 94926-8848</p>
      <p>icaro.nata147@gmail.com</p>
      <button>
        <a href="">
          <S.logo src={edicao}></S.logo>
        </a>
      </button>

      <p>Icaro Natã Fadel</p>
      <p>+55 (11) 94926-8848</p>
      <p>icaro.nata147@gmail.com</p>
      <button>
        <a href="">
          <S.logo src={edicao}></S.logo>
        </a>
      </button>

      <p>Icaro Natã Fadel</p>
      <p>+55 (11) 94926-8848</p>
      <p>icaro.nata147@gmail.com</p>
      <button>
        <a href="">
          <S.logo src={edicao}></S.logo>
        </a>
      </button>
    </S.ListaContato>
  </main>
)

export default CampoDeContatos
