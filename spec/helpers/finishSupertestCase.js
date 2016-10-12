global.finishSupertestCase = function(done) {
	return function (err) {
		if (err) {
			done.fail(err);
		} else {
			done();
		}
	};
}