
import APP_CONFIG from '../constants/AppConfig';
import axios from 'axios';
export function searchQuestions(searchTerm){ debugger;
	return (dispatch, getState) => {
		let _state = getState().SearchReducer;
		
		if(_state !== undefined && _state.length > 0){
			let cachedObj = null;
			for(let obj of _state){
				cachedObj = obj[searchTerm];
				if(cachedObj !== undefined){
					break;
				}
			}
				if(cachedObj !== null && cachedObj !== undefined){
					dispatch({
						type : 'CACHED_OBJECT',
						searchTerm : searchTerm,
						payload : cachedObj
					});
				}else{
				let SEARCH_URL =  `${APP_CONFIG.SEARCH_URL.base_url}${searchTerm}${APP_CONFIG.SEARCH_URL.filter}`;
				return axios.get(SEARCH_URL).then(function(response){
				dispatch({
					type : 'SEARCH_QUESTIONS',
					searchTerm : searchTerm,
					payload : response
				});
			});
			}
		}else{
			let SEARCH_URL =  `${APP_CONFIG.SEARCH_URL.base_url}${searchTerm}${APP_CONFIG.SEARCH_URL.filter}`;
			return axios.get(SEARCH_URL).then(function(response){
			dispatch({
				type : 'SEARCH_QUESTIONS',
				searchTerm : searchTerm,
				payload : response
			});
		});
		}
		
	}
		
}

