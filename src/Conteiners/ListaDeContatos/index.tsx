import Contatos from '../../Components/Contato'
import * as S from './styles'

const Contato = [
  {
    nome: 'Icaro Natã Fadel',
    numero: '+55 (11) 94926-8848',
    email: 'icaro.nata147@gmail.com'
  },
  {
    nome: 'Icaro Natã',
    numero: '+55 (11) 94926-8848',
    email: 'icaro.nata147@gmail.com'
  },
  {
    nome: 'Icaro Fadel',
    numero: '+55 (11) 94926-8848',
    email: 'icaro.nata147@gmail.com'
  },
  {
    nome: 'Icaro',
    numero: '+55 (11) 94926-8848',
    email: 'icaro.nata147@gmail.com'
  }
]

const CampoDeContatos = () => (
  <S.Container>
    <S.Campo type="text" placeholder="Buscar" />
    <p>Resultado da pesquisa:</p>
    <S.ListaContato>
      <h2>Contato</h2>
      <h2>Número</h2>
      <h2>E-mail</h2>
      <h2>Editar</h2>
      {Contato.map((t) => (
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

export default CampoDeContatos
