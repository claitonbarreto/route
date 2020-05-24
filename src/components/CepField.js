import React, { useState } from 'react'
import { connect } from 'react-redux'
import CepActions from '../actions/CepActions'
import { 
    Button,
    Grid,
    TextField,
    FormControl,
    Input,
    FormHelperText,
    InputLabel,
    InputAdornment,
} from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'
import validations from '../views/Home/validations'

const useStyles = makeStyles((theme) => ({

    textField: {
        margin: '10px 10px 20px 10px'
    },
    title: {
        color: '#444'
    }

}))

const CepField = ({id, label, value, ...props}) => {

    const [error, setError] = useState(false)
    const [helperErrorText, setHelperErrorText] = useState('')

    const cepValidate = (e) => {
        var validate = validations(e.target.value, 'cep')
        if(validate !== true) {
            setError(true)
            setHelperErrorText(validate)
        } 

        if(validate == true) {
            setError(false)
            setHelperErrorText('')
        }
    }

    const handleTextChange = (e) => {
        props.dispatch(CepActions.setCep(e.target.value, e.target.id))
    }

    const classes = useStyles()

    return (
        <>
            <TextField 
                error={error}
                required
                className={classes.textField}
                id={id}
                label={label}
                onChange={handleTextChange}
                value={value.trim()}
                helperText={helperErrorText !== '' ? helperErrorText : "Somente números"}
                onBlur={cepValidate}
            />
        </>
    )

}

export default connect(store =>({cepOrigem: store.cepOrigem, cepDestino: store.cepDestino}))(CepField)