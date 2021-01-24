import React from 'react'
import { BrowserRouter, Route} from 'react-router-dom'
import{
    Home,
    Works,
    Contact
} from './components/index'

const Router = ()=>{
	return (
    <>
        <BrowserRouter>
            <Route exact path="/" component={Home} ></Route>
            <Route exact path="/works" component={Works} ></Route>
            <Route exact path="/contact" component={Contact} ></Route>
        </BrowserRouter>
    </>
)
}

export default Router