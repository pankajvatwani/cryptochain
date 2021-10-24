const { GENESIS_DATA } = require('./config');
const cryptoHash = require('./crypto-hash');

class Block {
	constructor({ timestamp, hash, lastHash, data }) {
		this.timestamp = timestamp;
		this.hash = hash;
		this.lastHash = lastHash;
		this.data = data;
	}
	// factory method, create instances of class without constructor
	static genesis() {
		return new this(GENESIS_DATA);
	}

	static mineBlock({ lastBlock, data }) {
		const lastHash = lastBlock.hash;
		let timestamp = Date.now();
		return new this({ timestamp, lastHash, data, hash: cryptoHash(timestamp, lastHash, data) });
	}
}

module.exports = Block;
