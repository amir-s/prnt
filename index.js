function prnt() {
	console.log.apply(null, Array.prototype.slice.call(arguments).map(i => JSON.stringify(i, null, 4)));
}

module.exports = prnt;