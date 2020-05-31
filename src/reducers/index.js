import { combineReducers } from 'redux'

import CepReducer from '../reducers/CepReducer'
import FreteReducer from '../reducers/FreteReducer'
import ErrorReducer from '../reducers/ErrorReducer'

export default combineReducers({
    CepReducer: CepReducer,
    FreteReducer: FreteReducer,
    ErrorReducer: ErrorReducer
})