import React from 'react';
import '../less/header.less';

export default class Header extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			text:this.props.text
		}
	}
	render() {
		var decHeight=this.props.fontSize/2;
        var spacing=this.props.fontSize>40?this.props.fontSize/15:0;
        var weight=this.props.fontSize>40?600:400;

        return 	<div className="alien-header clearfix" style={{height:this.props.fontSize + 'px'}}>
        			<span className="text" style={{fontSize: this.props.fontSize +'px',letterSpacing: spacing +'px',fontWeight:weight}}>
        				{this.props.text}
        			</span>
        			<span className="decoration">
        				<span></span>
        				<span></span>
        				<span></span>
        			</span>
        		</div>
	}
}

Header.defaultProps = { 
	fontSize: 30,
  	text: 'INPUT',
};
