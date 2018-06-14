export function selectFilter(filter){
	return{
		type: "RECEIVE_FILTER_PARAMETERS",
		filter
	}
}