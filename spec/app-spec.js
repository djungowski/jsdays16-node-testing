var app = require('../lib/app');
var supertest = require('supertest');

describe('app tests', function() {
	beforeEach(function() {
	    this.server = supertest(app);
	});

    it('returns a 404 by default', function(done) {

		this.server
			.get('/foobar')
			.expect(404)
			.end(finishSupertestCase(done));
    });

	it('returns 200 with body for /echo', function(done) {
		this.server
			.get('/echo')
			.expect(200, 'Success')
			.expect(function (response) {
				console.log(response);
			})
			.end(finishSupertestCase(done));
	});
});