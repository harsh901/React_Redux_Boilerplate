import React from 'react';
import './home.css';
import Images from './images' 

class Home extends React.Component { 
	constructor(props) {
		super(props);
	}
	
	componentDidMount() {
		this.props.receivedList();
	}
	render() {
		console.log(this.props)
		return (
			<div className="bgcl col-12">
				<h1>Gallery</h1>
				<Images cameras={this.props.receivingList}/>
			</div>
		)
	}
}
export default Home;