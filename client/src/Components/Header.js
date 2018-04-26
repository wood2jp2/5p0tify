import React from 'react'
import logo from '../genrefy-logo.svg'
import '../App.css'

import {HeaderWrapper} from './Styles'

const Header = () => (
    <HeaderWrapper>
        <div className="App-header">
            <h1 className="App-title">Welcome to Genre-fy</h1>
            <h3 className='App-subtitle'>Contrast the genres of the US's top 100 songs!</h3>  
            <img src={logo} className="App-logo" alt="logo" />
        </div>
    </HeaderWrapper>
)

export default Header