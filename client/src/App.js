import React from 'react'
import {BrowserRouter, Route, Switch} from 'react-router-dom'

import './App.css'

import GatherData from './Components/GatherData'
import ErrorComponent from './Components/ErrorComponent'

const App = () => {
    return (
        <BrowserRouter>
            <div className='App'>
            <header className="App-header">
            <h1 className="App-title">Welcome to Genre-fy</h1>
            <h3>Contrast the genres of the US's top 100 songs!</h3>
            </header>
            <Switch>
            <Route exact path='/' component={GatherData} />
            <Route component={ErrorComponent} />
            </Switch>

        </div>
      </BrowserRouter>
    )
}

export default App