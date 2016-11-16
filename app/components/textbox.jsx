import React from 'React';
import '../less/textbox.less';

export default class Textbox extends React.Component {
	constructor(props) {
		super(props);
		this.state = {val:props.val};
	}
	changeText(e){
		if(this.props.editable=='false'){
			return;
		}
		this.setState({val:e.target.value});
	}
	render(){
		return <input className="alien-textbox" placeholder={this.props.placeholder} value={this.state.val} onChange={this.changeText} />
	}
}