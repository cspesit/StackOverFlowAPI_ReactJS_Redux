import React from 'react';
import { BrowserRouter, Switch, Link, Route, browserHistory } from "react-router-dom";
import SearchContainer from '../../containers/SearchContainer';
const SearchRouter = () =>  {
    return(
      <div className = 'search-router'>
        <Switch>
            <Route path ='/' component = {SearchContainer} />
          </Switch>
      </div>
    )
}

export default SearchRouter;