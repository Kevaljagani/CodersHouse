import './App.css'
import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Navigation from './components/shared/Navigation/Navigation'
import Home from './pages/Home/Home'

function App() {
    return (
        <BrowserRouter>
          <Navigation />
            <Switch>
                <Route path="/" exact>
                    <Home/>
                </Route>
            </Switch>
        </BrowserRouter>
    )
}

export default App;
