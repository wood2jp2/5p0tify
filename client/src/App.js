import React from 'react'
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import './App.css'

import GatherData from './Components/GatherData'
import ErrorComponent from './Components/ErrorComponent'
import Header from './Components/Header'

const App = () => (
      <BrowserRouter>
        <div className='App'>
        <Header />
        
            <Switch>
                <Route exact path='/' component={GatherData} />
                <Route component={ErrorComponent} />
            </Switch>
            
        </div>
      </BrowserRouter>
)

export default App