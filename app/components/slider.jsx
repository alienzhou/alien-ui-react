import React from 'react';
import '../less/slider.less';

class Button extends React.Component{
	constructor(props){
		super(props);
	}
	render(){
		return (
			<span className='button-combo' style={{left:this.props.percent+'%'}}>
				<span className='button' onMouseDown={this.props.callbackBind}></span>
				<span className='text'>{this.props.val}</span>
			</span>
		)
	}
}

export default class Toggle extends React.Component{
	constructor(props){
		super(props);
		this.state={
			percent:'0%',
			init:true
		}
		var func=this.moveButton;
		document.addEventListener('mouseup',()=>{
			document.onselectstart=function(){
				return true;
			}
			document.body.style.cursor='default';
			document.removeEventListener('mousemove',func);
		});
	}
	componentDidMount(){
		var percent=(this.props.val-this.props.min)/(this.props.max-this.props.min)*100;
		if(percent<0){
			percent=0;
		}
		if(percent>100){
			percent=100;
		}
		this.setState({
			percent:percent
		});
	}
	moveButton=(e)=>{
		var rect=this.bar.getBoundingClientRect();
		var percent=(e.clientX-rect.left)/rect.width*100;
		if(percent<0){
			percent=0;
		}
		if(percent>100){
			percent=100;
		}
		this.setState({
			percent:percent,
			init:false
		});
	}
	bindMousedown=()=>{
		document.onselectstart=function(){
			return false;
		}
		document.body.style.cursor='pointer';
		document.addEventListener('mousemove',this.moveButton);
	}
	render(){
		var val=0;
		if(this.state.init){
			val=this.props.val;
		}else if(this.state.percent==100){
			val=this.props.max;
		}else if(this.state.percent==0){
			val=this.props.min;
		}else{
			val=Math.floor(this.state.percent/100*(this.props.max-this.props.min)/this.props.step)*this.props.step + +this.props.min;
		}
		return (
			<div ref={(ref)=>{this.bar=ref}} className='alien-slider'>
				<Button percent={this.state.percent} val={val} callbackBind={this.bindMousedown} />
			</div>
		)
	}
}