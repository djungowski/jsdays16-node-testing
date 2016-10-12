'use strict'

const returnsPromise = function (foo) {

	return new Promise(function (res, rej) {
		if (foo) {
			return res('lala');
		} else {
			return rej('o noes!');
		}
	});
};

module.exports = returnsPromise;