import { createStore } from 'redux'
import CepReducer from '../reducers/CepReducer'

const reducers = () => {return {CepReducer}}

export default createStore(CepReducer)