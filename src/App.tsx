import Header from './Conteiners/Header'
import ListaDeContatos from './Conteiners/ListaDeContatos'
import EstiloGlobal, { Container } from './styles'

function App() {
  return (
    <>
      <EstiloGlobal />
      <Container>
        <Header />
        <ListaDeContatos />
      </Container>
    </>
  )
}

export default App
