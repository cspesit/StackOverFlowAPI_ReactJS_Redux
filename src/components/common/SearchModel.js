const SearchModel = {
  cacheSearchResults: function(searchTerm, data) {
    // const json = JSON.stringify(data);
    localStorage.setItem(searchTerm, data);
  },

  fetchCachedData: function() {
    return localStorage.getItem('data');
  }
}

export default SearchModel;
