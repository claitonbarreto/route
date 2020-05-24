import React, {useState, useEffect} from 'react'

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

import Icon from '@material-ui/core/Icon'
import SearchIcon from '@material-ui/icons/Search'

import { makeStyles } from '@material-ui/styles'

import validations from './validations'

import axios from 'axios'


const useStyles = makeStyles((theme) => ({
    botao: {
        marginTop: 40
    },
    grid: {
        height: '95%',
        width: '100vw'
    },
    titleGrid: {
        height: '5%',
    },
    textField: {
        margin: '10px 10px 20px 10px'
    },
    title: {
        color: '#444'
    }
}))


const Home = () => {
    
    const [cepOrigem, setCepOrigem] = useState('')
    const [cepDestino, setCepDestino] = useState('')
    const [frete, setFrete] = useState(0)
    
    var fieldsErros = {
        cepDestino: {
            isError: false
        },
        cepOrigem: {
            isError: false
        }
    }

    const handleTextChange = e => {
        if(e.target.id === 'cepOrigem') setCepOrigem(e.target.value)
        if(e.target.id === 'cepDestino') setCepDestino(e.target.value)
    }

    const handleClick = e => {
        const cepOrigemValidation = validations(cepOrigem, 'cep')
        const cepDestinoValidation = validations(cepDestino, 'cep')
    }

    const handleFreteChange = e => {
        setFrete(e.target.value)
    }

    const classes = useStyles()

    useEffect(async () => {
        axios.get('http://api.route')
        .then(res => {
            console.log(res)
        })
    })
   return (
    <>
        <Grid
            xs={12}
            container
            className={classes.titleGrid}
            justify="center"
            alignItems="center"    
        >
            <h1 className={classes.title}> Traçe sua rota </h1>
        </Grid>
    
        <Grid 
            className={classes.grid}
            justify="center"
            alignItems="center"
            container
            spacing={1}
            direction="column"
        >
            <form>

                <TextField
                    error={fieldsErros.cepOrigem.isError}
                    required
                    className={classes.textField}
                    id="cepOrigem"
                    label="CEP de Origem"
                    onChange={handleTextChange}
                    value={cepOrigem}
                    helperText="Somente números"
                />
            
            
                <TextField 
                    error={fieldsErros.cepDestino.isError}
                    required
                    className={classes.textField}
                    id="cepDestino"
                    label="CEP de Destino"
                    onChange={handleTextChange}
                    value={cepDestino}
                    helperText="Somente números"
                />
                
                <Grid xs={12} container justify="center" alignItems="center">
                    <TextField 
                        required
                        className={classes.textField}
                        id="valorFrete"
                        label="Valor do frete"
                        onChange={handleFreteChange}
                        value={frete}
                        helperText='use "," como separador'
                        InputProps={{
                            startAdornment: <InputAdornment position="start">R$</InputAdornment>
                        }}
                    />
                </Grid>       
            </form>

            <Button 
                variant="contained" 
                color="secondary" 
                className={classes.botao} 
                startIcon={ <SearchIcon />}
                onClick={handleClick}
            >
                Consultar
            </Button>
        </Grid>
    </>
   )
}

export default Home