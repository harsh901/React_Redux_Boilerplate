import {connect} from 'react-redux';
import { withRouter } from "react-router-dom";
import {receivedList} from "./modules/homeReducer";
import Home from "./components/home";

const mapStateToProps = (state) => {
	console.log(state)
	return {
		fetching:state.home.fetching,
		receivingList:state.home.receivingList,
		error:state.home.error
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		receivedList:() => dispatch(receivedList())
	}
}

export default connect(mapStateToProps,mapDispatchToProps)(withRouter(Home));