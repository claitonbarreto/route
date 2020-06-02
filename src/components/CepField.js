import React, { useState } from 'react'
import { connect } from 'react-redux'
import CepActions from '../actions/CepActions'
import ErrorAction from '../actions/ErrorAction'
import { TextField } from '@material-ui/core'

//My imports
import validations from './MyCard/validations'
import store from '../store/index'


const CepField = ({id, label, value, ...props}) => {

    const [error, setError] = useState(false)

    const cepValidate = async (e) => {
        
        let cep = e.target.value
        const validate = validations({cep, id}, 'cep')
        console.log(props)
        
        if(validate.length === 0) {
            props.dispatch(ErrorAction.clearError(id))
            setError(false)
        } else { 
            props.dispatch(ErrorAction.setError(validate))
            setError(true)
        }
    }

    const handleTextChange = (e) => {
        props.dispatch(CepActions.setCep(e.target.value, e.target.id))
    }

    return (
        <>
            
            <TextField 
                error={error}
                required
                id={id}
                label={label}
                onChange={handleTextChange}
                value={value}
                helperText={"Somente números"}
                onBlur={cepValidate}
                fullWidth
            />
           
        </>
    )

}

export default connect(store => ({
    cepOrigem: store.CepReducer.cepOrigem, 
    cepDestino: store.CepReducer.cepDestino,
    error: store.ErrorReducer.error
}))(CepField)