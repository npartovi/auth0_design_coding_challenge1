const FilterReducer = (state = null, action) => {
	switch(action.type){
		case "RECEIVE_FILTER_PARAMETERS":
			return action.filter;
	}
	return state;
}

export default FilterReducer