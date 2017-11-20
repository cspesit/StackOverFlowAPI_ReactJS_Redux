import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import SearchComponent from '../components/SearchComponent';
import {searchQuestions} from '../actions/SearchAction';

const mapStateToProps = (state) => { debugger;
    let searchResults = state.SearchReducer[state.SearchReducer.length - 1];
    let searchResult = [];
    for(let result in searchResults){
       searchResult =  searchResults[result].data.items;
    }
    // searchResults = searchResult.length > 0 ? searchResults[searchResults.length - 1] : [];
    return {
        searchResults : searchResult
    }
}

 const mapDispatchToProps = (dispatch) => {
    return bindActionCreators ({searchQuestions}, dispatch);
    
 }

const SearchContainer = connect(mapStateToProps, mapDispatchToProps)(SearchComponent);

export default SearchContainer;