import React from 'react';
import '../less/toggle.less';

export default class Toggle extends React.Component{
	constructor(props){
		super(props);
		var status='';
		if(props.status=='true'||props.status=='on'){
			status='on';
		}else{
			status='off';
		}
		this.state={status:status};
	}
	toggleButton=()=>{
		var status=this.state.status=='on'?'off':'on';
		this.setState({status:status});
	}
	render(){
		var className='bar toggle-'+this.state.status;
		return (
			<div className='alien-toggle' >
				<div className={className} >
					<span className='button' onClick={this.toggleButton} ></span>
				</div>
			</div>
		)
	}
}