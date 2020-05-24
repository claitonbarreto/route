import React, {useState, useEffect} from 'react'
import { connect } from 'react-redux'
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
import CepField from '../../components/CepField'
import FreteField from '../../components/FreteField'
import store from '../../store/index'

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


const Home = (props) => {
    
    const [frete, setFrete] = useState(0)
    
    var fieldsErros = {
        cepDestino: {
            isError: false
        },
        cepOrigem: {
            isError: false
        }
    }

    const handleClick = e => {
       console.log(props.cepOrigem)
       console.log(props.cepDestino)
    }

    const classes = useStyles()

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

                <CepField 
                    id="ORIGEM"
                    label="Cep de Origem"
                    value={props.cepOrigem}
                />
            
            
                <CepField 
                    id="DESTINO"
                    label="Cep de Destino"
                    value={props.cepDestino}
                />
                
                <Grid xs={12} container justify="center" alignItems="center">
                   <FreteField />
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

export default connect(store => ({cepOrigem: store.CepReducer.cepOrigem, cepDestino: store.CepReducer.cepDestino}))(Home)