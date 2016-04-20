jest.unmock('../LightBulb.js');

import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';
import TestedComponent from '../LightBulb.js';

describe('TestedComponent', () => {

	it('input 0', () => {

		const input = JSON.parse("{\"isOn\":0}");
		const testedComponent = TestUtils.renderIntoDocument(
			<TestedComponent {...input} />
		);
		console.log(testedComponent);

	});

	it('input 1', () => {

		const input = JSON.parse("{\"isOn\":-1}");
		const testedComponent = TestUtils.renderIntoDocument(
			<TestedComponent {...input} />
		);
		console.log(testedComponent);

	});


});
