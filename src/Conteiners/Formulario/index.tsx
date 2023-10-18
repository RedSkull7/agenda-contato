import { MainContainer, Campo, BotaoSalvar } from '../../styles/index'
import Header from '../Header'
import { Form } from './styles'

const Formulario = () => (
  <>
    <Header />
    <MainContainer>
      <Form>
        <Campo type="text" placeholder="Nome completo" />
        <Campo type="tel" placeholder="Telefone" />
        <Campo type="email" placeholder="E-mail" />
        <BotaoSalvar type="submit">Cadastrar</BotaoSalvar>
      </Form>
    </MainContainer>
  </>
)

export default Formulario
