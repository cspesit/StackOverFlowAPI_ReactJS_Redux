import React,{Component} from 'react';
import { BrowserRouter, Switch, Link, Route, browserHistory } from "react-router-dom";
import SearchRouter from './searchRouter';

const App = () => {
    return(
    <div className='search'>
    <BrowserRouter history = { browserHistory } >
            <SearchRouter/>
    </BrowserRouter>
     </div>
    )
}
export default App;