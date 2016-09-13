import React from 'react';
import '../less/alien-ui-radio.less';

export default class Radio extends React.Component {
	constructor(props) {
    	super(props);
    	this.state = {items: props.items};
  	}
	handleItemClick(item,index){
		var states = this.state;
		states.items =this.state.items.map((val,i)=>{
			val.chosen = i == index ? 'chosen' : '';
			return val;
		});
		this.setState(states);
    }
	render() {
		return 	<div>
					<ul className="alien-radio">
					{
						this.state.items.map((item,index)=>{
							return (
								<RadioItem onClick={this.handleItemClick.bind(this,item,index)} 
									key={item.key} chosen={item.chosen} text={item.text} />
								)
						},this)
					}
					</ul>
				</div>;
	}
}
Radio.defaultProps = { items: [{key:0,text:'均匀分布',chosen:''},{key:1,text:'正态分布',chosen:'chosen'},{key:2,text:'随机分布',chosen:''}] };

class RadioItem extends React.Component {
	render(){
		return 	<li className="clearfix" onClick={this.props.onClick}>
					<span className="button">
						<span className={this.props.chosen}></span>
					</span>
					<span className="text">{this.props.text}</span>
				</li>
	}
}