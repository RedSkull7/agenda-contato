import { Provider } from 'react-redux'
import Header from './Conteiners/Header'
import ListaDeContatos from './Conteiners/ListaDeContatos'
import EstiloGlobal, { Container } from './styles'

import store from './store'

function App() {
  return (
    <Provider store={store}>
      <EstiloGlobal />
      <Container>
        <Header />
        <ListaDeContatos />
      </Container>
    </Provider>
  )
}

export default App
