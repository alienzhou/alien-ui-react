import React from 'react';
import '../less/alien-ui-combobox.less';
import PubSub from 'pubsub-js';

class ComboItem extends React.Component{
	constructor(props){
		super(props);
	}
	render(){
		var classVal=this.props.item.chosen?'active':'';
		return <li data-alienkey={this.props.item.alienKey} className={classVal}>{this.props.item.text}</li>
	}
}

class ComboList extends React.Component{
	constructor(props){
		super(props);
		this.state={
			items:props.items
		};
	}
	selectItem(e){
		var obj=e.target;
		if(obj.tagName.toLowerCase()=='li'){
			this.props.callbackSelect(obj.dataset.alienkey);
		}
	}
	render(){
		return <ul className='combobox-panel' onClick={(e)=>this.selectItem(e)}>
			{
				this.state.items.map((item,index)=>{
					return <ComboItem key={item.alienKey} item={item} />
				})
			}
		</ul>
	}
}

class ComboInput extends React.Component{
	constructor(props){
		super(props);
	}
	render(){
		return (
			<div className='input-area'>
				<span className='toggle'></span>
				<input value={this.props.inputVal} />
			</div>
		)
	}
}

export default class Combobox extends React.Component {
	constructor(props){
		props.combodata.forEach((v,i)=>{
			v.alienKey=i;
		});
		
		super(props);
		this.state={
			open:false,
			items:props.combodata
		}
		document.body.addEventListener('click',(e)=>{
			if(e.target.tagName.toLowerCase()!='span'&&e.target.tagName.toLowerCase()!='li'){
				this.setState({
					open:false
				});
			}
		});
	}
	togglePanel(e){
		this.setState({
			open:!this.state.open
		});
	}
	changeText(chosenKey){
		this.state.items.forEach((v,i)=>{
			v.chosen=false;
			if(chosenKey==v.alienKey){
				v.chosen=true;
			}
		});
		this.setState(this.state);
	}
	render(){
		var className=this.state.open?'alien-combobox open':'alien-combobox';
		var chosenVal=this.state.items.filter((v,i)=>{
			return v.chosen==true;
			v.chosen=false;
		});
		return (
			<div ref={(ref)=>{this.combobox=ref}} className={className} onClick={(e)=>{this.togglePanel(e)}} >
				<ComboInput inputVal={chosenVal[0].text} />
				<ComboList items={this.state.items} callbackSelect={(chosenKey)=>this.changeText(chosenKey)} />
			</div>
		)
	}
}