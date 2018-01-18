var Hamming = function(strand1, strand2) {
    this.strand1 = strand1;
    this.strand2 = strand2;
};

Hamming.prototype.compute = function() {
    return this.strand1 === this.strand2 ? 0 : null;
};

module.exports = Hamming;
