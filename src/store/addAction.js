import axios from 'axios';

export const getName = () => async (dispatch)  => {
	let res = await apicall();
    dispatch({type:"getData", payload:res})    
}

async function apicall(){
    var  res= await axios.get('http://localhost:3002/personal');
    return res.data;
}

export const deleteaction = (id) => async (dispatch) => {
	let res = await testcall(id);
	dispatch({type:"delete", payload:id})
}

async function testcall(id){
	var  res= await axios.delete('http://localhost:3002/personal/'+id);
    return res.data;
}

export const createaction = (obj) => async (dispatch) => {
	console.log("11111",obj)
	let res = await createcall(obj);
	dispatch({type:"create", payload:obj})
}

async function createcall(obj){
	console.log("111111234434534",obj)
	var  res= await axios.post('http://localhost:3002/personal/', obj);
    return res.data;
}
