
//https://github.com/reactjs/redux/blob/master/docs/advanced/AsyncActions.md
const SearchReducers = (state=[], action) => {
  let searchObj = {};
    switch(action.type){
       
        case 'SEARCH_QUESTIONS':
            searchObj[action.searchTerm] = action.payload;
            return[...state, searchObj];
        break;
        case 'CACHED_OBJECT':
        searchObj[action.searchTerm] = action.payload;
        return [...state, searchObj];
        break;
        default:
        return state;
    }
}

export default SearchReducers;