import React, { useState } from 'react'
import FreteActions from '../actions/FreteAction'
import ErrorAction from '../actions/ErrorAction'
import { connect } from 'react-redux'
import { TextField, InputAdornment } from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'

import validations from './MyCard/validations'



const FreteField = ({id, ...props}) => {

    const [error, setError] = useState(false)
    const [helperErrorText, setHelperErrorText] = useState('')

    const validateFrete = e => {

        let frete = e.target.value
        const validate = validations({frete, id}, 'frete')
        if(validate.length === 0) {
            props.dispatch(ErrorAction.clearErrors(id))
            setError(false)
        } else {
            props.dispatch(ErrorAction.setError(validate))
            setError(true)
        }
        
    }

    const handleFreteChange = e => {
        props.dispatch(FreteActions.setFrete(e.target.value))
    }

    return (
        <>
            <TextField 
                required
                error={error}
                id="FRETE"
                label="Valor do frete"
                value={props.frete}
                helperText={helperErrorText !== '' ? helperErrorText : 'use "," como separador'}
                onChange={handleFreteChange}
                onBlur={validateFrete}
                onFocus={() => props.dispatch(ErrorAction.clearErrors(id))}
                InputProps={{
                    startAdornment: <InputAdornment position="start">R$</InputAdornment>
                }}
                fullWidth
            />
        </>
    )

}

export default connect(store => ({frete: store.FreteReducer.frete}))(FreteField)