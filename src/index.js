module.exports = function makeExchange(currency) {
    // Return an object containing the minimum number of coins needed to make change
    if (currency>10000) {
        return {error: "You are rich, my friend! We don't have so much coins for exchange"}
    }
    if (currency<0) {
        return {}
    }

    x = [50, 25, 10, 5, 1];
    y = ['H', 'Q', 'D', 'N', 'P'];

    result = {};
    rest = currency;
    for (c in x) {
        q = Math.floor(rest/x[c]);
        if (q) {
            result[y[c]] = q;
        }
        rest = rest % x[c];
        if (rest === 0) {
            return result;
        }
    }
};