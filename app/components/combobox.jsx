import React from 'react';
import '../less/combobox.less';
import PubSub from 'pubsub-js';

class ComboItem extends React.Component{
	constructor(props){
		super(props);
	}
	render(){
		var classVal=this.props.item.chosen?'active':'';
		return <li data-key={this.props.item.key} className={classVal}>{this.props.item.text}</li>
	}
}

class ComboList extends React.Component{
	constructor(props){
		super(props);
	}
	selectItem(e){
		var obj=e.target;
		if(obj.tagName.toLowerCase()=='li'){
			this.props.callbackSelect(obj.dataset.key);
		}
	}
	render(){
		return (
			<div className='combobox-panel'>
				<ul onClick={(e)=>this.selectItem(e)}>
				{
					this.props.items.map((item,index)=>{
						return <ComboItem key={item.key} item={item} />
					})
				}
				</ul>
			</div>
		)
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
				<input value={this.props.inputText} onChange={this.props.callbackText} />
			</div>
		)
	}
}

export default class Combobox extends React.Component {
	static defaultProps={
		multi:'false'// 默认单选
	}
	/**
	 * [_getKeys 获取被选中item的key值]
	 * @param  {[array]} items [所有项目]
	 * @return {[array]}   [选中的key值的数组]
	 */
	_getKeys(items){
		var list=[];
		items.forEach((v,i)=>{
			if(v.chosen){
				list.push(v.key);
			}
		});
		return list;
	}

	/**
	 * [_getTexts 获取被选中item的text值]
	 * @param  {[array]} items [所有项目]
	 * @param  {[array]} keys [被选中的key值]
	 * @return {[array]}   [选中的text值的数组]
	 */
	_getTexts(items,keys){
		var text=[];
		for (let i=0,len=keys.length; i<len; i++){
			for(let j=0,lenj=items.length; i<lenj; j++){
				if(keys[i]==items[j].key){
					text.push(items[j].text);
					break;
				}
			}
		}
		return text;
	}

	/**
	 * [_preProcess 进行props数据预处理]
	 * @param  {[array]} props [初始属性]
	 * @return {[array]}   [处理后的属性]
	 */
	_preProcess(props){
		// 初始化key值
		props.items.forEach((v,i)=>{
			v.key=i;
		});

		// 单选控件中，不应该具有两个被选中的项目
		if(props.multi=='false'){
			let flag=false;
			props.items.forEach((v,i)=>{
				if(v.chosen){
					v.chosen=!flag;
					flag=true;
				}
			});
		}

		return props;
	}

	constructor(props){
		super(props);
		this.props=this._preProcess(props);
		// 获取选中的key值
		var keys=this._getKeys(props.items);
		// 如果设置为单选，则只取第一个选中的key值
		if(props.multi=='false'){
			keys=keys.splice(0,1);
		}
		this.state={
			open:false,
			showList:props.items,
			chosenKeys:keys,
			inputText:this._getTexts(props.items,keys)
		}
		// 设置监听，当点击控件之外区域时，设置控件状态为关闭
		document.body.addEventListener('click',(e)=>{
			if(e.target.tagName.toLowerCase()!='span'&&e.target.tagName.toLowerCase()!='li'){
				this.setState({
					open:false
				});
			}
		});
	}

	/**
	 * [togglePanel 切换面板状态]
	 * @param  {[object]} e [事件对象]
	 */
	togglePanel=(e)=>{
		// 对于多选控件，点击li标签不需要收起面板
		if(this.props.multi=='true' && e.target.tagName.toLowerCase()=='li'){
			return;
		}

		var list=[];
		// 为保证交互效果，只在打开面板时需要初始化items，将所有选项显示（防止被过滤的选项不显示）
		// 并设置选中对应的选中状态
		if(!this.state.open){
			this.props.items.forEach((v,i)=>{
				this.state.chosenKeys.forEach((item,index)=>{
					if(v.key==item){
						v.chosen=true;
					}
				})
				list.push(v);
			});
			this.setState({
				open:!this.state.open,
				showList:list
			});
			return;
		}

		// 无特殊操作，直接切换面板状态
		this.setState({
			open:!this.state.open
		});
	}

	/**
	 * [chooseItem 更改所选项目]
	 * @param  {[string]} chosenKey [所选item的key值]
	 */
	chooseItem=(chosenKey)=>{
		this.state.showList.forEach((v,i)=>{
			if(this.props.multi=='false'){
				v.chosen=false;
			}
			if(chosenKey==v.key){
				v.chosen=!v.chosen;
			}
		});
		this.state.chosenKeys=this._getKeys(this.state.showList);
		this.state.inputText=this._getTexts(this.state.showList,this.state.chosenKeys).join(',');
		this.setState(this.state);
	}

	/**
	 * [changeText 更改input内容]
	 * @param  {[object]} e [事件对象]
	 */
	changeText=(e)=>{
		if(this.props.editable=='false'){
			return;
		}
		var text=e.target.value,
			list=[];
		this.props.items.forEach((v,i)=>{
			v.chosen=false;
			if(v.text.indexOf(text)>=0){
				list.push(v);
			}
		});
		this.setState({
			showList:list,
			chosenKeys:[],
			inputText:text
		});
	}

	render(){
		var className=this.state.open?'alien-combobox open':'alien-combobox';
		return (
			<div ref={(ref)=>{this.combobox=ref}} className={className} onClick={this.togglePanel} >
				<ComboInput inputText={this.state.inputText} callbackText={this.changeText} />
				<ComboList items={this.state.showList} callbackSelect={this.chooseItem} />
			</div>
		)
	}
}