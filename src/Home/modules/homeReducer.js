import axios from 'axios';
import {url} from "../../config.json";

//---------------------CONSTANTS---------------------------
export const FETCHING_DATA = 'FETCHING_DATA';
export const RECEIVING_DATA = 'RECEIVING_DATA';
export const ERROR = 'ERROR';


//--------------------ACTION-------------------------------

export function sendingData(status) {
	return {
		type: FETCHING_DATA,
		fetching: status
	}
}
export function receivingData(response) {
	return {
		type: RECEIVING_DATA,
		receivingList: response
	}
}
export function errorData(status) {
	return {
		type: ERROR,
		error: status
	}
}


//------------------------FUNCTION-------------------------
export const receivedList = () => {
	return (dispatch) => {
		dispatch(sendingData(true));
		axios.get(`${url}rest/?method=flickr.cameras.getBrandModels&api_key=8cc39b0435aa0c453ea8d3054c14e152&brand=canon&format=json&nojsoncallback=1&auth_token=72157717161281787-1749c8f9ffceb0af&api_sig=7780b840937af6c28d7a5d66e1f7fe61`)
		.then(res => {
			// let data = [];
			// res.data.cameras.camera.map((item) => {
				
			// })
			// for(let i=0;i<res.data.cameras.camera;i++) {
			// 	console.log("jjjjjjjjjjjjjjjjjjjjjjjjjjjjjj");
			// }
			dispatch(receivingData(res.data.cameras))
		}).catch(err => {
			dispatch(errorData(true,err))
		})
	}
}



//----------------------ACTION HANDLERS -------------------
const ACTION_HANDLERS = {
	[FETCHING_DATA]: (state, action) => {
		return {
		  ...state,
		  fetching: action.fetching
		};
	},
	[RECEIVING_DATA]:(state,action) => {
		return {
			...state,
			receivingList:action.receivingList
		}
	},
	[ERROR]:(state,action) => {
		return {
			...state,
			error:action.error
		}
	}
};





//------------------INITIAL STATES-----------------------------

const initialState = {
	fetching:false,
	receivingList:[],
	error:false
}


export default function homeReducer(state = initialState, action) {
	const handler = ACTION_HANDLERS[action.type];
	return handler ? handler(state,action) :state;
}