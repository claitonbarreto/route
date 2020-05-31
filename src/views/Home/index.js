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


//BOOTSTRAP
import { Container, Row, Col } from 'react-bootstrap'

import { makeStyles } from '@material-ui/styles'
import CepField from '../../components/CepField'
import FreteField from '../../components/FreteField'
import store from '../../store/index'
import routeStore from '../../@api/store/routeStore'


import MyCard from '../../components/MyCard/index'


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
        routeStore.getGeoCode()
        .then(res => console.log(res))
        
        
        routeStore.getRoute()
        .then(res => console.log(res))
        .catch(err => console.log(err))
    }

   return (
    <div>
        <Container className="justify-content-center">

            <Row className="align-items-center" style={{height: '100vh'}}>
                <Col md={{span: 6, offset: 3}}>
                    <MyCard />
                </Col>
            </Row>

        </Container>   
    </div>
   )
}

export default connect(store => ({cepOrigem: store.CepReducer.cepOrigem, cepDestino: store.CepReducer.cepDestino}))(Home)