import React from 'react';
import ReactDOM from 'react-dom';
import Radio from './components/radio.jsx';
import Header from './components/header.jsx';
import Textbox from './components/textbox.jsx';

main();

function main() {
	ReactDOM.render(<Radio /> , document.getElementById('radioApp'));
	ReactDOM.render(<Header /> , document.getElementById('headerApp'));
	ReactDOM.render(<Textbox /> , document.getElementById('textboxApp'));
}