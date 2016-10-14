import React from 'react';
import ReactDOM from 'react-dom';
import Radio from './components/radio.jsx';
import Header from './components/header.jsx';
import Textbox from './components/textbox.jsx';
import Combobox from './components/combobox.jsx';
import Slider from './components/slider.jsx';

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

main();

function main() {
	ReactDOM.render( <Radio /> , document.getElementById('radioApp'));
	ReactDOM.render( <Header /> , document.getElementById('headerApp'));
	ReactDOM.render( <Textbox /> , document.getElementById('textboxApp'));
	ReactDOM.render( <Combobox items={comboboxData} multi='true' /> , document.getElementById('comboboxApp'));
	ReactDOM.render( <Slider val='76' max='200' min='10' step='3' /> , document.getElementById('sliderApp'));
	ReactDOM.render( <Slider val='700' max='1000' min='-500' step='100' /> , document.getElementById('sliderApp2'));
}