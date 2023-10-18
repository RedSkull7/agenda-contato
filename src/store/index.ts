import { configureStore } from '@reduxjs/toolkit'

import contatoReducer from './reducers/contato'
import filtrosReducer from './reducers/filtros'

const store = configureStore({
  reducer: {
    contato: contatoReducer,
    filtro: filtrosReducer
  }
})

export type RootReducer = ReturnType<typeof store.getState>

export default store
