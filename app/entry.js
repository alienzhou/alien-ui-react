import React from 'react';
import ReactDOM from 'react-dom';
import Radio from './components/radio.jsx';
import Header from './components/header.jsx';
import Textbox from './components/textbox.jsx';
import Combobox from './components/combobox.jsx';
import Slider from './components/slider.jsx';
import Checkbox from './components/checkbox.jsx';
import Spinner from './components/spinner.jsx';
import Toggle from './components/toggle.jsx';

var comboboxData = [{
	text: '与我常在',
	val: 1,
	chosen: false
}, {
	text: '路过蜻蜓',
	val: 2,
	chosen: false
}, {
	text: '当爱已成往事',
	val: 3,
	chosen: true
}, {
	text: '陀飞轮',
	val: 4,
	chosen: true
}, {
	text: '红',
	val: 5,
	chosen: true
}, {
	text: '愿你决定',
	val: 6,
	chosen: false
}, {
	text: '我在这一街角患过伤风（终极复刻版）',
	val: 7,
	chosen: false
}, {
	text: '午后红茶',
	val: 8,
	chosen: false
}, {
	text: '侧面',
	val: 9,
	chosen: false
}, {
	text: '钟无艳',
	val: 10,
	chosen: false
}, {
	text: '红颜旧',
	val: 11,
	chosen: false
}];

var radioData = [{
	text: '均匀分布',
	val: '1',
	chosen: false
}, {
	text: '正态分布',
	val: '2',
	chosen: true
}, {
	text: '随机分布',
	val: '3',
	chosen: false
}];

var checkboxData = [{
	text:'Jason Mraz',
	val:1,
	chosen:false
}, {
	text:'张国荣',
	val:2,
	chosen:true
}, {
	text:'谢安琪',
	val:3,
	chosen:false
}, {
	text:'陈奕迅',
	val:4,
	chosen:true
}];

main();

function main() {
	ReactDOM.render( <Radio items={radioData} /> , document.getElementById('radioApp'));
	ReactDOM.render( <Header /> , document.getElementById('headerApp'));
	ReactDOM.render( <Textbox placeholder='随便输点吧' val='一尘不染' editable='true' /> , document.getElementById('textboxApp'));
	ReactDOM.render( <Combobox items={comboboxData} multi='true' editable='false' /> , document.getElementById('comboboxApp'));
	ReactDOM.render( <Slider val='76' max='200' min='10' step='3' /> , document.getElementById('sliderApp'));
	ReactDOM.render( <Slider val='700' max='1000' min='-500' step='100' /> , document.getElementById('sliderApp2'));
	ReactDOM.render( <Checkbox items={checkboxData} /> , document.getElementById('checkboxApp'));
	ReactDOM.render( <Spinner val='26' max='200' min='10' step='3' editable='false' /> , document.getElementById('spinnerApp'));
	ReactDOM.render( <Toggle status='on' /> , document.getElementById('toggleApp1'));
	ReactDOM.render( <Toggle status='off' /> , document.getElementById('toggleApp2'));
}