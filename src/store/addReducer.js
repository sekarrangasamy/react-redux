const initState={
	details : []
};

const addReducer = (state=initState, action) => {
	switch (action.type){
		case "getData" :
			return {
				...state,
				details : state.details.concat([...action.payload])
			}
		case "delete" :
			return {
				...state,
				details : state.details.filter(obj =>{
					return action.payload !== obj
				})
			}
		case "create" :
			return {
				...state,
				details : state.details.concat({...action.payload})
			}

		default :
			return state
	}
}

export default addReducer;