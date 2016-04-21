jest.unmock('../LightBulb.js');

import React from 'react';
import ReactDOMServer from 'react-dom/server';
import LightBulb from '../LightBulb.js';

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
