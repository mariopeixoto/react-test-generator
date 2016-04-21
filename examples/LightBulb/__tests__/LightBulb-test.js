jest.unmock('../LightBulb.js');

import React from 'react';
import ReactDOMServer from 'react-dom/server';
import LightBulb from '../LightBulb.js';

//Generated by ReactTGN on Wed Apr 20 2016 22:14:01 GMT-0500 (CDT)
describe('LightBulb', () => {

	it('input 0', () => {

		//Rendering component with input
		const input = JSON.parse("{\"isOn\":0}");
		const lightBulb = ReactDOMServer.renderToStaticMarkup(
			<LightBulb {...input} />
		);
		//Expectations
		expect(lightBulb).toEqual("<div>Light is off</div>");

	});

	it('input 1', () => {

		//Rendering component with input
		const input = JSON.parse("{\"isOn\":-1}");
		const lightBulb = ReactDOMServer.renderToStaticMarkup(
			<LightBulb {...input} />
		);
		//Expectations
		expect(lightBulb).toEqual("<div>Light is on</div>");

	});


});