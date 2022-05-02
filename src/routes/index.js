import React, { useEffect, useState } from 'react'
import {Switch, Route} from "react-router-dom"

import Login from '../pages/Login'
import Signup from '../pages/Signup'
import Dashboard from '../pages/Dashboard'

import { Redirect } from 'react-router-dom'

function Router(){
    const [auth, setAuth] = useState(false)
    const userInfo = JSON.parse(localStorage.getItem("@KenzieHub-m3:user")) 
    
    console.log("dir: routes", auth)

    useEffect(()=>{
        const token = JSON.parse(localStorage.getItem("@KenzieHub-m3:token"))
       
        if(token){
            setAuth(true)
            
        }
    }, [auth])

    return(
        <Switch>
               
               <Route exact path="/">
                    <Login auth={auth} setAuth={setAuth} userInfo={userInfo} />
                </Route>

                <Route path="/signup">
                    <Signup auth={auth} setAuth={setAuth} userInfo={userInfo} />
                </Route>
                
                {auth
                    ?
                    <Route path="/dashboard/:userNameUrl" >
                        <Dashboard  userInfo={userInfo} 
                        auth={auth} setAuth={setAuth}>
                         
                        </Dashboard>
                    </Route>
                    :
                    <Route path="/dashboard/" >
                        <Dashboard  userInfo={userInfo} auth={auth} setAuth={setAuth} />
                    </Route>  

            
            }
                
                
        </Switch>
       
    )
  
}

export default Router