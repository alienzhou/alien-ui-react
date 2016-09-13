import React from 'React';
import '../less/alien-ui-textbox.less';

export default class Textbox extends React.Component {
	constructor(props) {
		super(props);
		this.state = {};
	}
	render(){
		return <input className="alien-textbox" />
	}
}