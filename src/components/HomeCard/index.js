import React from 'react'
import { Button } from '@material-ui/core'
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos'

import MyCard from '../MyCard'
import CepField from '../CepField'
import FreteField from '../FreteField'

import {
    CardForm,
    MyButton,
    MyTextInput
} from './styles'

const HomeCard = ({redirect, handleSend, ...props}) => {
    return (
        <MyCard 
            shadow
            suggest  
            cardColor="#05A8AA" 
            headerText={props.title} 
            redirect={redirect} 
            themeColor={props.tema}
            cardWidth={7}
            xs={12}
            sm={12}
            md={10}
            lg={6}
            xl={6}
            animationDuration={50}
        >
        <CardForm>
            {!props.noCeps && (
                <>
                    <MyTextInput>
                        <CepField 
                            id="ORIGEM"
                            label="CEP de Origem"
                        />
                    </MyTextInput>
                    <MyTextInput>
                        <CepField 
                            id="DESTINO"
                            label="CEP de Destino"
                        />
                    </MyTextInput>
                </>
            )}
            <MyTextInput>
                <FreteField 
                    id="FRETE"
                />
            </MyTextInput>

            {!props.noButton && (
                <MyButton>
                    <Button
                        endIcon={<ArrowForwardIosIcon />}
                        onClick={handleSend}
                    >
                        Calcular
                    </Button>
                </MyButton>
            )}
            
        </CardForm>
        </MyCard>
    )
}

export default HomeCard
