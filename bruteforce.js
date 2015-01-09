var Brute = function(options) {
    options = options || {};
    this.characterSet = options.characterSet || ['a', 'b', 'c', 'd', 'e', 'f'];
    this.length = this.characterSet.length;
    this.endPoint = options.endPoint || 1;
    this.async = 5;
};

/**
 * Returns numerical representation of the string according to character table
 * @param {string} string
 * @returns {number}
 */
Brute.prototype.fromStringToNumber = function(string) {
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

/**
 * Returns string based on the number and character table
 */
Brute.prototype.fromNumberToString = function(number) {
    return (number > 0) ? this.fromNumberToString(Math.floor((number - 1) / this.length)) + this.characterSet[(number - 1) % this.length] : ''; 
};

Brute.prototype.start = function() {
    
};

Brute.prototype.exec = function(string, callback) {
    console.log(string);
    callback(null);
};

Brute.prototype.save = function(callback) {
    require('fs').writeFile('.bf', this.endPoint, callback);
};

Brute.prototype.next = function* () {
    yield this.fromNumberToString(this.endPoint++);
};

var b = new Brute();
console.log(b.next().next());