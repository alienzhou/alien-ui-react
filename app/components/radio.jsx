import React from 'react';
import '../less/radio.less';

export default class Radio extends React.Component {
  	_preProcess(props){
  		var chosen;
		// 初始化key值
		props.items.forEach((v,i)=>{
			v.key=i;
			if(!chosen && v.chosen){
				chosen=v;
			}
		});

		return {
			props:props,
			chosen:chosen
		};
	}
	constructor(props) {
    	super(props);
    	var result=this._preProcess(props);
    	this.props=result.props;
    	this.state = {chosen: result.chosen};
  	}
	handleItemClick(item){
		this.setState({chosen:item});
    }
	render() {
		return (
			<div>
				<ul className="alien-radio">
				{
					this.props.items.map((item)=>{
						let chosen='';
						if(item.key==this.state.chosen.key){
							chosen='chosen';
						}
						return (
							<RadioItem handler={this.handleItemClick.bind(this,item)} 
								key={item.key} chosen={chosen} item={item} />
						)
					},this)
				}
				</ul>
			</div>
		)
	}
}

class RadioItem extends React.Component {
	render(){
		return (
			<li className="clearfix" onClick={this.props.handler}>
				<span className="button">
					<span className={this.props.chosen}></span>
				</span>
				<span className="text">{this.props.item.text}</span>
			</li>
		)
	}
}