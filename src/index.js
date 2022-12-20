module.exports = function reverse(n) {
    let nString = n.toString().split("").reverse();
    if (n.toString().startsWith("-")) nString.pop();
    return Number(nString.join(""));
};
