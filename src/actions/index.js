export const selectFilter = (filter) => {
	return{
		type: "RECEIVE_FILTER_PARAMETERS",
		filter
	}
}
