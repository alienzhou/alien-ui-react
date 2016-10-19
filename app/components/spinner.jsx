import React from 'react';
import '../less/spinner.less';

export default class Spinner extends React.Component{
	constructor(props){
		super(props);
		this.state = {val:props.val};
	}
	handleSpinner(e){
		var base=e.target.className=='up'?1:-1;
		var result=this.state.val*1+this.props.step*base;
		this.setState({val:Math.min(Math.max(result,this.props.min),this.props.max)});
	}
	changeText(e){
		if(this.props.editable=='false'){
			return;
		}
		this.setState({val:e.target.value});
	}
	render(){
		return (
			<div className="alien-spinner">
				<div className="button" onClick={(e)=>(this.handleSpinner(e))} >
					<span className="up"></span>
					<span className="down"></span>
				</div>
				<input value={this.state.val} onChange={(e)=>{this.changeText(e)}} />
			</div>
		)
	}
}