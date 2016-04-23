jest.unmock('../BootstrapModal.js');

var React = require('react');
var ReactDOMServer = require('react-dom/server');
var BootstrapModal = require('../BootstrapModal.js');

//Generated by ReactTGN on Fri Apr 22 2016 18:01:12 GMT-0500 (CDT)
describe('BootstrapModal', function () {

	it('input 0', function () {

		//Rendering component with input
		var input = JSON.parse("\"{}\"");
		var bootstrapModal = ReactDOMServer.renderToStaticMarkup(
			<BootstrapModal {...input} />
		);
		//Expectations
		expect(bootstrapModal).toEqual("<div class=\"modal fade\"><div class=\"modal-dialog\"><div class=\"modal-content\"><div class=\"modal-header\"><button type=\"button\" class=\"close\">×</button><h3></h3></div><div class=\"modal-body\"></div><div class=\"modal-footer\"></div></div></div></div>");

	});

	it('input 1', function () {

		//Rendering component with input
		var input = JSON.parse("{\"cancel\":0}");
		var bootstrapModal = ReactDOMServer.renderToStaticMarkup(
			<BootstrapModal {...input} />
		);
		//Expectations
		expect(bootstrapModal).toEqual("<div class=\"modal fade\"><div class=\"modal-dialog\"><div class=\"modal-content\"><div class=\"modal-header\"><button type=\"button\" class=\"close\">×</button><h3></h3></div><div class=\"modal-body\"></div><div class=\"modal-footer\"></div></div></div></div>");

	});

	it('input 2', function () {

		//Rendering component with input
		var input = JSON.parse("{\"confirm\":-1,\"cancel\":0}");
		var bootstrapModal = ReactDOMServer.renderToStaticMarkup(
			<BootstrapModal {...input} />
		);
		//Expectations
		expect(bootstrapModal).toEqual("<div class=\"modal fade\"><div class=\"modal-dialog\"><div class=\"modal-content\"><div class=\"modal-header\"><button type=\"button\" class=\"close\">×</button><h3></h3></div><div class=\"modal-body\"></div><div class=\"modal-footer\"><a class=\"btn-primary\">-1</a></div></div></div></div>");

	});

	it('input 3', function () {

		//Rendering component with input
		var input = JSON.parse("{\"confirm\":0,\"cancel\":-1}");
		var bootstrapModal = ReactDOMServer.renderToStaticMarkup(
			<BootstrapModal {...input} />
		);
		//Expectations
		expect(bootstrapModal).toEqual("<div class=\"modal fade\"><div class=\"modal-dialog\"><div class=\"modal-content\"><div class=\"modal-header\"><button type=\"button\" class=\"close\">×</button><h3></h3></div><div class=\"modal-body\"></div><div class=\"modal-footer\"><a class=\"btn-default\">-1</a></div></div></div></div>");

	});

	it('input 4', function () {

		//Rendering component with input
		var input = JSON.parse("{\"confirm\":-1,\"cancel\":0}");
		var bootstrapModal = ReactDOMServer.renderToStaticMarkup(
			<BootstrapModal {...input} />
		);
		//Expectations
		expect(bootstrapModal).toEqual("<div class=\"modal fade\"><div class=\"modal-dialog\"><div class=\"modal-content\"><div class=\"modal-header\"><button type=\"button\" class=\"close\">×</button><h3></h3></div><div class=\"modal-body\"></div><div class=\"modal-footer\"><a class=\"btn-primary\">-1</a></div></div></div></div>");

	});

	it('input 5', function () {

		//Rendering component with input
		var input = JSON.parse("{\"confirm\":-1}");
		var bootstrapModal = ReactDOMServer.renderToStaticMarkup(
			<BootstrapModal {...input} />
		);
		//Expectations
		expect(bootstrapModal).toEqual("<div class=\"modal fade\"><div class=\"modal-dialog\"><div class=\"modal-content\"><div class=\"modal-header\"><button type=\"button\" class=\"close\">×</button><h3></h3></div><div class=\"modal-body\"></div><div class=\"modal-footer\"><a class=\"btn-primary\">-1</a></div></div></div></div>");

	});

	it('input 6', function () {

		//Rendering component with input
		var input = JSON.parse("{\"confirm\":0,\"cancel\":0}");
		var bootstrapModal = ReactDOMServer.renderToStaticMarkup(
			<BootstrapModal {...input} />
		);
		//Expectations
		expect(bootstrapModal).toEqual("<div class=\"modal fade\"><div class=\"modal-dialog\"><div class=\"modal-content\"><div class=\"modal-header\"><button type=\"button\" class=\"close\">×</button><h3></h3></div><div class=\"modal-body\"></div><div class=\"modal-footer\"></div></div></div></div>");

	});

	it('input 7', function () {

		//Rendering component with input
		var input = JSON.parse("{\"confirm\":-1,\"cancel\":0}");
		var bootstrapModal = ReactDOMServer.renderToStaticMarkup(
			<BootstrapModal {...input} />
		);
		//Expectations
		expect(bootstrapModal).toEqual("<div class=\"modal fade\"><div class=\"modal-dialog\"><div class=\"modal-content\"><div class=\"modal-header\"><button type=\"button\" class=\"close\">×</button><h3></h3></div><div class=\"modal-body\"></div><div class=\"modal-footer\"><a class=\"btn-primary\">-1</a></div></div></div></div>");

	});

	it('input 8', function () {

		//Rendering component with input
		var input = JSON.parse("{\"confirm\":0,\"cancel\":-1}");
		var bootstrapModal = ReactDOMServer.renderToStaticMarkup(
			<BootstrapModal {...input} />
		);
		//Expectations
		expect(bootstrapModal).toEqual("<div class=\"modal fade\"><div class=\"modal-dialog\"><div class=\"modal-content\"><div class=\"modal-header\"><button type=\"button\" class=\"close\">×</button><h3></h3></div><div class=\"modal-body\"></div><div class=\"modal-footer\"><a class=\"btn-default\">-1</a></div></div></div></div>");

	});

	it('input 9', function () {

		//Rendering component with input
		var input = JSON.parse("{\"confirm\":-1,\"cancel\":0}");
		var bootstrapModal = ReactDOMServer.renderToStaticMarkup(
			<BootstrapModal {...input} />
		);
		//Expectations
		expect(bootstrapModal).toEqual("<div class=\"modal fade\"><div class=\"modal-dialog\"><div class=\"modal-content\"><div class=\"modal-header\"><button type=\"button\" class=\"close\">×</button><h3></h3></div><div class=\"modal-body\"></div><div class=\"modal-footer\"><a class=\"btn-primary\">-1</a></div></div></div></div>");

	});

	it('input 10', function () {

		//Rendering component with input
		var input = JSON.parse("{\"confirm\":-1,\"cancel\":-1}");
		var bootstrapModal = ReactDOMServer.renderToStaticMarkup(
			<BootstrapModal {...input} />
		);
		//Expectations
		expect(bootstrapModal).toEqual("<div class=\"modal fade\"><div class=\"modal-dialog\"><div class=\"modal-content\"><div class=\"modal-header\"><button type=\"button\" class=\"close\">×</button><h3></h3></div><div class=\"modal-body\"></div><div class=\"modal-footer\"><a class=\"btn-default\">-1</a><a class=\"btn-primary\">-1</a></div></div></div></div>");

	});

	it('input 11', function () {

		//Rendering component with input
		var input = JSON.parse("{\"confirm\":0,\"cancel\":0}");
		var bootstrapModal = ReactDOMServer.renderToStaticMarkup(
			<BootstrapModal {...input} />
		);
		//Expectations
		expect(bootstrapModal).toEqual("<div class=\"modal fade\"><div class=\"modal-dialog\"><div class=\"modal-content\"><div class=\"modal-header\"><button type=\"button\" class=\"close\">×</button><h3></h3></div><div class=\"modal-body\"></div><div class=\"modal-footer\"></div></div></div></div>");

	});

	it('input 12', function () {

		//Rendering component with input
		var input = JSON.parse("{\"confirm\":0}");
		var bootstrapModal = ReactDOMServer.renderToStaticMarkup(
			<BootstrapModal {...input} />
		);
		//Expectations
		expect(bootstrapModal).toEqual("<div class=\"modal fade\"><div class=\"modal-dialog\"><div class=\"modal-content\"><div class=\"modal-header\"><button type=\"button\" class=\"close\">×</button><h3></h3></div><div class=\"modal-body\"></div><div class=\"modal-footer\"></div></div></div></div>");

	});

	it('input 13', function () {

		//Rendering component with input
		var input = JSON.parse("{\"confirm\":-1,\"cancel\":-1}");
		var bootstrapModal = ReactDOMServer.renderToStaticMarkup(
			<BootstrapModal {...input} />
		);
		//Expectations
		expect(bootstrapModal).toEqual("<div class=\"modal fade\"><div class=\"modal-dialog\"><div class=\"modal-content\"><div class=\"modal-header\"><button type=\"button\" class=\"close\">×</button><h3></h3></div><div class=\"modal-body\"></div><div class=\"modal-footer\"><a class=\"btn-default\">-1</a><a class=\"btn-primary\">-1</a></div></div></div></div>");

	});

	it('input 14', function () {

		//Rendering component with input
		var input = JSON.parse("{\"confirm\":-1,\"cancel\":0}");
		var bootstrapModal = ReactDOMServer.renderToStaticMarkup(
			<BootstrapModal {...input} />
		);
		//Expectations
		expect(bootstrapModal).toEqual("<div class=\"modal fade\"><div class=\"modal-dialog\"><div class=\"modal-content\"><div class=\"modal-header\"><button type=\"button\" class=\"close\">×</button><h3></h3></div><div class=\"modal-body\"></div><div class=\"modal-footer\"><a class=\"btn-primary\">-1</a></div></div></div></div>");

	});

	it('input 15', function () {

		//Rendering component with input
		var input = JSON.parse("{\"confirm\":0,\"cancel\":-1}");
		var bootstrapModal = ReactDOMServer.renderToStaticMarkup(
			<BootstrapModal {...input} />
		);
		//Expectations
		expect(bootstrapModal).toEqual("<div class=\"modal fade\"><div class=\"modal-dialog\"><div class=\"modal-content\"><div class=\"modal-header\"><button type=\"button\" class=\"close\">×</button><h3></h3></div><div class=\"modal-body\"></div><div class=\"modal-footer\"><a class=\"btn-default\">-1</a></div></div></div></div>");

	});

	it('input 16', function () {

		//Rendering component with input
		var input = JSON.parse("{\"confirm\":-1,\"cancel\":0}");
		var bootstrapModal = ReactDOMServer.renderToStaticMarkup(
			<BootstrapModal {...input} />
		);
		//Expectations
		expect(bootstrapModal).toEqual("<div class=\"modal fade\"><div class=\"modal-dialog\"><div class=\"modal-content\"><div class=\"modal-header\"><button type=\"button\" class=\"close\">×</button><h3></h3></div><div class=\"modal-body\"></div><div class=\"modal-footer\"><a class=\"btn-primary\">-1</a></div></div></div></div>");

	});

	it('input 17', function () {

		//Rendering component with input
		var input = JSON.parse("{\"confirm\":-1,\"cancel\":-1}");
		var bootstrapModal = ReactDOMServer.renderToStaticMarkup(
			<BootstrapModal {...input} />
		);
		//Expectations
		expect(bootstrapModal).toEqual("<div class=\"modal fade\"><div class=\"modal-dialog\"><div class=\"modal-content\"><div class=\"modal-header\"><button type=\"button\" class=\"close\">×</button><h3></h3></div><div class=\"modal-body\"></div><div class=\"modal-footer\"><a class=\"btn-default\">-1</a><a class=\"btn-primary\">-1</a></div></div></div></div>");

	});

	it('input 18', function () {

		//Rendering component with input
		var input = JSON.parse("{\"confirm\":0,\"cancel\":0}");
		var bootstrapModal = ReactDOMServer.renderToStaticMarkup(
			<BootstrapModal {...input} />
		);
		//Expectations
		expect(bootstrapModal).toEqual("<div class=\"modal fade\"><div class=\"modal-dialog\"><div class=\"modal-content\"><div class=\"modal-header\"><button type=\"button\" class=\"close\">×</button><h3></h3></div><div class=\"modal-body\"></div><div class=\"modal-footer\"></div></div></div></div>");

	});

	it('input 19', function () {

		//Rendering component with input
		var input = JSON.parse("{\"confirm\":-1,\"cancel\":-1}");
		var bootstrapModal = ReactDOMServer.renderToStaticMarkup(
			<BootstrapModal {...input} />
		);
		//Expectations
		expect(bootstrapModal).toEqual("<div class=\"modal fade\"><div class=\"modal-dialog\"><div class=\"modal-content\"><div class=\"modal-header\"><button type=\"button\" class=\"close\">×</button><h3></h3></div><div class=\"modal-body\"></div><div class=\"modal-footer\"><a class=\"btn-default\">-1</a><a class=\"btn-primary\">-1</a></div></div></div></div>");

	});

	it('input 20', function () {

		//Rendering component with input
		var input = JSON.parse("{\"confirm\":0,\"cancel\":-1}");
		var bootstrapModal = ReactDOMServer.renderToStaticMarkup(
			<BootstrapModal {...input} />
		);
		//Expectations
		expect(bootstrapModal).toEqual("<div class=\"modal fade\"><div class=\"modal-dialog\"><div class=\"modal-content\"><div class=\"modal-header\"><button type=\"button\" class=\"close\">×</button><h3></h3></div><div class=\"modal-body\"></div><div class=\"modal-footer\"><a class=\"btn-default\">-1</a></div></div></div></div>");

	});

	it('input 21', function () {

		//Rendering component with input
		var input = JSON.parse("{\"confirm\":-1,\"cancel\":-1}");
		var bootstrapModal = ReactDOMServer.renderToStaticMarkup(
			<BootstrapModal {...input} />
		);
		//Expectations
		expect(bootstrapModal).toEqual("<div class=\"modal fade\"><div class=\"modal-dialog\"><div class=\"modal-content\"><div class=\"modal-header\"><button type=\"button\" class=\"close\">×</button><h3></h3></div><div class=\"modal-body\"></div><div class=\"modal-footer\"><a class=\"btn-default\">-1</a><a class=\"btn-primary\">-1</a></div></div></div></div>");

	});

	it('input 22', function () {

		//Rendering component with input
		var input = JSON.parse("{\"confirm\":0,\"cancel\":0}");
		var bootstrapModal = ReactDOMServer.renderToStaticMarkup(
			<BootstrapModal {...input} />
		);
		//Expectations
		expect(bootstrapModal).toEqual("<div class=\"modal fade\"><div class=\"modal-dialog\"><div class=\"modal-content\"><div class=\"modal-header\"><button type=\"button\" class=\"close\">×</button><h3></h3></div><div class=\"modal-body\"></div><div class=\"modal-footer\"></div></div></div></div>");

	});

	it('input 23', function () {

		//Rendering component with input
		var input = JSON.parse("{\"cancel\":-1}");
		var bootstrapModal = ReactDOMServer.renderToStaticMarkup(
			<BootstrapModal {...input} />
		);
		//Expectations
		expect(bootstrapModal).toEqual("<div class=\"modal fade\"><div class=\"modal-dialog\"><div class=\"modal-content\"><div class=\"modal-header\"><button type=\"button\" class=\"close\">×</button><h3></h3></div><div class=\"modal-body\"></div><div class=\"modal-footer\"><a class=\"btn-default\">-1</a></div></div></div></div>");

	});

	it('input 24', function () {

		//Rendering component with input
		var input = JSON.parse("{\"confirm\":-1,\"cancel\":-1}");
		var bootstrapModal = ReactDOMServer.renderToStaticMarkup(
			<BootstrapModal {...input} />
		);
		//Expectations
		expect(bootstrapModal).toEqual("<div class=\"modal fade\"><div class=\"modal-dialog\"><div class=\"modal-content\"><div class=\"modal-header\"><button type=\"button\" class=\"close\">×</button><h3></h3></div><div class=\"modal-body\"></div><div class=\"modal-footer\"><a class=\"btn-default\">-1</a><a class=\"btn-primary\">-1</a></div></div></div></div>");

	});

	it('input 25', function () {

		//Rendering component with input
		var input = JSON.parse("{\"confirm\":0,\"cancel\":-1}");
		var bootstrapModal = ReactDOMServer.renderToStaticMarkup(
			<BootstrapModal {...input} />
		);
		//Expectations
		expect(bootstrapModal).toEqual("<div class=\"modal fade\"><div class=\"modal-dialog\"><div class=\"modal-content\"><div class=\"modal-header\"><button type=\"button\" class=\"close\">×</button><h3></h3></div><div class=\"modal-body\"></div><div class=\"modal-footer\"><a class=\"btn-default\">-1</a></div></div></div></div>");

	});

	it('input 26', function () {

		//Rendering component with input
		var input = JSON.parse("{\"confirm\":0,\"cancel\":-1}");
		var bootstrapModal = ReactDOMServer.renderToStaticMarkup(
			<BootstrapModal {...input} />
		);
		//Expectations
		expect(bootstrapModal).toEqual("<div class=\"modal fade\"><div class=\"modal-dialog\"><div class=\"modal-content\"><div class=\"modal-header\"><button type=\"button\" class=\"close\">×</button><h3></h3></div><div class=\"modal-body\"></div><div class=\"modal-footer\"><a class=\"btn-default\">-1</a></div></div></div></div>");

	});

	it('input 27', function () {

		//Rendering component with input
		var input = JSON.parse("{\"confirm\":0}");
		var bootstrapModal = ReactDOMServer.renderToStaticMarkup(
			<BootstrapModal {...input} />
		);
		//Expectations
		expect(bootstrapModal).toEqual("<div class=\"modal fade\"><div class=\"modal-dialog\"><div class=\"modal-content\"><div class=\"modal-header\"><button type=\"button\" class=\"close\">×</button><h3></h3></div><div class=\"modal-body\"></div><div class=\"modal-footer\"></div></div></div></div>");

	});

	it('input 28', function () {

		//Rendering component with input
		var input = JSON.parse("{\"confirm\":-1}");
		var bootstrapModal = ReactDOMServer.renderToStaticMarkup(
			<BootstrapModal {...input} />
		);
		//Expectations
		expect(bootstrapModal).toEqual("<div class=\"modal fade\"><div class=\"modal-dialog\"><div class=\"modal-content\"><div class=\"modal-header\"><button type=\"button\" class=\"close\">×</button><h3></h3></div><div class=\"modal-body\"></div><div class=\"modal-footer\"><a class=\"btn-primary\">-1</a></div></div></div></div>");

	});

	it('input 29', function () {

		//Rendering component with input
		var input = JSON.parse("{\"confirm\":0,\"cancel\":0}");
		var bootstrapModal = ReactDOMServer.renderToStaticMarkup(
			<BootstrapModal {...input} />
		);
		//Expectations
		expect(bootstrapModal).toEqual("<div class=\"modal fade\"><div class=\"modal-dialog\"><div class=\"modal-content\"><div class=\"modal-header\"><button type=\"button\" class=\"close\">×</button><h3></h3></div><div class=\"modal-body\"></div><div class=\"modal-footer\"></div></div></div></div>");

	});

	it('input 30', function () {

		//Rendering component with input
		var input = JSON.parse("{\"confirm\":0}");
		var bootstrapModal = ReactDOMServer.renderToStaticMarkup(
			<BootstrapModal {...input} />
		);
		//Expectations
		expect(bootstrapModal).toEqual("<div class=\"modal fade\"><div class=\"modal-dialog\"><div class=\"modal-content\"><div class=\"modal-header\"><button type=\"button\" class=\"close\">×</button><h3></h3></div><div class=\"modal-body\"></div><div class=\"modal-footer\"></div></div></div></div>");

	});

	it('input 31', function () {

		//Rendering component with input
		var input = JSON.parse("{\"confirm\":-1}");
		var bootstrapModal = ReactDOMServer.renderToStaticMarkup(
			<BootstrapModal {...input} />
		);
		//Expectations
		expect(bootstrapModal).toEqual("<div class=\"modal fade\"><div class=\"modal-dialog\"><div class=\"modal-content\"><div class=\"modal-header\"><button type=\"button\" class=\"close\">×</button><h3></h3></div><div class=\"modal-body\"></div><div class=\"modal-footer\"><a class=\"btn-primary\">-1</a></div></div></div></div>");

	});

	it('input 32', function () {

		//Rendering component with input
		var input = JSON.parse("{\"confirm\":0,\"cancel\":0}");
		var bootstrapModal = ReactDOMServer.renderToStaticMarkup(
			<BootstrapModal {...input} />
		);
		//Expectations
		expect(bootstrapModal).toEqual("<div class=\"modal fade\"><div class=\"modal-dialog\"><div class=\"modal-content\"><div class=\"modal-header\"><button type=\"button\" class=\"close\">×</button><h3></h3></div><div class=\"modal-body\"></div><div class=\"modal-footer\"></div></div></div></div>");

	});


});