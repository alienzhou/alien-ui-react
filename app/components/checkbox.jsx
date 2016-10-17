import React from 'react';
import '../less/checkbox.less';

class CheckItem extends React.Component{
	constructor(props){
		super(props);
	}
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

export default class Checkbox extends React.Component{
	/**
	 * [_preProcess 进行props数据预处理]
	 * @param  {[array]} props [初始属性]
	 * @return {[array]}   [处理后的属性]
	 */
	_preProcess(props){
	  	var chosenList=[];
		// 初始化key值
		props.items.forEach((v,i)=>{
			v.key=i;
			if(v.chosen){
				delete v.chosen;
				chosenList.push(v);
			}else{
				delete v.chosen;
			}
		});
		return {
			props:props,
			chosenList:chosenList
		};
	}

	constructor(props){
		super(props);
		var result=this._preProcess(props);
    	this.props=result.props;
    	this.state = {chosenList: result.chosenList};
	}

	/**
	 * [handleItemClick 处理点击事件]
	 * @param  {[object]} item [点击项目的数据对象]
	 */
	handleItemClick(item){
		var index=-1,
			chosenItems=this.state.chosenList;
		// 比对当前选中状态中是否存在点击的项目
		for(var i=0,len=chosenItems.length; i<len; i++){
			if(chosenItems[i].key==item.key){// 存在选中项目
				// 记录位置
				index=i;
				break;
			}
		}
		if(index<0){// 该项目原始状态为“被选中”
			// 添加新状态
			chosenItems.push(item);
		}else{// 该项目原始状态为“未被选中”
			// 删除该状态
			chosenItems.splice(index,1);
		}
		this.setState({chosenList:chosenItems});
    }

	render(){
		return (
			<div>
				<ul className="alien-checkbox">
				{
					this.props.items.map((item)=>{
						let chosen='';
						if(this.state.chosenList.filter((v,i)=>{return v.key==item.key}).length>0){
							chosen='chosen';
						}
						return (
							<CheckItem handler={this.handleItemClick.bind(this,item)} 
								key={item.key} chosen={chosen} item={item} />
						)
					},this)
				}
				</ul>
			</div>
		)
	}
}