import React, {Component} from 'react';
import TextInput from './common/TextInput';
import ButtonComponent from './common/ButtonComponent';
import SearchResultPanel from './SearchResultComponent';
class SearchComponent extends Component{
    constructor(props){
        super(props);
        this.state = {
            searchTerm : ''
        }
    this.updateTextInputValue = this.updateTextInputValue.bind(this);
    this.clickButton = this.clickButton.bind(this);
    }
    updateTextInputValue(event){
        this.setState({searchTerm : event.target.value});
    }

    clickButton(){
        this.props.searchQuestions(this.state.searchTerm);
    }
    
    render(){
        const searchResults = this.props.searchResults;
        const viewSearchPanel = (
            <div className="SearchInputpanel">
                <TextInput searchTerm={this.state.searchTerm}  updateValue={this.updateTextInputValue}/>
                <ButtonComponent clickButton={this.clickButton}/>
            </div>
        );
         let viewResult = null;
         if(searchResults !== '' && searchResults.length > 0){
                viewResult = ( <SearchResultPanel results = {searchResults}/>);
        }
       
        return(
            <div className="SearchComponentContainer">
                {viewSearchPanel}
                {viewResult}
            </div>
        )
    }
}

export default SearchComponent;