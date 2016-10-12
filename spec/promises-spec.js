const returnsPromise = require('../lib/promises');

describe('Promise tests', function() {
    it('resolves the correct value', function(done) {
		returnsPromise(true).then(function (value) {
			expect(value).toEqual('lala');
			done();
		});
    });

	it('rejects the promise', function(done) {
		returnsPromise(false).catch(function (value) {
			expect(value).toEqual('o noes!');
			done();
		});
	});
});