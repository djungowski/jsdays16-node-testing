var Calculator = require('../lib/calculator');

describe('Calculator tests', function() {
	beforeEach(function() {
	    this.calc = new Calculator();
	});

    it('is an existing object', function() {
        expect(this.calc).toEqual(jasmine.any(Calculator));
    });

	describe('#add()', function() {
	    it('adds correctly', function() {
			var addResult = this.calc.add(2, 4);
			expect(addResult).toBe(6);
	    });

		it('still adds correctly', function() {
			var addResult = this.calc.add(22, 4);
			expect(addResult).toBe(26);
		});
	});
});