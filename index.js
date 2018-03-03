module.exports.range = function(max, min = 0) {
    let returned = [];
    for(var i = min; i <= max; i++) {
        returned.push(i);
    };
    return returned;
};

module.exports.random = function(max, min = 0) {
    let returned = [];
    for (var i = min; i <= max; i++) {
        returned.push(i);
    };
    return returned[Math.floor(Math.random() * returned.length)];
}