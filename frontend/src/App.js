import './App.css'
import React from 'react'
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'
import Navigation from './components/shared/Navigation/Navigation'
import Home from './pages/Home/Home'
import Authenticate from './pages/Authenticate/Authenticate'
// import Register from './pages/Register/Register'
// import Login from './pages/Login/Login'

const isAuth = false; 

function App() {
    return (
        <BrowserRouter>
          <Navigation />
            <Switch>
                <Route path="/" exact>
                    <Home/>
                </Route>

                <GuestRoute path='/authenticate'>
                    <Authenticate />
                </GuestRoute>

            </Switch>
        </BrowserRouter>
    )
}



const GuestRoute = ({children, ...rest}) => {
    return (

        <Route {...rest}
            render={({ location }) => {
                return isAuth ? (
                <Redirect to={
                    {
                        pathname: '/rooms',
                        state: {from: location}
                    }
                }/>

                ) : (
                    children
                );
            }}
        />
    );
};
export default App;


// 4) 27:30:00