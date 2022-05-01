import React, { useEffect, useState } from 'react'
import {Switch, Route} from "react-router-dom"

import Login from '../pages/Login'
import Signup from '../pages/Signup'
import Dashboard from '../pages/Dashboard'
import { useHistory } from 'react-router-dom'

function Router(){
    const [auth, setAuth] = useState(false)
    const history = useHistory()

    const [courseModule, setCourseModule] = useState()
    console.log(auth)
    useEffect(()=>{
        const token = window.localStorage.getItem("authToken")

        if(!token){
            setAuth(false)
        }

    },[history, auth])

    if(!auth){
        return(
            <Switch>
                <Route exact path="/">
                    <Login setAuth={setAuth} setCourseModule={setCourseModule}/>
                </Route>

                <Route path="/signup">
                    <Signup setAuth={setAuth} setCourseModule={setCourseModule}/>
                </Route>
    
    
            </Switch>
        )
    }

    return(
        <Switch>
               <Route exact path="/">
                    <Login setAuth={setAuth} setCourseModule={setCourseModule}/>
                </Route>

                <Route path="/signup">
                    <Signup setAuth={setAuth} setCourseModule={setCourseModule}/>
                </Route>
                
            <Route exact path="/dashboard/:name" >
                <Dashboard courseModule={courseModule} />
            </Route>
        </Switch>
       
    )
  
}

export default Router