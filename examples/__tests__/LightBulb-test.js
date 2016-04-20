jest.unmock('../LightBulb.js');

import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';
import LightBulb from '../LightBulb.js';

describe('LightBulb', () => {

	it('input 0', () => {

		const input = JSON.parse("{\"isOn\":0}");
		const lightBulb = TestUtils.renderIntoDocument(
			<LightBulb {...input} />
		);
		console.log(lightBulb);

	});

	it('input 1', () => {

		const input = JSON.parse("{\"isOn\":-1}");
		const lightBulb = TestUtils.renderIntoDocument(
			<LightBulb {...input} />
		);
		console.log(lightBulb);

	});


});
