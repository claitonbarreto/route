import React, { useState } from 'react'
import FreteActions from '../actions/FreteAction'
import { connect } from 'react-redux'
import { TextField, InputAdornment } from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'
import validations from '../views/Home/validations'


const useStyles = makeStyles({
    textField: {
        margin: '10px 10px 20px 10px'
    }
})

const FreteField = (props) => {

    const classes = useStyles()


    const [error, setError] = useState(false)
    const [helperErrorText, setHelperErrorText] = useState('')

    const validateFrete = e => {
        const validacao = validations(e.target.value, 'frete')
        if(validacao !== true) {
            setError(true)
            setHelperErrorText(validacao)
        }

        if(validacao == true) {
            setError(false)
            setHelperErrorText('')
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
                className={classes.textField}
                id="FRETE"
                label="Valor do frete"
                value={props.frete}
                helperText={helperErrorText !== '' ? helperErrorText : 'use "," como separador'}
                onChange={handleFreteChange}
                onBlur={validateFrete}
                InputProps={{
                    startAdornment: <InputAdornment position="start">R$</InputAdornment>
                }}
            />
        </>
    )

}

export default connect(store => ({frete: store.FreteReducer.frete}))(FreteField)