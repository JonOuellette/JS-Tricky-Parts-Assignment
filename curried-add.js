function curriedAdd(total = 0) {
    return function adder(next) {
        if (next === undefined) {
            return total;
        } else {
            total += next;
            return adder;
        }
    };
}


module.exports = { curriedAdd };
