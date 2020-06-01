import React, { useState } from 'react'
import { connect } from 'react-redux'
import CepActions from '../actions/CepActions'
import ErrorAction from '../actions/ErrorAction'
import { TextField } from '@material-ui/core'

//My imports
import validations from './MyCard/validations'


const CepField = ({id, label, value, ...props}) => {

    const [error, setError] = useState(false)
    const [helperErrorText, setHelperErrorText] = useState('')

    const cepValidate = (e) => {
        var validate = validations(e.target.value, 'cep')
        if(validate !== true) {
            setError(true)
            setHelperErrorText(validate.text)
            props.dispatch(ErrorAction.setError(validate.text, validate.code))
        } 

        if(validate == true) {
            setError(false)
            setHelperErrorText('')
            //TODO: passar o code como prop nao visual pro state global. No HandleClose pegar o code (id) e deletar todos os erros refs ao id
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
                helperText={helperErrorText !== '' ? helperErrorText : "Somente números"}
                onBlur={cepValidate}
                fullWidth
            />
           
        </>
    )

}

export default connect(store =>({cepOrigem: store.CepReducer.cepOrigem, cepDestino: store.CepReducer.cepDestino}))(CepField)