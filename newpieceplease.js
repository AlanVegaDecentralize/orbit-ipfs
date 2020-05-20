class NewPiecePlease {
  constructor(Ipfs, OrbitDB) {
    this.OrbitDB = OrbitDB;

    this.node = new Ipfs({
      preload: { enabled: false },
      repo: "./ipfs",
      EXPERIMENTAL: { pubsub: true },
      config: {
        Bootstrap: [],
      },
    });
  }
}

try {
  const Ipfs = require("ipfs");
  const OrbitDB = require("orbit-db");

  module.exports = exports = new NewPiecePlease(Ipfs, OrbitDB);
} catch (e) {
  window.NPP = new NewPiecePlease(window.Ipfs, window.OrbitDB);
}
