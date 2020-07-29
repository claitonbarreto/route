import React from 'react'
import { InterruptorDiv, InterruptorButton, SunIcon, MoonIcon } from './styles'




const Icon = ({theme}) => theme === 'light' ? <MoonIcon />  :  <SunIcon />


const DarkModeInterruptor = ({theme, toggleTheme}) => {
  
    return (
        <InterruptorDiv onClick={toggleTheme} theme={theme}>
            <InterruptorButton theme={theme}>
                <Icon theme={theme}/>
            </InterruptorButton>
        </InterruptorDiv>
    );
  }
  
  export default DarkModeInterruptor;