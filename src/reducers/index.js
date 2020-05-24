import { combineReducers } from 'redux'

import CepReducer from '../reducers/CepReducer'
import FreteReducer from '../reducers/FreteReducer'

export default combineReducers({
    CepReducer: CepReducer,
    FreteReducer: FreteReducer
})