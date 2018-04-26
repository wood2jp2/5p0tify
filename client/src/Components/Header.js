import React from 'react'
import logo from '../genrefy-logo.svg'
import '../App.css'
import styled from 'styled-components'

import {midnightBlue} from './Styles'

const HeaderWrapper = styled.section`
    background-color: ${midnightBlue};
    margin-bottom: 2%;

    > div {
        margin: 0
    }
`

const Header = () => (
    <HeaderWrapper>
        <div className="App-header">
            <h1 className="App-title">Welcome to Genre-fy</h1>
            <h3>Contrast the genres of the US's top 100 songs!</h3>  
            <img src={logo} className="App-logo" alt="logo" />
            
        </div>
    </HeaderWrapper>
)

export default Header