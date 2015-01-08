var Brute = function(options) {
    options = options || {};
    this.characterSet = options.characterSet || ['a', 'b', 'c', 'd', 'e', 'f'];
    this.length = this.characterSet.length;
    this.endPoint = options.endPoint || [];
};

Brute.prototype.fromStringToNum = function(string) {
    var s = string.split(''), l = s.length, num = 0;
    for (var i = l; i--; ) {
        var indexOf = this.characterSet.indexOf(s[i]);
        if (!~indexOf) {
            throw new Error('unknown character `' + s[i] + '` at position ' + i);
        }
        num += (indexOf + 1) * Math.pow(this.length,  l - i - 1);
    }
    return num;
};

var b = new Brute();