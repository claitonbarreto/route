import React from 'react'
import styled from 'styled-components'
import {IoIosMoon, IoMdSunny} from 'react-icons/io'

export const InterruptorDiv = styled.div`
  position: absolute;
  right: 10px;
  top: 10px;
  width: 60px;
  height: 30px;
  padding: 2px;
  border-radius: 30px;
  display: flex;
  flex-direction: row;
  align-items: center;
  background-color: ${({theme}) => theme === 'light' ? '#555' : '#ddd'};
  box-shadow: 1px 0px 3px black;
  z-index: 300; 
`

export const InterruptorButton = styled.div`
  width: 28px;
  height: 28px;
  border-radius: 100%;
  position: relative;
  transition: all .2s ease-in;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({theme}) => theme === 'light' ? '#444' : '#fff'};
  left: ${({theme}) => theme === 'light' ? '0px' : 'calc(100% - 28px)'};
`

export const MoonIcon = styled(IoIosMoon)`
  color: white;
  font-size: auto;
`

export const SunIcon = styled(IoMdSunny)`
  color: #777;
  font-size: auto;
`