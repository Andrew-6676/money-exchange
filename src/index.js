module.exports = function makeExchange(currency) {
    // Return an object containing the minimum number of coins needed to make change
    if (currency>10000) {
        return {error: "You are rich, my friend! We don't have so much coins for exchange"}
    }
    if (currency<0) {
        return {}
    }
    let c = [
        {l:'H', v:50},
        {l:'Q', v:25},
        {l:'D', v:10},
        {l:'N', v:5},
        {l:'P', v:1},
    ];
    let result = {};
    c.forEach( x => {
        q = Math.floor(currency/x.v);
        if (q > 0) {
            result[x.l] = q;
            currency = currency % x.v;
        }
    });
    return result;
};