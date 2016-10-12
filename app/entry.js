import React from 'react';
import ReactDOM from 'react-dom';
import Radio from './components/radio.jsx';
import Header from './components/header.jsx';
import Textbox from './components/textbox.jsx';
import Combobox from './components/combobox.jsx';

var comboboxData = [{
	key: 1,
	text: '与我常在',
	val: 1,
	chosen: false
}, {
	key: 2,
	text: '路过蜻蜓',
	val: 2,
	chosen: false
}, {
	key: 3,
	text: '当爱已成往事',
	val: 3,
	chosen: true
}, {
	key: 4,
	text: '陀飞轮',
	val: 4,
	chosen: false
}, {
	key: 5,
	text: '红',
	val: 5,
	chosen: false
}];

main();

function main() {
	ReactDOM.render( <Radio /> , document.getElementById('radioApp'));
	ReactDOM.render( <Header /> , document.getElementById('headerApp'));
	ReactDOM.render( <Textbox /> , document.getElementById('textboxApp'));
	ReactDOM.render( <Combobox combodata={comboboxData} /> , document.getElementById('comboboxApp'));
}